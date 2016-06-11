import webpack from 'webpack';
import base from './webpack.base';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  ...base,
  module: {
    ...base.module,
    loaders: [
      ...base.module.loaders,
     /**
      * Raw loader support for *.css files
      * Returns file content as string
      *
      * See: https://github.com/webpack/raw-loader
      */
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },
  plugins: [
    ...base.plugins,
    /**
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),

    /**
     * Plugin: CommonsChunkPlugin
     * Description: Shares common code between the pages.
     * It identifies common modules and put them into a commons chunk.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
     * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        // bootstrap has to be defined first!
        // otherwise polyfills and PAL will not get initialized at the right time
        'aurelia-bootstrap',
        'aurelia',
        /* 'vendor', */
        /* 'users', // see examples above // */
      ].reverse()
    }),

    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     * Loaders are switched into minimizing mode.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
     */
    // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
    new webpack.optimize.UglifyJsPlugin({
      // beautify: true, //debug
      // mangle: false, //debug
      // dead_code: false, //debug
      // unused: false, //debug
      // deadCode: false, //debug
      // compress: {
      //   screw_ie8: true,
      //   keep_fnames: true,
      //   drop_debugger: false,
      //   dead_code: false,
      //   unused: false
      // }, // debug
      // comments: true, //debug

      beautify: false, //prod

      mangle: {
        screw_ie8 : true,
        keep_fnames: true
      }, //prod

      compress: {
        screw_ie8: true,
        warnings: false
      }, //prod

      comments: false //prod
    }),
    
    /**
     * Plugin: ExtractTextPlugin
     * It moves every import "style.css" in entry chunks into a single concatenated css output file. 
     * So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css). 
     * If your total stylesheet volume is big, it will be faster because the stylesheet bundle is loaded in parallel to the javascript bundle.
     */
    new ExtractTextPlugin('styles.css'),
    
    /**
     * Plugin: OfflinePlugin
     * Description: This plugin is intended to provide offline experience for webpack projects. It uses ServiceWorker and AppCache as a fallback under the hood.
     * It always better if OfflinePlugin is the last plugin added 
     * 
     * See: https://github.com/NekR/offline-plugin
     */
    // uncomment this if you want your website to work offline:
    // new OfflinePlugin(),
  ]
}

export default config;
