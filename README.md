# KanbanFe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Dificuldades

- Como funciona esse single não sei do que sem modulos

## Services

- Services are a great way to share information among classes that don't know each other. Create a HeroService next and inject it in the HeroesComponent, to provide hero data.
- Injectables marca como parte do sistema de dependency injection

[1] (https://v17.angular.io/tutorial/tour-of-heroes/toh-pt4)

### Autenticação

- Tudo começa com a chamada do login do LoginWS, vai comunicar com o back e salvar o token
- É criado um interceptor, authInterceptor, ele ira antes de cada requisição ser enviada ao back adicionar o token na requisicao
- O interceptor é registrado `app.config.ts`

#### Salvar token

- In-memory storage: perde-se ao dar reload na páginas
- Session Storage (HTML5): se perde ao fechar o browser
- Local Storage (HTML5): so é perdido ao limpar os dados do navegador
- Cookie Storage: dados salvos dessa forma podem ser acessados pelo browser (outras formas não), vulneravel a CSRF/XSRF

[2] (https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps)

#### Adicionar Guards as Rotas

- Guards vão verificar se existe permissão para entrar na página
- Senão uma ação deve ser feita

[3] (https://angular.dev/api/router/CanActivate)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
