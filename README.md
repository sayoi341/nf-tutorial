# MfTutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.3.0.

## Setup

Install Node.js 24.x (24.15.0 or newer) or Node.js 26+, then install [pnpm 12.18.0](https://pnpm.io/installation) (the version pinned in `package.json`).
Then install dependencies using the committed lockfile:

```bash
pnpm install --frozen-lockfile
```

This workspace contains the `shell` and `mfe1` applications. The commands below
use `shell`; replace it with `mfe1` to work on the other application.

## Development server

To start a local development server, run:

```bash
pnpm start shell
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
pnpm ng generate component component-name --project shell
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
pnpm ng generate --help
```

## Building

To build the project run:

```bash
pnpm build shell
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
pnpm test shell --watch=false
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
pnpm ng e2e shell
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
