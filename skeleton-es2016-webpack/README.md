# aurelia-skeleton-navigation-webpack

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This skeleton is part of the [Aurelia](http://www.aurelia.io/) platform. 
It sets up a standard navigation-style app using webpack to build your ES 2016 code with the Babel compiler. Karma/Protractor/Jasmine testing is also configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Why webpack?

Power and simplicity. [Webpack](https://webpack.github.io/) is an incredibly powerful tool for building and bundling web applications. 
Go check it out if you haven't seen any of its capabilities yet.

Combined with NPM for all package management and script execution, the goal was to make the build and deployment
environment for Aurelia apps as simple as possible. No Gulp tasks, no SystemJS and no JSPM. Just webpack, a
single config file per environment and a few npm scripts.

## Getting started

Before you start, make sure you have a working [NodeJS](http://nodejs.org/) environment, preferably with NPM 3.

From the project folder, execute the following command:

```shell
npm install
```

This will install all required dependencies, including a local version of webpack that is going to
build and bundle the app. There is no need to install webpack globally.

To run the app execute the following command:

```shell
npm run dev
```

This command starts the webpack development server that serves the build bundles.
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

## Testing
To run the unit tests:

```shell
npm run test
```

> **Note**: The e2e tests aren't working yet