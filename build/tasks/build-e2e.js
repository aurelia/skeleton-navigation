var gulp = require('gulp');
var paths = require('../paths');
var to5 = require('gulp-6to5');
var plumber = require('gulp-plumber');

gulp.task('build-e2e', function() {
    return gulp.src(paths.e2eSpecsSrc)
        .pipe(plumber())
        .pipe(to5())
        .pipe(gulp.dest(paths.e2eSpecsDist));
});
