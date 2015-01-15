System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "lib/*.js"
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.8.0",
    "aurelia-http-client": "github:aurelia/http-client@0.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "font-awesome": "npm:font-awesome@4.2.0",
    "github:aurelia/binding@0.2.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1"
    },
    "github:aurelia/bootstrapper@0.8.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.1",
      "aurelia-framework": "github:aurelia/framework@0.7.0",
      "aurelia-history": "github:aurelia/history@0.2.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.1",
      "aurelia-loader-systemjs": "github:aurelia/loader-systemjs@0.3.2",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.1",
      "aurelia-router": "github:aurelia/router@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.7.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.7.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.7.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.8.0"
    },
    "github:aurelia/dependency-injection@0.3.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/framework@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-logging": "github:aurelia/logging@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.7.0"
    },
    "github:aurelia/history-browser@0.2.1": {
      "aurelia-history": "github:aurelia/history@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/http-client@0.4.1": {
      "aurelia-path": "github:aurelia/path@0.4.0",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/loader-systemjs@0.3.2": {
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0"
    },
    "github:aurelia/loader@0.3.1": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.4",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.2"
    },
    "github:aurelia/router@0.4.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-history": "github:aurelia/history@0.2.1",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/templating-binding@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.7.0"
    },
    "github:aurelia/templating-resources@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-templating": "github:aurelia/templating@0.7.0",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/templating-router@0.8.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-router": "github:aurelia/router@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.7.0"
    },
    "github:aurelia/templating@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-logging": "github:aurelia/logging@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:core-js@0.4.4": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

