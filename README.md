# MfTutorial — pnpm workspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.3.0.

## Setup

Install Node.js 24.x (24.15.0 or newer) or Node.js 26+, then install [pnpm 12.18.0](https://pnpm.io/installation) (the version pinned in `package.json`).
Then install dependencies using the committed lockfile:

```bash
pnpm install --frozen-lockfile
```

This repository contains two pnpm workspace packages: `@mf-tutorial/shell` in
`projects/shell` and `@mf-tutorial/mfe1` in `projects/mfe1`. App runtime dependencies
belong to each package; shared Angular CLI, builders, TypeScript and test tools
remain at the root. There is one root `pnpm-lock.yaml` and one root `angular.json`.

To install for one app plus shared root tooling, use
`pnpm --filter mf-tutorial --filter @mf-tutorial/shell install --frozen-lockfile`
(replace the shell package with `@mf-tutorial/mfe1` for the remote).

## Development server

To start both development servers, run from the root:

```bash
pnpm start
```

Open `http://localhost:4200/flights`: the shell on port 4200 lazy-loads the remote
on port 4201. Both servers must be running. Stop them with Ctrl+C.

For separate terminals, run `pnpm --filter @mf-tutorial/mfe1 start` and
`pnpm --filter @mf-tutorial/shell start`. Root aliases `pnpm start:mfe1` and
`pnpm start:shell` are also available. Inside either package directory,
`pnpm start` serves only that app. Each package has `serve`, `build`, `watch`
and `test` scripts that explicitly select its Angular project.

VS Code's **Debug shell + mfe1** configuration starts both servers and opens
`/flights`. Individual shell and remote debug configurations are also available.

Each federation config passes its own directory to `fromPackageJson`, so sharing
reads the app manifest rather than the root tooling manifest. Keep both apps'
shared Angular versions aligned; singleton and strict version checks remain enabled.
The workspace's targeted `publicHoistPattern` makes Angular runtimes, RxJS, tslib
and es-module-shims visible to the existing builders that resolve from the root.
Their dependency declarations remain in the app packages; avoid divergent Angular
versions because these root-based builders use one shared runtime installation.

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
pnpm --filter @mf-tutorial/shell build
pnpm --filter @mf-tutorial/mfe1 build
```

These scripts build production artifacts into root `dist/shell` and `dist/mfe1`.
Root `pnpm build` builds both apps; `pnpm watch` watches both in parallel.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
pnpm --filter @mf-tutorial/shell test --watch=false
pnpm --filter @mf-tutorial/mfe1 test --watch=false
```

## Running end-to-end tests

No end-to-end test runner is configured. To check federation manually, start both
apps with `pnpm start`, open the shell, and follow **Flights**. The remote should
render `Hello, mfe1` below the shell header; a direct reload of `/flights` should
also work.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
