# Guia Completo da API de Inventário: Gestão Eficiente de Ativos e Estoque

Bem-vindo à nossa API de Inventário, uma poderosa ferramenta projetada para gerenciar eficientemente seus ativos, produtos e itens de estoque. Essa API foi cuidadosamente desenvolvida para oferecer funcionalidades abrangentes, proporcionando uma gestão otimizada do seu inventário.

## Tecnologias utilizadas 

### <p>Prisma (ORM para Node.js e TypeScript):</p>

Descrição: O Prisma é um ORM (Object-Relational Mapping) moderno para Node.js e TypeScript que simplifica a interação com bancos de dados SQL. Ele oferece uma maneira fácil de realizar consultas e manipular dados do banco de dados de forma segura e eficiente.

---------------------------------------------------------------------

#### <p>Express (Framework Web para Node.js):</p>

Descrição: O Express é um framework web minimalista para Node.js. Ele facilita a criação de APIs robustas e eficientes, fornecendo uma estrutura simples para lidar com rotas, middlewares e solicitações HTTP.

----------------------------------------------------------------------------

#### <p>TypeScript (Superset do JavaScript):</p>

Descrição: TypeScript é um superset do JavaScript que adiciona tipagem estática ao código. Ele melhora a segurança e a manutenção do código, fornecendo recursos avançados, como inferência de tipos, interfaces e suporte a ES6/ES7.

---------------------------------------------------------------------------

#### <p>Vitest (Framework de Testes):</p>

Descrição: Vitest é um framework de testes para JavaScript e TypeScript. Ele oferece uma maneira simples e eficaz de escrever e executar testes, incluindo suporte para cobertura de código.

-------------------------------------------------------------------------

#### <p>Eslint (Ferramenta de Linting para JavaScript/TypeScript):</p>

Descrição: Eslint é uma ferramenta de linting que ajuda a manter um código consistente e livre de erros. O arquivo de configuração inclui regras específicas para garantir boas práticas de codificação.

--------------------------------------------------------------------------

#### <p>Git Commit Message Linter:</p>

Descrição: O Git Commit Message Linter é utilizado para manter um padrão consistente nas mensagens de commit do Git. Isso promove uma documentação clara e uma história de commit fácil de entender.

--------------------------------------------------------------------------

#### <p>UUID (Geração de Identificadores Únicos):</p>

Descrição: A biblioteca UUID é usada para a geração de identificadores únicos (UUID) que podem ser úteis na criação de chaves primárias para registros em bancos de dados.

---------------------------------------------------------------------------

## Arquitetura

#### <p>Arquitetura Limpa (Clean Architecture):</p>

A arquitetura é a espinha dorsal de qualquer aplicação robusta e sustentável, e para a nossa API de Inventário, optamos pela Clean Architecture, uma abordagem que visa criar sistemas independentes, testáveis e altamente flexíveis.

---------------------------------------------------------------------

## Endpoints

### GET /items

Esse enpoint é  responsável por retornar todos os items cadastrados no seu inventário.

#### Parametros

Nenhum 

#### Respostas

#####  200

Caso apareça esse status HTTP, vocẽ vai receber a listagem completa de todos os items que estão cadastrados no inventário, juntamente com  o status e uma mensagem de sucesso.

Exemplo de resposta:

```
{
	"messsage": "items no inventario retornados com sucesso",
	"status": 200,
	"data": [
		{
			"id": "d8c68c68-5a2c-4898-8107-439adf713bf7",
			"technicalSpecifications": "core i3 4 nucleos ssd 256GB 8 RAM",
			"amount": 12,
			"comments": "esta com um trinco na tela de uso",
			"location": "1º andar sala 1000",
			"name": "Notebook acer aspire 5 core i7 10th 512 ssd 8 ram 500 HDD tela ips full fdfdfdfdf",
			"owner": "Kevin Cristhian Gomes Ferreira",
			"serialNumber": "767787878766767887srt"
		}
	]
}

```

#### 403

caso apareça esse status HTTP, significa que não existem nenhum item cadastrado no inventário no momento, e vocẽ será avisado com uma mensagem descritiva.

```
{
	"messsage": "Ainda não existem items cadastrados no inventário",
	"status": 403,
	"data": []
}

```
 
### 500

Caso apareça esse status, aconteceu alguma falha durante a execução do programa, porém os outros endpoints continuarão funcionando normalmente.

```
{
	"messsage": "Erro interno do servidor",
	"status": 500,
	"data": []
}

```
### GET /item/:id

Esse enpoint é retorna os dados do item encontrado pelo id informado via Path Param

#### Parametros

id: é o id do item que esta cadastrado no inventário

Exemplo 

```
http://localhost:8888/item/d8c68c68-5a2c-4898-8107-439adf71
```

#### Respostas

### 200

Caso apareça esse status, o item foi encontrado no inventário e você recebera os dados dele desta forma

```
{
	"message": "Item retornado com sucesso",
	"status": 200,
	"data": {
		"id": "4a02bc9e-2d18-4906-ab2e-4163e07fbf91",
		"amount": 500,
		"comments": "esta com um trinco na tela de uso",
		"location": "1º andar sala 1000",
		"name": "Notebook acer aspire 5 core i7 10th 512 ssd 8 ram 500 HDD tela ips full fdfdfdfdf",
		"owner": "Kevin Cristhian Gomes Ferreira",
		"serialNumber": "767787878766767887srt",
		"technicalSpecifications": "core i3 4 nucleos ssd 256GB 8 RAM"
	}
}
```
### 403

Este erro indica que houve um erro na busca, provavelmente o produto não existe no inventário

```
{
	"message": "Item retornado com sucesso",
	"status": 200,
	"data": {
		"id": "4a02bc9e-2d18-4906-ab2e-4163e07fbf91",
		"amount": 500,
		"comments": "esta com um trinco na tela de uso",
		"location": "1º andar sala 1000",
		"name": "Notebook acer aspire 5 core i7 10th 512 ssd 8 ram 500 HDD tela ips full fdfdfdfdf",
		"owner": "Kevin Cristhian Gomes Ferreira",
		"serialNumber": "767787878766767887srt",
		"technicalSpecifications": "core i3 4 nucleos ssd 256GB 8 RAM"
	}
}
```
### 500

Caso apareça este status, houve um erro fora do escopo da aplicação, coisas como sem internet, parametros invalidos e etc, tambem será apresentado uma mesagem de erro

```
{
	"messsage": "Erro interno do servidor",
	"status": 500,
	"data": []
}

```




