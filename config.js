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
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.9.5",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
    "aurelia-framework": "github:aurelia/framework@0.8.8",
    "aurelia-http-client": "github:aurelia/http-client@0.5.5",
    "aurelia-router": "github:aurelia/router@0.5.8",
    "bootstrap": "github:twbs/bootstrap@3.3.2",
    "font-awesome": "npm:font-awesome@4.3.0",
    "github:aurelia/binding@0.3.7": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-metadata": "github:aurelia/metadata@0.3.3",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5"
    },
    "github:aurelia/bootstrapper@0.9.5": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.4",
      "aurelia-framework": "github:aurelia/framework@0.8.8",
      "aurelia-history": "github:aurelia/history@0.2.4",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.5",
      "aurelia-loader-default": "github:aurelia/loader-default@0.4.3",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.4",
      "aurelia-router": "github:aurelia/router@0.5.8",
      "aurelia-templating": "github:aurelia/templating@0.8.14",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.8.7",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.8.10",
      "aurelia-templating-router": "github:aurelia/templating-router@0.9.4"
    },
    "github:aurelia/dependency-injection@0.4.5": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.3",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/framework@0.8.8": {
      "aurelia-binding": "github:aurelia/binding@0.3.7",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-loader": "github:aurelia/loader@0.3.5",
      "aurelia-logging": "github:aurelia/logging@0.2.5",
      "aurelia-metadata": "github:aurelia/metadata@0.3.3",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5",
      "aurelia-templating": "github:aurelia/templating@0.8.14"
    },
    "github:aurelia/history-browser@0.2.5": {
      "aurelia-history": "github:aurelia/history@0.2.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/http-client@0.5.5": {
      "aurelia-path": "github:aurelia/path@0.4.5",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/loader-default@0.4.3": {
      "aurelia-loader": "github:aurelia/loader@0.3.5",
      "aurelia-metadata": "github:aurelia/metadata@0.3.3",
      "aurelia-path": "github:aurelia/path@0.4.5"
    },
    "github:aurelia/loader@0.3.5": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.3",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.5"
    },
    "github:aurelia/router@0.5.8": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.4",
      "aurelia-history": "github:aurelia/history@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.5",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-binding@0.8.7": {
      "aurelia-binding": "github:aurelia/binding@0.3.7",
      "aurelia-templating": "github:aurelia/templating@0.8.14"
    },
    "github:aurelia/templating-resources@0.8.10": {
      "aurelia-binding": "github:aurelia/binding@0.3.7",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-logging": "github:aurelia/logging@0.2.5",
      "aurelia-templating": "github:aurelia/templating@0.8.14",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-router@0.9.4": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-metadata": "github:aurelia/metadata@0.3.3",
      "aurelia-path": "github:aurelia/path@0.4.5",
      "aurelia-router": "github:aurelia/router@0.5.8",
      "aurelia-templating": "github:aurelia/templating@0.8.14"
    },
    "github:aurelia/templating@0.8.14": {
      "aurelia-binding": "github:aurelia/binding@0.3.7",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.5",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.3",
      "aurelia-loader": "github:aurelia/loader@0.3.5",
      "aurelia-logging": "github:aurelia/logging@0.2.5",
      "aurelia-metadata": "github:aurelia/metadata@0.3.3",
      "aurelia-path": "github:aurelia/path@0.4.5",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.3"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:systemjs/plugin-css@0.1.6": {
      "clean-css": "npm:clean-css@3.0.10",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "github:twbs/bootstrap@3.3.2": {
      "css": "github:systemjs/plugin-css@0.1.6",
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.0.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.0.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.5.1",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

