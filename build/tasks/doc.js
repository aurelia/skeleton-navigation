var gulp = require('gulp');
var tools = require('aurelia-tools');
var paths = require('../paths');
var yuidoc = require('gulp-yuidoc');

// uses yui to generate documentation to doc/api.json
gulp.task('doc-generate', function() {
  return gulp.src(paths.source)
    .pipe(yuidoc.parser(null, 'api.json'))
    .pipe(gulp.dest(paths.doc));
});

// takes output of doc-generate task
// and cleans it up for use with aurelia
// documentation app
gulp.task('doc', ['doc-generate'], function() {
  tools.transformAPIModel(paths.doc);
});
