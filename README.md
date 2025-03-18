# Dicionário de Palavras

Este é um projeto de **dicionário de palavras** onde os usuários podem buscar palavras, adicionar aos favoritos, e visualizar o histórico de suas buscas. O projeto também implementa funcionalidades de persistência de dados utilizando o **AsyncStorage**.

## Tecnologias Usadas

- **Linguagens**: JavaScript, TypeScript
- **Framework**: React Native
- **Armazenamento Local**: AsyncStorage
- **API de Busca de Palavras**: API fictícia para busca de palavras
- **Gerenciamento de Estado**: React Hooks (`useState`, `useEffect`)
- **Outros**: Axios para requisições HTTP

## Funcionalidades
- **Favoritos**: O usuário pode adicionar palavras aos favoritos, que são armazenados no dispositivo.
- **Persistência de Dados**: Utiliza o **AsyncStorage** para armazenar dados localmente (usuário, favoritos e histórico de buscas).
- **API de Busca de Palavras**: Implementação fictícia de uma API para buscar palavras.

## Tecnologias e Dependências

- **React Native**: Framework para construir aplicações móveis.
- **AsyncStorage**: Para persistência local de dados (usuário, favoritos e histórico).
- **Axios**: Para realizar requisições HTTP.
- **React Navigation**: Para navegação entre as telas da aplicação.

## Instalação

### Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (para rodar o projeto React Native)

### Passos para Instalação

1. **Clone o repositório**:

   Abra o terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/MrGhostsnow/mobile-challenge-codash
   
2. **Navegue até o diretório do projeto:**:

   Depois de clonar, entre na pasta do projeto:

   ```bash
   cd mobile-challenge-codash

3. **Instale as dependências:**:

   Com o npm:

   ```bash
   npm install

4. **Inicie o servidor do Expo:**:

   Para iniciar o projeto e ver a aplicação no seu dispositivo ou no emulador, use o comando:

   ```bash
   npx expo start

### Descrição de cada diretório/arquivo:

- **/assets**: Contém imagens e outros recursos estáticos utilizados na aplicação.
- **/components**: Componentes reutilizáveis, como cartões de palavras e usuários.
- **/screens**: Contém as telas principais da aplicação, como a tela de dicionário, login e perfil.
- **/storage**: Funções para armazenar dados localmente usando o `AsyncStorage`, como favoritos e informações do usuário.
- **App.tsx**: O arquivo principal onde a navegação e o fluxo inicial da aplicação são configurados.
- **package.json**: Contém informações sobre o projeto e as dependências utilizadas.
- **tsconfig.json**: Arquivo de configuração do TypeScript para garantir o correto funcionamento da tipagem.

>  This is a challenge by [Coodesh](https://coodesh.com/)
