var gulp = require('gulp');
var changed = require('gulp-changed');
var paths = require('../paths');

gulp.task('build-html', function() {
    return gulp.src(paths.html)
        .pipe(changed(paths.output, {
            extension: '.html'
        }))
        .pipe(gulp.dest(paths.output));
});
