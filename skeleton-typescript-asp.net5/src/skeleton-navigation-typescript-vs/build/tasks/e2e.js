var gulp = require('gulp');
var paths = require('../paths');
var plumber = require('gulp-plumber');
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var webdriverStandalone = require("gulp-protractor").webdriver_standalone;
var protractor = require('gulp-protractor').protractor;
var typescript = require('gulp-typescript');
var tsc = require('typescript');
var del = require('del');

var tsProject = typescript.createProject('./tsconfig.json', {
  typescript: tsc,
  module: 'commonjs'
});

// for full documentation of gulp-protractor,
// please check https://github.com/mllrsohn/gulp-protractor
gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver-standalone', ['webdriver-update'], webdriverStandalone);

gulp.task('clean-e2e', function() {
  return del(paths.e2eSpecsDist + '*');
});

// transpiles files in
// /test/e2e/src/ from es6 to es5
// then copies them to test/e2e/dist/
gulp.task('build-e2e', ['clean-e2e'], function() {
  return gulp.src(paths.dtsSrc.concat(paths.e2eSpecsSrc))
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(paths.e2eSpecsDist));
});

// runs build-e2e task
// then runs end to end tasks
// using Protractor: http://angular.github.io/protractor/
gulp.task('e2e', ['build-e2e'], function(cb) {
  return gulp.src(paths.e2eSpecsDist + '**/*.js')
    .pipe(protractor({
      configFile: 'protractor.conf.js',
      args: ['--baseUrl', 'http://localhost:9000']
    }))
    .on('end', function() { process.exit(); })
    .on('error', function(e) { throw e; });
});
