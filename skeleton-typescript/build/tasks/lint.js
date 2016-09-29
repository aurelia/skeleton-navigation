var gulp = require('gulp');
var paths = require('../paths');
var tslint = require('gulp-tslint');

gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(tslint({
      emitError: false
    }))
    .pipe(tslint.report());
});
