# 🧑‍💼 Painel de Controle de Usuários

> Sistema desenvolvido em **Angular**, com **Bootstrap**, **SCSS modular** e **json-server** para simular uma API REST.  
> O objetivo é treinar **CRUD**, **componentização**, **responsividade** e **boas práticas de arquitetura frontend**.

---

## 🚀 Tecnologias Utilizadas

- **Angular 18+**
- **TypeScript**
- **Bootstrap 5**
- **SCSS modular**
- **json-server**
- **RxJS**
- **Bootstrap Icons**

---

## 🎯 Objetivos de Aprendizado

| Conceito | Prática |
|-----------|----------|
| *Componentização* | Criação de componentes reutilizáveis (`wp-user-form`, `wp-user-table`, `wp-modal`) |
| *Diretivas* | Uso de `*ngFor`, `*ngIf`, `ngClass`, `ngStyle` |
| *Comunicação entre componentes* | `@Input`, `@Output` e `EventEmitter` |
| *Serviços e Injeção de Dependência* | Criação do `UserService` para integração com API |
| *Observables e RxJS* | Consumo reativo de dados |
| *SCSS modular* | Organização com partials e variáveis globais |
| *Bootstrap Grid System* | Layout responsivo com `container`, `row`, `col` |

---

## 🖥️ Funcionalidades

- ✅ CRUD completo de usuários  
- ✅ Tabela responsiva com paginação e ordenação  
- ✅ Filtro de busca em tempo real  
- ✅ Modal de detalhes do usuário  
- ✅ Toasts de sucesso e erro  
- ✅ Loader global durante requisições HTTP  
- ✅ Tema leve com variáveis SCSS globais  
- ✅ Armazenamento local (localStorage) de filtros e preferências  

---

## 📘 User Stories

- **Como administrador**, quero criar novos usuários para controlar acessos.  
- **Como operador**, quero visualizar e buscar usuários facilmente.  
- **Como gestor**, quero editar e excluir usuários inativos.  
- **Como usuário**, quero feedback visual ao salvar ou excluir registros.  

---

## 📁 Estrutura de Pastas

src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   └── interceptors/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── wp-modal/
│   │   │   ├── wp-toast/
│   │   │   └── wp-loader/
│   │   └── pipes/
│   ├── features/
│   │   └── users/
│   │       ├── user-list/
│   │       ├── user-form/
│   │       ├── user-details/
│   │       └── users.module.ts
│   └── app-routing.module.ts
├── assets/
│   └── scss/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _tables.scss
│       └── main.scss
└── environments/
└── environment.ts

---

## 🧩 Banco de Dados Fake (json-server)

### 📄 Arquivo `db.json`

Coleções utilizadas:
- `users`
- `profiles`
- `logs`
- `settings`

### ▶️ Rodar o servidor

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

### 🔗 Endpoints disponíveis

| Método | Endpoint     | Descrição                     |
| ------ | ------------ | ----------------------------- |
| GET    | `/users`     | Lista todos os usuários       |
| GET    | `/users/:id` | Retorna um usuário específico |
| POST   | `/users`     | Cria um novo usuário          |
| PUT    | `/users/:id` | Atualiza um usuário           |
| DELETE | `/users/:id` | Remove um usuário             |

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seuusuario/painel-usuarios-angular.git
cd painel-usuarios-angular
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o back-end fake

```bash
json-server --watch db.json --port 3000
```

### 4️⃣ Rodar o projeto Angular

```bash
ng serve
```

Acesse no navegador:
👉 **[http://localhost:4200](http://localhost:4200)**

---

## 🧠 Aprendizados-Chave

* Estrutura modular e escalável em Angular
* Comunicação entre componentes (`@Input`, `@Output`)
* Criação de services e consumo reativo de API
* Organização de estilos com SCSS modular
* Layout responsivo com Bootstrap
* Feedback visual com Bootstrap e Angular

---

## 🧰 Ferramentas Recomendadas

* [Bootstrap Icons](https://icons.getbootstrap.com/)
* [JSON Server](https://github.com/typicode/json-server)
* [Angular CLI](https://angular.dev/tools/cli)
* [VS Code](https://code.visualstudio.com/)
* [Prettier](https://prettier.io/)

---

## 🪄 Possíveis Extensões

* 🌗 Adicionar **modo escuro** via SCSS
* ♻️ Implementar **scroll infinito** na tabela
* 🔐 Simular autenticação (login/logout)
* 📊 Criar **gráficos** no dashboard (Recharts, ApexCharts)
* 🌎 Adicionar **internacionalização (i18n)**

---

## 👨‍💻 Autor

**Otávio Xavier**
Engenheiro de Software • Foco em Angular e UI/UX
💼 [LinkedIn](https://linkedin.com/in/otavioxavier)
🎨 [Portfolio](#)

---

## 📝 Licença

Este projeto é de uso livre para fins de **aprendizado e portfólio**.

---

> 💡 **Dica:** documente cada feature no Notion conforme for implementando.
> Isso te ajuda a criar um histórico de aprendizado e material pra entrevistas técnicas.

---

Quer que eu adicione também um **badge de status (ex: “🚧 Em desenvolvimento”)** e uma **imagem ilustrativa da interface (mockup ou screenshot)** no topo do README? Isso deixa o projeto mais apresentável no GitHub.
