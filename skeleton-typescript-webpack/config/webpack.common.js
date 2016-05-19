/**
 * Inspired by @AngularClass
 * https://github.com/AngularClass/angular2-webpack-starter
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');
const meta = helpers.generateMeta();

/*
 * Webpack Constants
 */
const METADATA = {
  title: 'Aurelia',
  baseUrl: '/'
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  /*
   * Static metadata for index.html
   *
   * See: (custom attribute)
   */
  metadata: METADATA,

  /*
   * Cache generated modules and chunks to improve performance for multiple incremental builds.
   * This is enabled by default in watch mode.
   * You can pass false to disable it.
   *
   * See: http://webpack.github.io/docs/configuration.html#cache
   * cache: false,
   *
   * The entry point for the bundle
   * Our Angular.js app
   *
   * See: http://webpack.github.io/docs/configuration.html#entry
   */
  cache: false,
  entry: {
    
    app: [ './index' ],
    /*
    // an example of how to separate parts of code into to their own chunks //
    // remember to also include the new chunk in the CommonsChunkPlugin array below //
    users: [ './src/users', './src/users.html', './src/blur-image' ],
    */
    vendor: meta.vendorPackages,
    aurelia: meta.aureliaPackages

  },

  /*
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {

    /*
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['', '.ts', '.js'],

    // Make sure root is src
    root: helpers.root('src'),

    // remove other default values
    modulesDirectories: ['node_modules'],
    
    // webpack2 equivalent of the above:
    modules: [helpers.root('src'), 'node_modules'],

    // use es2015 builds so that tree-shaking will work
    alias: meta.aliases,

  },

  /*
   * Options affecting the normal modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   */
  module: {

    /*
     * An array of applied pre and post loaders.
     *
     * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
     */
    preLoaders: [

      /*
       * Tslint loader support for *.ts files
       *
       * See: https://github.com/wbuchwalter/tslint-loader
       */
       { test: /\.ts$/, loader: 'tslint-loader', exclude: [ helpers.root('node_modules'), helpers.root('config') ] },

      /*
       * Source map loader support for *.js files
       * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
       *
       * See: https://github.com/webpack/source-map-loader
       */
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // add packages that have problems with their sourcemaps, e.g.:
          // helpers.root('node_modules/rxjs'),
        ]
      }

    ],

    /*
     * An array of automatically applied loaders.
     *
     * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
     * This means they are not resolved relative to the configuration file.
     *
     * See: http://webpack.github.io/docs/configuration.html#module-loaders
     */
    loaders: [
      
      /**
       * Compile Aurelia modules to ES5 while keeping modules in ES6 format
       */
      {
        test: /\.js$/,
        loader: 'babel',
        include: /node_modules\/aurelia-[a-z\-]+\/dist\/es\d+/,
        query: {
          presets: ['es2015-loose-native-modules'],
          cacheDirectory: true,
        }
      },
      
      /*
       * Typescript loader support for .ts and Angular 2 async routes via .async.ts
       *
       * See: https://github.com/s-panferov/awesome-typescript-loader
       */
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e|d)\.ts$/, /node_modules/, helpers.root('config')]
      },

      /*
       * Json loader support for *.json files.
       *
       * See: https://github.com/webpack/json-loader
       */
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      /*
       * Raw loader support for *.css files
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },

      /* Raw loader support for *.html
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('index.html')]
      },

      { test: /\.(png|gif|jpg)$/, loader: 'url', query: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
    ]

  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [

    new AureliaWebpackPlugin({
      moduleType: 'es2015',
      root: helpers.root('.'),
      src: helpers.root('src'),
      /*
      // if you wish to include all files belonging to a module, list it here: //
      includeSubModules: [
        {moduleId: 'aurelia-dialog'},
        {moduleId: 'aurelia-validatejs'},
      ],
      */
      /*
      // if you wish to make additional modules visible or alias them
      // so that they can be loaded dynamically from within aurelia, list them here:
      contextMap: {
        'some-module': 'some-module/index.js'
      }
      */
    }),
    
    /*
     * Plugin: ForkCheckerPlugin
     * Description: Do type checking in a separate process, so webpack don't need to wait.
     *
     * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
     */
    new ForkCheckerPlugin(),

    /*
     * Plugin: OccurrenceOrderPlugin
     * Description: Varies the distribution of the ids to get the smallest id length
     * for often used ids.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
     * See: https://github.com/webpack/docs/wiki/optimization#minimize
     */
    new webpack.optimize.OccurrenceOrderPlugin(true),

    /*
     * Plugin: CommonsChunkPlugin
     * Description: Shares common code between the pages.
     * It identifies common modules and put them into a commons chunk.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
     * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'aurelia' /*, 'users' // see example above */].reverse()
    }),

    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency'
    }),
    
    /**
     * Plugin: ProvidePlugin
     * Description: Provide Bluebird Promise implementation, regeneratorRuntime and optionally a global jQuery
     */
    new ProvidePlugin({
      'Promise': 'bluebird',
      'regeneratorRuntime': 'regenerator-runtime',
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but expose it to every module
    }),

  ],

  /*
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
