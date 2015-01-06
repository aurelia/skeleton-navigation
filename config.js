System.config({
  "baseUrl": "dist",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "lib/*.js"
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.6.1",
    "aurelia-http-client": "github:aurelia/http-client@0.4.0",
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "font-awesome": "npm:font-awesome@4.2.0",
    "github:aurelia/binding@0.2.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.3",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.0"
    },
    "github:aurelia/bootstrapper@0.6.1": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.0",
      "aurelia-framework": "github:aurelia/framework@0.5.0",
      "aurelia-history": "github:aurelia/history@0.2.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.0",
      "aurelia-loader-systemjs": "github:aurelia/loader-systemjs@0.3.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.0",
      "aurelia-router": "github:aurelia/router@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.5.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.5.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.5.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.6.0"
    },
    "github:aurelia/dependency-injection@0.2.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.3",
      "core-js": "npm:core-js@0.4.1"
    },
    "github:aurelia/framework@0.5.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.2.1",
      "aurelia-loader": "github:aurelia/loader@0.3.0",
      "aurelia-logging": "github:aurelia/logging@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.2.3",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.0",
      "aurelia-templating": "github:aurelia/templating@0.5.0"
    },
    "github:aurelia/history-browser@0.2.0": {
      "aurelia-history": "github:aurelia/history@0.2.0",
      "core-js": "npm:core-js@0.4.1"
    },
    "github:aurelia/http-client@0.4.0": {
      "aurelia-path": "github:aurelia/path@0.4.0",
      "core-js": "npm:core-js@0.4.1"
    },
    "github:aurelia/loader-systemjs@0.3.1": {
      "aurelia-loader": "github:aurelia/loader@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.2.3",
      "aurelia-path": "github:aurelia/path@0.4.0"
    },
    "github:aurelia/loader@0.3.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.1",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.2"
    },
    "github:aurelia/router@0.3.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.2.1",
      "aurelia-history": "github:aurelia/history@0.2.0",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.0",
      "core-js": "npm:core-js@0.4.1"
    },
    "github:aurelia/templating-binding@0.5.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.0",
      "aurelia-templating": "github:aurelia/templating@0.5.0"
    },
    "github:aurelia/templating-resources@0.5.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.5.0",
      "core-js": "npm:core-js@0.4.1"
    },
    "github:aurelia/templating-router@0.6.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.3",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-router": "github:aurelia/router@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.5.0"
    },
    "github:aurelia/templating@0.5.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.2.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.0",
      "aurelia-logging": "github:aurelia/logging@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.2.3",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.0",
      "core-js": "npm:core-js@0.4.1"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.1"
    },
    "npm:core-js@0.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

