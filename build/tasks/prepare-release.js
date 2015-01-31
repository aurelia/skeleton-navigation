var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prepare-release', function(callback) {
    return runSequence('build', 'lint', 'bump-version', 'doc', 'changelog', callback);
});