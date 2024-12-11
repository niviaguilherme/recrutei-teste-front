# Versão do Node

Esse projeto utiliza a versão do Node JS 18.19.\
Disponível em [https://nodejs.org/dist/v18.19.0/](https://nodejs.org/dist/v18.19.0/).

## Gerenciador de pacotes utilizado

O [Yarn](https://classic.yarnpkg.com/en/docs/install) foi escolhido como gerenciador de pacotes.\
Para a instalação yarn, basta executar o comando:

### `npm install --global yarn`

Após a instalação do yarn, dentro da pasta do projeto, para instalar todas as dependências, execute o comando:

### `yarn install`

## Executar o projeto localmente

### `yarn start`

O projeto será executado em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para vê-lo no navegador.

## Gerar a versão para produção

### `yarn run build`

Gera o projeto para produção na pasta `build`.\
Os arquivos são otimizados de maneira a obter o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\

Caso necessário veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.
