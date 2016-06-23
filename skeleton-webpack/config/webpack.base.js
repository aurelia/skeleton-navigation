/**
 * Inspired by @AngularClass
 * https://github.com/AngularClass/angular2-webpack-starter
 */

import webpack from 'webpack';
import * as helpers from './helpers';

const compilerSpecific = helpers.language === 'javascript' ? require('./webpack.base-javascript').default : require('./webpack.base-typescript').default;

/*
 * Webpack Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const coreBundles = {
  bootstrap: [
    'aurelia-polyfills',
    'aurelia-pal',
    'aurelia-pal-browser',
    'regenerator-runtime',
    'bluebird'
  ],
  // that will have root directory remapped from /dist/commonjs to /dist/es2015
  // they will be included in the 'aurelia' bundle (except for bootstrap packages)
  aurelia: [
    'aurelia-bootstrapper-webpack',
    'aurelia-binding',
    'aurelia-dependency-injection',
    'aurelia-event-aggregator',
    'aurelia-fetch-client',
    'aurelia-framework',
    'aurelia-history',
    'aurelia-history-browser',
    'aurelia-loader',
    'aurelia-loader-webpack',
    'aurelia-logging',
    'aurelia-logging-console',
    'aurelia-metadata',
    'aurelia-pal',
    'aurelia-pal-browser',
    'aurelia-path',
    'aurelia-polyfills',
    'aurelia-route-recognizer',
    'aurelia-router',
    'aurelia-task-queue',
    'aurelia-templating',
    'aurelia-templating-binding',
    'aurelia-templating-router',
    'aurelia-templating-resources'
  ],
  // you may remove certain non-core packages from the 'aurelia' bundle in order to lazy-load them
  excludeFromAureliaBundle: [
    'aurelia-fetch-client'
  ]
}

if (helpers.language === 'typescript') {
  coreBundles.bootstrap.push('ts-helpers');
}

const meta = helpers.generateMeta(coreBundles);

/*
 * Webpack Constants
 */
const METADATA = {
  title: 'Aurelia',
  baseUrl: '/',
  language: helpers.language
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const config = {

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
  cache: true,
  entry: {
    'app': ['./src/main'],
    'aurelia-bootstrap': ['./index'].concat(meta.bootstrapPackages),
    'aurelia': meta.aureliaPackages,
    // if you wish to have certain packages end up in their own files, you may do so here
    // e.g. this will put all non-aurelia dependencies into a "vendor" chunk (not recommended): 
    // 'vendor': meta.vendorPackages.filter(entry => ['isomorphic-fetch'].indexOf(entry) === -1),
    /*
    // an example of how to separate parts of code into static chunks
    // (only do it if you know what you're doing)
    // most of the time you'll want to declare dynamic chunks in package.json
    // if you do it, remember to also include the new chunk in the CommonsChunkPlugin Array below //
    users: [ './src/users', './src/users.html', './src/blur-image' ],
    */
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

      ...compilerSpecific.module.preLoaders,

      /*
       * Source map loader support for *.js files
       * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
       *
       * See: https://github.com/webpack/source-map-loader
       */
      {
        test: /\.js$/,
        loader: 'source-map',
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
       * Transpile Aurelia modules to ES5 while keeping modules in ES6 format
       * NOTE: Useful only with ES2015 builds (work-in-progress)
       * NOTE: It would be better if Aurelia had es5 builds with es2015 imports premade
       */
      {
        test: /\.js$/,
        loader: 'babel',
        include: /node_modules[\/\\]aurelia-[a-z\-]+[\/\\]dist[\/\\]es\d+/,
        query: {
          presets: ['es2015-loose-native-modules'],
          cacheDirectory: true,
        }
      },
      
      ...compilerSpecific.module.loaders,

      /*
       * Json loader support for *.json files.
       *
       * See: https://github.com/webpack/json-loader
       */
      {
        test: /\.json$/,
        loader: 'json'
      },

      /* HTML loader support for *.html
       * Returns file content as string, loads required images.
       *
       * See: https://github.com/webpack/html-loader
       */
      {
        test: /\.html$/,
        loader: 'html',
        exclude: [helpers.root('index.html')]
      },

      // embed small images and fonts as Data Urls and larger ones as files
      { test: /\.(png|gif|jpg)$/, loader: 'url', query: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url', query: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      
    ]

  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [

    new AureliaWebpackPlugin({
      root: helpers.root('.'),
      src: helpers.root('src')
    }),

    /*
     * Plugin: CopyWebpackPlugin
     * Description: Copy files and directories in webpack.
     *
     * Copies project static assets.
     * Use only if you need to copy static files, like images.
     *
     * See: https://www.npmjs.com/package/copy-webpack-plugin
     */
    /*
    new CopyWebpackPlugin([{
      from: 'styles',
      to: 'styles'
    }]),
    */

    /*
     * Plugin: OccurrenceOrderPlugin
     * Description: Varies the distribution of the ids to get the smallest id length
     * for often used ids.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
     * See: https://github.com/webpack/docs/wiki/optimization#minimize
     */
    new webpack.optimize.OccurrenceOrderPlugin(true),
    
    /**
     * Plugin: ProvidePlugin
     * Description: Provide Bluebird Promise implementation, regeneratorRuntime and optionally a global jQuery
     */
    new ProvidePlugin({
      'Promise': 'bluebird',
      'regeneratorRuntime': 'regenerator-runtime', // required for await-async
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but exposes it to every module
    })

  ],

};

if (helpers.language === 'typescript') {
  config.entry['aurelia-bootstrap'].splice(0, 0, 'ts-helpers');
}

export default config;
