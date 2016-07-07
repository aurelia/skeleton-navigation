var gulp = require('gulp');

// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');

gulp.task('default', ['watch']);