# aurelia-skeleton-webpack-experimental

## Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=6.0* with NPM 3 or Yarn.

From the project folder, execute the following commands:

```shell
npm install # or: yarn install
```

This will install all required dependencies, including a local version of Webpack that is going to
build and bundle the app. There is no need to install Webpack globally. 

To run the app execute the following command:

```shell
npm start # or: yarn start
```

This command starts the webpack development server that serves the build bundles.
You can now browse the skeleton app at http://localhost:8081. Changes in the code
will automatically build and reload the app.

## Feature configuration

Most of the configuration will happen in the `webpack.config.js` file.
There, you may configure advanced loader features or add direct SASS or LESS loading support.

## Bundling

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm start -- build
```

To build 

To test either the development or production build execute:

```shell
npm start -- serve
```

The production bundle includes all files that are required for deployment.

## Running The Unit Tests

To run the unit tests:

```shell
npm test # or: yarn test
```

## Running The E2E Tests

Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```

2. Run the tests by invoking

```shell
npm start -- e2e
```
