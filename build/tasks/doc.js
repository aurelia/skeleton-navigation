var gulp = require('gulp');
var tools = require('aurelia-tools');
var paths = require('../paths');

gulp.task('doc', ['doc-generate'], function() {
    tools.transformAPIModel(paths.doc);
});