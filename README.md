# 🏦 Portal do Investidor - Versão Standalone (Angular 19)

![Angular](https://img.shields.io/badge/Angular-19-dd0031?style=for-the-badge&logo=angular)
![Material Design](https://img.shields.io/badge/Material-Design-blue?style=for-the-badge&logo=materialdesign)
![Architecture](https://img.shields.io/badge/Architecture-Standalone-success?style=for-the-badge)

---

## 📋 Sobre o Projeto

Esta é uma **refatoração completa** da solução desenvolvida para o Desafio Técnico de Frontend da CAIXA. O objetivo desta versão é migrar a arquitetura clássica baseada em módulos para a abordagem moderna de **Standalone Components** do Angular 19.

O sistema simula um ambiente de investimentos onde o cliente pode:

- Fazer login (Autenticação Mockada).
- Visualizar perfil de risco.
- Receber recomendações de produtos.
- Simular investimentos (CDB, Fundos, Tesouro).

---

## ⚙️ Diferenças de Arquitetura (NgModules vs. Standalone)

A principal mudança neste projeto em relação à versão anterior é a remoção dos `NgModules`.

- **Antes (Clássico):** A aplicação dependia de `AppModule`, `DashboardModule`, etc., para declarar componentes e importar dependências.
- **Agora (Standalone):**
  - **Componentes Autônomos:** Cada componente (`Login`, `Dashboard`, `ProductList`) gerencia suas próprias importações (`imports: [...]`).
  - **Bootstrapping:** A inicialização ocorre diretamente no `main.ts` sem necessidade de um módulo raiz.
  - **Roteamento:** Configurado via `provideRouter` e arquivos de rotas simplificados.
  - **Performance:** Menor _boilerplate_ (código repetitivo) e melhor _tree-shaking_ (o build final fica mais leve).

---

## ✨ Funcionalidades

As funcionalidades de negócio permanecem idênticas ao MVP original:

### 🔐 Autenticação

- Login com `ReactiveForms` e validação.
- Serviço de autenticação mockado com RxJS.

### 📊 Dashboard

- Carregamento de dados via serviços injetáveis (`providedIn: 'root'`).
- Comunicação Pai-Filho (`@Input`/`@Output`) entre o Dashboard e a Lista de Produtos.
- Exibição de Perfil de Risco.

### 💰 Simulador

- Cálculo de rentabilidade em tempo real.
- Formulários reativos com validações customizadas.

---

## 🛠️ Estrutura de Pastas (Standalone)

Note a ausência dos arquivos `.module.ts`:

````text
src/app/
├── auth/
│   ├── login/                 # Componente Standalone de Login
│   └── auth.routes.ts         # Rotas específicas de Auth
├── dashboard/
│   ├── components/
│   │   ├── product-list/      # Componente Standalone
│   │   └── risk-profile/      # Componente Standalone
│   ├── services/
│   ├── dashboard.component.ts # Componente Pai Standalone
│   └── dashboard.routes.ts    # Rotas específicas do Dashboard
├── app.routes.ts              # Configuração de rotas principal
├── app.config.ts              # Configuração global (Providers)
└── main.ts                    # Ponto de entrada da aplicação

---

## 🚀 Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
````

2. **Execute o servidor:**

   ```bash
   ng serve
   ```

3. **Acesse:**
   Abra `http://localhost:4200/`.

**Credenciais de Acesso:**

- **Usuário:** `cliente@exemplo.com`
- **Senha:** `123456`

---

<div align="center"> Estudo de caso desenvolvido com 💙 e Angular 19 Standalone </div>
