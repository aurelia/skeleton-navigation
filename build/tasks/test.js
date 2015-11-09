var gulp = require('gulp');
var karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, function(e) {
    done();
  });
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  karma.start({
    configFile: __dirname + '/../../karma.conf.js'
  }, function(e) {
    done();
  });
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function(done) {
  karma.start({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
    reporters: ['coverage'],
    preprocessors: {
      'test/**/*.js': ['babel'],
      'src/**/*.js': ['babel', 'coverage']
    },
    coverageReporter: {
      includeAllSources: true,
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'src/**/*.js': 'isparta'
      },
      reporters: [
        { type: 'html', dir: 'coverage' },
        { type: 'text' }
      ]
    }
  }, function(e) {
    done();
  });
});
