var gulp = require('gulp');
var paths = require('../paths');
var to5 = require('gulp-6to5');
var plumber = require('gulp-plumber');
var gulp = require('gulp');
var webdriver_update = require('gulp-protractor').webdriver_update;
var protractor = require("gulp-protractor").protractor;

gulp.task('webdriver_update', webdriver_update);

gulp.task('build-e2e', function () {
  return gulp.src(paths.e2eSpecsSrc)
    .pipe(plumber())
    .pipe(to5())
    .pipe(gulp.dest(paths.e2eSpecsDist));
});

gulp.task('e2e', ['webdriver_update', 'build-e2e'], function(cb) {
  return gulp.src(paths.e2eSpecsDist + "/*.js")
    .pipe(protractor({
        configFile: "protractor.conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('error', function(e) { throw e; });
});
