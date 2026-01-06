# Project-02 – Cypress E2E Login Tests

Este projeto tem como objetivo automatizar cenários de teste **End-to-End (E2E)** para a funcionalidade de **login**, utilizando **Cypress** com boas práticas de automação, organização de código e testes orientados a dados (*data-driven testing*).

O foco do projeto é validar tanto **cenários positivos** quanto **cenários negativos**, garantindo que o sistema se comporte corretamente diante de diferentes entradas de usuário.

---

## Tecnologias Utilizadas

- JavaScript
- Cypress
- Node.js
- Mocha / Chai (framework de testes integrado ao Cypress)

---

## Estrutura do Projeto

cypress/
├── e2e/
│ └── login.cy.js
├── fixtures/
│ └── login.json
└── support/
└── commands.js


---

## Descrição das Implementações

### 1. Custom Commands (`commands.js`)

Foi criado um **custom command** para reutilização do fluxo de login:

- `cy.openPage()`  
  Responsável por configurar o viewport e acessar a aplicação.

- `cy.login(email, password)`  
  Executa o login de forma dinâmica, permitindo:
  - Login com credenciais válidas
  - Login com email inválido
  - Login com senha inválida
  - Campos vazios

O comando trata campos opcionais e evita duplicação de código nos testes.

---

### 2. Teste de Login com Sucesso

Cenário validado:
- Login com credenciais válidas utilizando variáveis de ambiente (`Cypress.env`)
- Validação da URL após login
- Validação de elemento visível na página inicial (logo da aplicação)

Objetivo:
Garantir que o usuário consiga acessar o sistema com dados corretos.

---

### 3. Testes de Login Inválido (Data-Driven)

Os cenários negativos foram organizados em um **fixture (`login.json`)**, contendo múltiplos casos de erro, como:

- Email inválido
- Senha inválida
- Campo email vazio
- Campo senha vazio

Os testes utilizam:
- `cy.fixture().as()` para carregar os dados
- Iteração com `forEach` para executar múltiplos cenários em um único teste
- Validação das mensagens de erro exibidas pela aplicação

Essa abordagem facilita a manutenção e escalabilidade dos testes.

---

### 4. Boas Práticas Aplicadas

- Separação clara entre testes positivos e negativos
- Reutilização de código com Custom Commands
- Uso de Fixtures para testes orientados a dados
- Código organizado, legível e de fácil manutenção
- Nomes de testes e descrições claras

---

## Como Executar o Projeto

### 1. Instalar dependências
```bash
npm install
npx cypress open
npx cypress run

Objetivo do Projeto

Este projeto faz parte do meu processo de evolução como QA Júnior, com foco em:

Automação de testes E2E

Boas práticas em Cypress

Criação de portfólio prático

Escrita de testes claros, reutilizáveis e escaláveis

Autor

Matheus Souza
QA Júnior | Automação de Testes | Cypress