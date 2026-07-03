# Portfolio pessoal

Portfólio pessoal em HTML, CSS e JavaScript com visual dark e animações fluidas.

## Rodar localmente

Como o projeto e estatico, voce pode abrir o arquivo `index.html` direto no navegador ou usar um servidor local.

Exemplo com Node:

```bash
npx serve .
```

## Deploy + dominio is-a.dev

Este projeto ja esta no GitHub Pages. Para colocar um dominio `*.is-a.dev`, o registro precisa ficar no repositorio `is-a-dev/register`, e nao neste repo do portfolio.

Fluxo correto:

1. Mantenha este repositório sem `CNAME` para nao trocar o endereco do Pages.
2. Crie o JSON de registro em `is-a-dev/register/domains/`.
3. Abra o PR nesse repositorio.

Exemplo do registro para `victorhugo.is-a.dev`:

```json
{
	"owner": {
		"username": "vhprestes",
		"email": "vhprestes@gmail.com"
	},
	"record": {
		"CNAME": "vhprestes.github.io"
	}
}
```

Depois de aprovado, voce adiciona o dominio customizado nas configuracoes do GitHub Pages, se quiser usar o `is-a.dev` como endereco principal.

## Checklist rapido

1. Deploy ativo e acessivel por URL publica.
2. Arquivo JSON do dominio criado corretamente.
3. PR aberto no `is-a-dev/register`.
4. Aguardando merge e propagacao de DNS.