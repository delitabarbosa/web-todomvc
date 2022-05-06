<div align="center">
<h1 align="center"><b> AUTOMAÇÃO DE TESTES - TO DO MVC </b></h1>
</div>

<br>

## **CONFIGURAÇÃO DO PROJETO**
- Clonar o repositório <br> `https://github.com/delitabarbosa/web-todomvc.git`

<br>

## **TECNOLOGIAS UTILIZADAS**
- Cypress ^9.6.0
- Node 
- Mochawesome

<br>

## **COMO EXECUTAR OS TESTES**

Ao clonar o projeto, caso não tenha um npm local registrado, executar no terminal o comando:

```.bash
npm config set registry https://registry.npmjs.org/
```

E preencher as informações de login (username, password e email) com sua conta pessoal no [npm](https://www.npmjs.com/)

```.bash
npm login
```
Após isso, executar no terminal o comando para instalar as dependências utilizadas neste projeto:

```.bash
yarn install
```
Para executar em modo headless, executar no terminal o comando:

```.bash
yarn cy:to-do-mvc
```

Para executar em modo interativo, executar no terminal o comando e selecionar a spec que deseja executar (nessa opção você consegue "assistir" os testes sendo executados, pode verificar os passos e cada execução dos cenários)

```.bash
yarn cy:open
```
## **INTEGRAÇÃO CONTÍNUA**
Para consultar as rotinas de execução dos testes (pipeline) basta clicar no menu [Actions](https://github.com/delitabarbosa/web-todomvc/actions), os testes são executados diariamente e são gerados os reportes com as evidências.
