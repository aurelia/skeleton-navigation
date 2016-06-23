import baseWeb from './webpack.base-web';
import baseProd from './webpack.base-production';
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  ...baseWeb,
  ...baseProd,
  plugins: [
    /**
     * Plugin: CompressionPlugin
     * Description: Prepares compressed versions of assets to serve
     * them with Content-Encoding
     *
     * See: https://github.com/webpack/compression-webpack-plugin
     */
    new CompressionPlugin({
      regExp: /\.css$|\.html$|\.js$|\.map$/,
      threshold: 2 * 1024
    }),

    ...baseProd.plugins,
    ...baseWeb.plugins,
  ]
};

export default config;
