/* eslint-disable no-var, no-shadow, dot-notation */
var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
    ]
  },
});

module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js', load: false },
      { pattern: 'test/unit/setup.js', load: false }
    ],

    tests: [
      { pattern: 'test/unit/**/*.spec.js', load: false }
    ],

    compilers: {
      'src/**/*.js': wallaby.compilers.babel({
        presets: [ 'es2015-loose', 'stage-1'],
        plugins: [
          'transform-decorators-legacy'
        ]
      })
    },

    postprocessor: wallabyPostprocessor,

    setup: function() {
      window.__moduleBundler.loadTests();
    },

    debug: false
  };
};
