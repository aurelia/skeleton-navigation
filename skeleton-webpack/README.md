# aurelia-skeleton-webpack

## Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=4.0* with NPM 3.

From the project folder, execute the following commands:

```shell
npm install
```

This will install all required dependencies, including a local version of Webpack that is going to
build and bundle the app. There is no need to install Webpack globally. 

After installation you will be asked to choose which language-version of the skeleton you would like to use. You may choose from:

- TypeScript
- JavaScript

To run the app execute the following command:

```shell
npm run server
```

This command starts the webpack development server that serves the build bundles.
You can now browse the skeleton app at http://localhost:3000. Changes in the code
will automatically build and reload the app.

## Bundling

To build a development bundle (output to /dist) execute:

```shell
npm run build
```

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm run build:prod
```

To test either the development or production build execute:

```shell
npm run server:prod
```

The production bundle includes all files that are required for deployment.

## Resource and bundling configuration

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
  npm run server
  ```

3. In another console run the E2E-Tests

  ```shell
  npm run e2e
  ```

## Electron

To add Electron support to the skeleton, first run:

```shell
npm run electron:setup
```

Once the packages are installed, you may either view your app in Electron or build application packages for production:

```shell
# developing on Electron with live-reload
npm run electron:start

# creates packages for the current operating system
npm run electron:package

# creates packages for all operating systems
npm run electron:package:all
```

The entry-file for Electron can be found in `config/electron.entry.development.ts`.

Building or creating the Electron package will create a file `electron.js` in the root directory of the skeleton.

### Loading native packages in Electron

If you have packages that cannot work in the Electron Renderer process (e.g. native packages), or wish to use the package in the renderer process as if it is running under Node, list them under `externals`, in the file `config/webpack.electron.js`.

## Acknowledgments

Parts of code responsible for Webpack configuration were inspired by or copied from @AngularClass' [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter).

Parts of code responsible for Webpack-Electron configuration and packaging were inspired by or copied from @chentsulin's [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).
