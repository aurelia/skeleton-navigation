var gulp = require('gulp');
var bundle = require('aurelia-bundler');

var config = {
  force: true,
  packagepath: '.',
  bundles: {
    "dist/view-bundle": {
      htmlimport: true,
      includes: 'dist/*.html',
      options: {
        inject: {
          indexfile : 'index.html',
          destfile : 'dest_index.html',
        }
      }
    }
  }
};


/*
var config = {
  force: true,
  packagepath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '*',
        'bootstrap/css/bootstrap.css!text'
      ],
      excludes: [
        'npm:core-js',
        'github:jspm/nodelibs-process'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/aurelia": {
      includes: [
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'github:aurelia/logging-console'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/view-bundle": {
      htmlimport: true,
      includes: 'dist/*.html',
      options: {
        inject: {
          indexfile : 'index.html',
          destfile : 'dest_index.html',
        }
      }
    }
  }
};

var config = {
  force: true,
  packagePath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '*',
        '*.html!text',
        '*.css!text',
        'bootstrap/css/bootstrap.css!text'
      ],
      excludes: [
        'npm:core-js',
        'github:jspm/nodelibs-process'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/aurelia": {
      includes: [
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'github:aurelia/logging-console'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/vendor": {
      includes: [
        'text',
        'github:jspm/nodelibs-process'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};
*/

gulp.task('bundle', function(cb) {
  bundle(config).then(function() {
    cb();
  }).catch(function(err) {
    console.log(err);
  });
});
