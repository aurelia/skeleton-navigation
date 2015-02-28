var gulp = require('gulp');
var paths = require('../paths');
var to5 = require('gulp-babel');
var plumber = require('gulp-plumber');
var gulp = require('gulp');
var webdriver_update = require('gulp-protractor').webdriver_update;
var protractor = require("gulp-protractor").protractor;

// for full documentation of gulp-protractor,
// please check https://github.com/mllrsohn/gulp-protractor
gulp.task('webdriver_update', webdriver_update);

// transpiles files in
// /test/e2e/src/ from es6 to es5
// then copies them to test/e2e/dist/
gulp.task('build-e2e', function () {
  return gulp.src(paths.e2eSpecsSrc)
    .pipe(plumber())
    .pipe(to5())
    .pipe(gulp.dest(paths.e2eSpecsDist));
});

// runs build-e2e task
// then runs end to end tasks
// using Protractor: http://angular.github.io/protractor/
gulp.task('e2e', ['webdriver_update', 'build-e2e'], function(cb) {
  return gulp.src(paths.e2eSpecsDist + "/*.js")
    .pipe(protractor({
        configFile: "protractor.conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('error', function(e) { throw e; });
});
