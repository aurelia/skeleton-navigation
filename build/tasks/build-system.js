var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-6to5');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');

gulp.task('build-system', function() {
    return gulp.src(paths.source)
        .pipe(plumber())
        .pipe(changed(paths.output, {
            extension: '.js'
        }))
        .pipe(to5(assign({}, compilerOptions, {
            modules: 'system'
        })))
        .pipe(gulp.dest(paths.output));
});
