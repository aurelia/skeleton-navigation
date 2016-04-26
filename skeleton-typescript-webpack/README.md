# aurelia-skeleton-typescript-webpack

## Getting started

Before you start, make sure you have a working [NodeJS](http://nodejs.org/) environment, preferably with NPM 3.

From the project folder, execute the following commands:

```shell
npm install
typings install
```

This will install all required dependencies, including a local version of webpack that is going to
build and bundle the app. There is no need to install webpack globally.

If the TypeScript references do not work or you get some runtime errors you can try to execute the following command:

```shell
npm dedupe
```

To run the app execute the following command:

```shell
npm run dev
```

This command starts the webpack development server that serves the build bundles.
You can now browse the skeleton app at http://localhost:3000. Changes in the code
will automatically build and reload the app.

## Bundling

To build a development bundle (output to /build) execute:

```shell
npm run build
```

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm run prod
```

The production bundle includes all files that are required for deployment.

## Plugin configuration
The aurelia-webpack-plugin has its own configuration options that you may need to set.
Please see https://github.com/aurelia/webpack-plugin for more information.

## Running The Unit Tests

To run the unit tests:

```shell
npm run test
```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```

2. Make sure your app runs and is accessible

  ```shell
  npm run dev
  ```

3. In another console run the E2E-Tests

  ```shell
  npm run e2e
  ```
