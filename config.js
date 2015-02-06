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
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.9.3",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
    "aurelia-framework": "github:aurelia/framework@0.8.6",
    "aurelia-http-client": "github:aurelia/http-client@0.4.4",
    "aurelia-router": "github:aurelia/router@0.5.5",
    "bootstrap": "github:twbs/bootstrap@3.3.2",
    "font-awesome": "npm:font-awesome@4.3.0",
    "github:aurelia/binding@0.3.3": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3"
    },
    "github:aurelia/bootstrapper@0.9.3": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.2",
      "aurelia-framework": "github:aurelia/framework@0.8.6",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.3",
      "aurelia-loader-default": "github:aurelia/loader-default@0.4.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.2",
      "aurelia-router": "github:aurelia/router@0.5.5",
      "aurelia-templating": "github:aurelia/templating@0.8.9",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.8.4",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.8.6",
      "aurelia-templating-router": "github:aurelia/templating-router@0.9.2"
    },
    "github:aurelia/dependency-injection@0.4.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/framework@0.8.6": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
      "aurelia-templating": "github:aurelia/templating@0.8.9"
    },
    "github:aurelia/history-browser@0.2.3": {
      "aurelia-history": "github:aurelia/history@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/http-client@0.4.4": {
      "aurelia-path": "github:aurelia/path@0.4.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/loader-default@0.4.1": {
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2"
    },
    "github:aurelia/loader@0.3.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.4"
    },
    "github:aurelia/router@0.5.5": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-binding@0.8.4": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-templating": "github:aurelia/templating@0.8.9"
    },
    "github:aurelia/templating-resources@0.8.6": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.8.9",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-router@0.9.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-router": "github:aurelia/router@0.5.5",
      "aurelia-templating": "github:aurelia/templating@0.8.9"
    },
    "github:aurelia/templating@0.8.9": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "github:twbs/bootstrap@3.3.2": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

