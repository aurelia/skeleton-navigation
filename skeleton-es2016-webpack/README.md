# aurelia-skeleton-navigation-webpack

## Getting Started

Before you start, make sure you have a working [NodeJS](http://nodejs.org/) environment, preferably with NPM 3.

From the project folder, execute the following command:

```shell
npm install
```

This will install all required dependencies, including a local version of Webpack that is going to
build and bundle the app. There is no need to install Webpack globally.

To run the app execute the following command:

```shell
npm run dev
```

This command starts the Webpack development server that serves the built bundles.
You can now browse the skeleton app at http://localhost:3000. Changes in the code
will automatically build and reload the app.

> **Note**: when using NPM 2.x, you might encounter a run-time error like '_aureliaPal.DOM.injectStyles is not a function'.
To work around this issue, execute the command *npm dedupe*.

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

## Testing
To run the unit tests:

```shell
npm run test
```

> **Note**: The e2e tests aren't working yet
