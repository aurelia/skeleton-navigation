// import path from 'path';
import * as helpers from './helpers';
import base from './webpack.base';

const config = {
  ...base,

  output: {
    path: helpers.root('dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    ...base.resolve,
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },

  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ],
};

export default config;
