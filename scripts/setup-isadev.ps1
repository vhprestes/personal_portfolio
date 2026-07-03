param(
  [Parameter(Mandatory = $true)]
  [string]$Domain,

  [Parameter(Mandatory = $true)]
  [string]$Email,

  [string]$Username = "vhprestes"
)

$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

if ($Domain -notmatch "^[a-z0-9-]+\.is-a\.dev$") {
  throw "Domain must be in the format <subdomain>.is-a.dev"
}

$registrationDir = Join-Path $repoRoot "isadev-registration"
if (-not (Test-Path $registrationDir)) {
  New-Item -ItemType Directory -Path $registrationDir | Out-Null
}

$registrationFileName = "$Domain.json"
$registrationFilePath = Join-Path $registrationDir $registrationFileName

$cnameTarget = "vhprestes.github.io"

@"
$Domain
"@ | Set-Content -Path (Join-Path $repoRoot "CNAME") -NoNewline

$json = @{
  owner = @{
    username = $Username
    email = $Email
  }
  record = @{
    CNAME = $cnameTarget
  }
} | ConvertTo-Json -Depth 5

$json | Set-Content -Path $registrationFilePath

Write-Host "Done. Files generated:"
Write-Host "- CNAME"
Write-Host "- isadev-registration/$registrationFileName"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1) Commit and push this repo so GitHub Pages picks up CNAME."
Write-Host "2) Install GitHub CLI and authenticate: gh auth login"
Write-Host "3) Fork is-a-dev/register and add generated json to domains/$registrationFileName"
Write-Host "4) Open PR to is-a-dev/register"
