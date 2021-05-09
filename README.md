# Desafio Fábrica de Software - Front-end

## Descrição
O objetivo do desafio é desenvolver uma aplicação de fluxo de aprovação para compra de material de escritório. Para tal, foram utilizadas as tecnologias, conforme sugerido:
* Angular 11.0.9
* Java (Spring Boot 2.4.5)
* MYSQL 8.0.23

### Guia de instalação front-end:
#### Requerimentos
- Node
- Angular Cli

#### Install
Instale as dependências do projeto utilizando o comando:
```npm install```
no diretório do projeto

### Configuração
Antes da execução, basta configurar a rota do back-end no environment:
- environment.ts (/src/environment/environment.ts)
- environment.prod.ts (/src/environment/environment.prod.ts)*

Obs.: Quando executado o build de produção, o enviroment a ser considerado será o "environment.prod.ts" (substituindo as configurações do environment.ts).

### Execução
Para execução basta rodar o servidor do angular com o comando: ```ng serve``` no diretório do projeto ou do 'dist' gerado pelo build (```ng build --prod```)
