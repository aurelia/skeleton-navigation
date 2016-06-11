import webpack from 'webpack';
import electronConfig from './webpack.base-electron';
import productionConfig from './webpack.base-production';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  ...electronConfig,
  ...productionConfig,

  target: 'electron-renderer',

  entry: [
    './index',
    './src/main'
  ],

  output: {
    ...electronConfig.output,
    publicPath: 'dist/'
  },

  module: {
    ...electronConfig.module,

    loaders: [
      ...electronConfig.module.loaders,
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },

  plugins: [
    ...productionConfig.plugins,
    ...electronConfig.plugins,
    /*
    // might cause problems, so turned off by default:
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    */
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
};

export default config;
