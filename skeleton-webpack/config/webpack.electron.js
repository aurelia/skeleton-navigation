import webpack from 'webpack';
import electronConfig from './webpack.base-electron';
import productionConfig from './webpack.base-production';
import * as helpers from './helpers';

const config = {
  ...electronConfig,
  ...productionConfig,

  target: 'electron-main',
  entry: './config/electron.entry.development',

  output: {
    ...electronConfig.output,
    path: helpers.root('.'),
    filename: './dist/electron.js'
  },

  plugins: [
    ...productionConfig.plugins,
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true, entryOnly: false
    })
  ],

  node: {
    __dirname: false,
    __filename: false
  },

  externals: [
    ...electronConfig.externals,
    'source-map-support',
    'font-awesome'
  ]
};

export default config;
