# Portfolio pessoal

Portfólio pessoal em HTML, CSS e JavaScript com visual dark e animações fluidas.

## Rodar localmente

Como o projeto e estatico, voce pode abrir o arquivo `index.html` direto no navegador ou usar um servidor local.

Exemplo com Node:

```bash
npx serve .
```

## Deploy + dominio is-a.dev (GitHub Pages)

Este projeto ja esta no GitHub Pages. Para publicar no `*.is-a.dev`, voce precisa:

1. Definir o dominio customizado no projeto (arquivo `CNAME`).
2. Criar o JSON de registro para o repositorio `is-a-dev/register`.
3. Abrir um PR nesse repositorio.

### 1) Gerar arquivos automaticamente

Use o script abaixo para gerar tudo que falta:

```powershell
./scripts/setup-isadev.ps1 -Domain "victor.is-a.dev" -Email "seu-email@exemplo.com"
```

Ele gera:

1. `CNAME` na raiz do projeto (para o GitHub Pages).
2. `isadev-registration/victor.is-a.dev.json` com o formato esperado pelo is-a.dev.

### 2) Formato do arquivo de registro

Exemplo do JSON gerado:

```json
{
	"owner": {
		"username": "vhprestes",
		"email": "seu-email@exemplo.com"
	},
	"record": {
		"CNAME": "vhprestes.github.io"
	}
}
```

### 3) Abrir PR no is-a.dev

Depois de instalar o GitHub CLI (`gh`) e autenticar (`gh auth login`), voce pode fazer:

```powershell
git add .
git commit -m "chore: setup is-a.dev domain"
git push

gh repo fork is-a-dev/register --clone --remote
Set-Location register

git checkout -b add-victor-domain
Copy-Item ../isadev-registration/victor.is-a.dev.json ./domains/
git add ./domains/victor.is-a.dev.json
git commit -m "Add victor.is-a.dev"
git push --set-upstream origin add-victor-domain

gh pr create --repo is-a-dev/register --title "Add victor.is-a.dev" --body "Adding domain for portfolio." --base main
```

Depois de aprovado, seu dominio `victor.is-a.dev` passa a resolver para seu GitHub Pages.

## Checklist rapido

1. Deploy ativo e acessivel por URL publica.
2. Arquivo JSON do dominio criado corretamente.
3. PR aberto no `is-a-dev/register`.
4. Aguardando merge e propagacao de DNS.