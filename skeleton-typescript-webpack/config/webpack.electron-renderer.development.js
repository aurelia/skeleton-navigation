/* eslint max-len: 0 */
import webpack from 'webpack';
import electronConfig from './webpack.base-electron';
import devConfig from './webpack.base-dev';

const config = {
  ...electronConfig,
  ...devConfig,

  target: 'electron-renderer',
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',
    './index',
    './src/main'
  ],

  output: {
    ...electronConfig.output,
    publicPath: 'http://localhost:3000/dist/'
  },

  module: {
    ...electronConfig.module,

    loaders: [
      ...electronConfig.module.loaders,
      {
        test: /\.css$/,
        loaders: [ 'style', 'css?sourceMap' ]
      }
    ]
  },

  plugins: [
    ...devConfig.plugins,
    ...electronConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    // enable if you wish not to emit any code should any error appear:
    // (including linting!)
    // new webpack.NoErrorsPlugin()
  ]
};

export default config;
