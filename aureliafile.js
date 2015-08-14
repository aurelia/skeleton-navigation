var cli = require('aurelia-cli');

var config = {
  js: {
    "dist/app-bundle": {
      modules: [
        '*',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding', 
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser'
      ],
      options: {
        inject: true
      }
    }
  },
  template: {
    "dist/app-bundle": {
      pattern: 'dist/*.html',
      options: {
        inject:  true
     }
    }
  }
};

cli.command('bundle', config);
cli.command('unbundle', config);


/*
If you don't like your original `index.html` to be modified and want to have a new index file instead with the template bundle injection, use a bundle configuration like this:
  template: {
    "dist/app-bundle": {
      pattern: 'dist/*.html',
      options: {
        inject: {
          indexFile: 'index.html',
          destFile: 'dest_index.html'
        }
      }
    }
  }
*/
