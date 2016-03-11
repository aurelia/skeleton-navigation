System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.6",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.1.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.6",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.4": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.3": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});