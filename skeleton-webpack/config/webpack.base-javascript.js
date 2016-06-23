import * as helpers from './helpers';

const config = {
  module: {
    preLoaders: [
      /*
       * eslint loader support for *.js files
       *
       * See: https://github.com/MoOx/eslint-loader
       */
       { test: /\.js$/, loader: 'eslint', exclude: [ helpers.root('node_modules'), helpers.root('config'), helpers.root('index.js') ] }
    ],
    loaders: [
      /*
       * Babel loader support for ES2015
       *
       * See: https://github.com/babel/babel-loader
       */
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [ helpers.root('node_modules'), helpers.root('config')],
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015-loose-native-modules', 'stage-1'],
          cacheDirectory: true,
        }
      }
    ]
  },
  plugins: []
}

export default config;
