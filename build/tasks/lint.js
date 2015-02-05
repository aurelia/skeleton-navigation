var gulp = require('gulp');
var paths = require('../paths');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function() {
    return gulp.src(paths.source)
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish));
});