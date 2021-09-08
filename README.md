# Calculadora IR - Frontend Portal

![Pipeline Status](https://gitlab.imaginebeyond.com.br/calculadora-ir/frontend-portal/badges/master/pipeline.svg)
![coverage](https://gitlab.imaginebeyond.com.br/calculadora-ir/frontend-portal/badges/master/coverage.svg)

## Dependências

-   npm 7.6.2+
-   Nodejs 12+
-   Yarn 1.22.10+

## Troubleshooting "Unable to verify the first certificate"

Caso você se deparar com algum problema relacionado à cadeia de certificados na hora de restaurar as dependências (`yarn install`), é devido ao fato de a VPN da Beyond fazer uso de um certificado self-signed para fins de inspeção de pacotes pelo firewall.

**Problema:**

```sh
yarn install
yarn install v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/styled-components/-/styled-components-4.4.1.tgz: unable to verify the first certificate".
info If you think this is a bug, please open a bug report with the information provided in "/*supressed*/yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```

**Solução:**

Indicar ao NPM o certificado em uso pelo firewall para que ele passe a "confiar" na validade do mesmo.
Para obter o certificado, que provavelmente já está instalado na sua máquina, procure o time de infra.

```bash
npm config set cafile /path/to/Fortinet_CA_SSL-Viradouro.cer
```

## Getting started

1. Realize o GIT clone do projeto:

```bash
git clone git@gitlab.imaginebeyond.com.br:calculadora-ir/frontend-portal.git
```

2. Defina a variável de ambiente `GITLAB_NPM_AUTH_TOKEN`

Essa variável irá conter seu PAT (Personal Access Token) que te identificará como um usuário autorizado a ler os pacotes npm do repositório privado do Gitlab.

Para gerar esse token, acesse https://gitlab.imaginebeyond.com.br/-/profile/personal_access_tokens e crie um token com escopo `read_api`.

3. Solicite o download e instalação dos módulos necessários, conforme o gerenciador de pacotes de sua preferência.

```bash
yarn install --frozen-lockfile
```

Atenção: o parâmetro `--frozen-lockfile` é necessário para garantir que as versões das dependências serão resolvidas da mesma forma que são nos ambientes de desenvolvimento/homologação e produção.

4. Iniciar servidor local para desenvolvimento:

```bash
yarn dev
```

5. Iniciar a verificação dos testes:

```bash
yarn test
```

6. Iniciar criação de build do projeto para publicação:

```bash
yarn build
```

## _Integração com biblioteca de componentes_

1º Método
Inclua diretamente no objeto devDependencies do arquivo package.json a referência ao projeto de biblioteca de componentes.

-   "frontend-components": "^0.1.0"

2º Método

Realize a instalação da biblioteca, através do gerenciador de pacotes de sua preferência:

-   yarn add frontend-components - D
