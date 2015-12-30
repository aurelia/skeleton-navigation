var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function() {
  gulp.watch(paths.source, ['build-system']).on('change', reportChange);
  gulp.watch(paths.html, ['build-html']).on('change', reportChange);
  gulp.watch(paths.css, ['build-css']).on('change', reportChange);
  gulp.watch(paths.style).on('change', reportChange);
});
