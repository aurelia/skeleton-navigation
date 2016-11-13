/// <reference types="node" />

import { merge, WebpackConfigWithDescription as CFG, WebpackConfig, description } from '@easy-webpack/core';
import * as path from 'path';
import * as webpack from 'webpack';
import { RewriteModuleSubdirectoryPlugin, RootMostResolvePlugin, MappedModuleIdsPlugin, ConventionInvalidatePlugin, CommentLoaderOptions, ConventionOptions, HtmlRequireOptions, ListBasedRequireOptions, AddLoadersMethod } from 'webpack-dependency-suite';
import { addLoadersMethod as aureliaAddLoadersCallback } from 'webpack-dependency-suite/example/aurelia';
import { AureliaTemplateLintLoaderOptions } from 'aurelia-template-lint-webpack-loader/typings';
import { Config as TemplateLintConfig } from 'aurelia-template-lint';

const ENV: 'development' | 'production' | 'test' = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || (process.env.NODE_ENV = 'development');
const title = 'Aurelia Navigation Skeleton';
const baseUrl = '/';
const rootDir = path.resolve();
const srcDir = path.resolve('src');
const outDir = path.resolve('dist');
const nodeModules = path.resolve('node_modules');
const webpackPort = parseInt(process.env.WEBPACK_PORT) || 9000;
const webpackHost = process.env.WEBPACK_HOST || 'localhost';
const isHMR = process.argv.join('').indexOf('hot') > -1 || !!process.env.WEBPACK_HMR
const isLive = process.argv.join('').indexOf('webpack-dev-server') > -1 || !!process.env.WEBPACK_LIVE
const aureliaModules = /node_modules\/aurelia-/;

const base: WebpackConfig = {
  resolve: {
    extensions: ['.js'],
    modules: [
      srcDir,
      'node_modules'
    ],
  },
  entry: {
    app: './src/main'
  },
  output: {
    path: outDir,
    publicPath: baseUrl
  },
};

const DefinePlugin = require('webpack/lib/DefinePlugin');
const development: CFG = {
  // '📄': { enabled: ENV !== 'production' },
  // devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ],
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    port: webpackPort,
    host: webpackHost,
    historyApiFallback: true,
    contentBase: baseUrl,
    outputPath: outDir,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  }
}

const WebpackMd5Hash = require('webpack-md5-hash');
const production: CFG = {
  // '📄': { enabled: ENV === 'production' },
  devtool: '#source-map',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  plugins: [
    new WebpackMd5Hash(),
    new (webpack as any).LoaderOptionsPlugin({
      options: {
        htmlLoader: {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
        }
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { screw_ie8: true, except: ['__webpack_require__'], /* keep_fnames: true */ },
      compress: { screw_ie8: true, warnings: false },
    })
  ]
}

const typescript: CFG = {
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/i,
      loader: 'ts-loader',
      exclude: [nodeModules],
      options: { transpileOnly: false }
    }]
  }
}

const variables: CFG = {
  plugins: [
    // literally replaces all mentions of a given variable in your code with the given value
    new DefinePlugin({
      ENV: JSON.stringify(ENV),
      HMR: isHMR,
      'process.env': {
        NODE_ENV: JSON.stringify(ENV),
        HMR: isHMR,
        WEBPACK_PORT: JSON.stringify(webpackPort),
        WEBPACK_HOST: JSON.stringify(webpackHost),
      }
    })
  ]
}

/**
 * Plugin: ExtractTextPlugin
 * It moves every import "style.css" in entry chunks into a single concatenated css output file. 
 * So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css). 
 * If your total stylesheet volume is big, it will be faster because the stylesheet bundle is loaded in parallel to the javascript bundle.
 */
/*
// TEMPORAIRLY OFF BECAUSE THE CURRENT VERSION IS BROKEN //
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextInstance = new ExtractTextPlugin({
  name: ENV === 'production' ? '[name].[chunkhash].css' : '[name].css',
  allChunks: false
});
*/
const css: CFG = {
  module: {
    rules: [
      {
        // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
        test: /\.css$/i,
        use: ['style-loader'],
        issuer: {
          // only when the issuer is a .js/.ts file, so the loaders are not applied inside templates
          test: /\.[tj]s$/i,
        },
        // loader: ExtractTextInstance.extract({ fallbackLoader: 'style-loader', loader: ['css-loader'] }),
        // parser: {
        //   requireInclude: false, // disable require.include
        // }
      },
      {
        // CSS anywhere should use the css-loader
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ]
  },
  // plugins: [ExtractTextInstance]
}

const fontsAndImages: CFG = {
  module: {
    rules: [
      // embed small images and fonts as Data Urls and larger ones as files
      { test: /\.(png|gif|jpg)$/, loader: 'url-loader', options: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      // load these fonts normally, as files:
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ]
  }
}

const globals: CFG = {
  module: {
    rules: [
      // expose jQuery as a global
      { test: require.resolve('jquery'), loader: 'expose-loader?$!expose?jQuery' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but replaces calls to it in every module
    })
  ]
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const generateIndexHtml: CFG = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency',
      minify: ENV === 'production' ? {
        removeComments: true,
        collapseWhitespace: true
      } : undefined,
      metadata: {
        // available in index.html //
        title, ENV, isHMR, isLive
      }
    })
  ]
}

const commonChunks: CFG = {
  // '📄': { enabled: ENV === 'production' },  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    })
  ]
}

const CopyWebpackPlugin = require('copy-webpack-plugin');
const copyFiles: CFG = {
  // '📄': { enabled: ENV === 'production' },  
  plugins: [new CopyWebpackPlugin([
    { from: 'static/favicon.ico', to: 'favicon.ico' }
  ])]
}

const generateCoverage: CFG = {
  // '📄': { enabled: ENV === 'test' },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      loader: 'sourcemap-istanbul-instrumenter-loader',
      options: { esModules: true },
      enforce: 'post',
    }]
  }
}

const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard: CFG = {
  // '📄': { enabled: isLive },
  plugins: [
    new DashboardPlugin()
  ]
}


const templateLintConfig = new TemplateLintConfig();
templateLintConfig.debug = true;
// enable type checking:
templateLintConfig.useRuleAureliaBindingAccess = true;
templateLintConfig.reflectionOpts.sourceFileGlob = 'src/**/*.ts';

const aureliaTemplateLint: CFG = {
  module: {
    rules: [{
      test: /\.html$/i,
      include: [srcDir],
      enforce: 'pre',
      use: [{
        loader: 'aurelia-template-lint-webpack-loader',
        options: {
          // you can pass an configuration class
          // config reference https://github.com/MeirionHughes/aurelia-template-lint#config
          configuration: templateLintConfig as any,

          // aurelia errors are displayed by default as warnings
          // set emitErrors to true to display them as errors
          emitErrors: false,

          // aurelia does not interrupt the compilation by default
          // if you want any file with aurelia errors to fail
          // set failOnHint to true
          failOnHint: false
        } as AureliaTemplateLintLoaderOptions
      }]
    }]
  },
  plugins: [
    // "touch", or invalidate modules of Views related to ViewModels
    new ConventionInvalidatePlugin((changedPaths, watchedFiles) => {
      const pathsToInvalidate = []
      changedPaths
        .filter(filePath => filePath.match(/\.[tj]s$/))
        .forEach(filePath => {
        const pathWithoutExtension = filePath.replace(/\.[^/.]+$/, '')
        const relatedTemplate = `${pathWithoutExtension}.html`
        if (watchedFiles.indexOf(relatedTemplate) >= 0)
        pathsToInvalidate.push(relatedTemplate)
      })
      return pathsToInvalidate
    }),
  ]
}

const addLoadersCallback: AddLoadersMethod = async (list, loaderInstance) => {
  return await aureliaAddLoadersCallback(rootDir, list, loaderInstance)
}

const aureliaApplication: CFG = {
  '📄': {
    name: 'Aurelia',
    dependencies: ['webpack-dependency-suite']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        include: [srcDir, aureliaModules],
        exclude: [path.join(rootDir, 'index.html')],
        use: [{
          loader: 'webpack-dependency-suite/loaders/html-require-loader',
          options: {
            addLoadersCallback
          } as HtmlRequireOptions
        }]
      },
      {
        test: /\.[tj]s$/i,
        include: [srcDir, aureliaModules],
        use: [
          {
            loader: 'webpack-dependency-suite/loaders/convention-loader',
            options: {
              addLoadersCallback,
              convention: 'extension-swap'
            } as ConventionOptions
          },
        ]
      },
      {
        test: /\.[tj]s$/i,
        include: [srcDir],
        use: [{
          loader: 'webpack-dependency-suite/loaders/comment-loader',
          options: {
            addLoadersCallback
          } as CommentLoaderOptions
        }]
      },
      {
        test: /\.[tj]s$/i,
        include: [/*srcDir, */ aureliaModules],
        use: [{
          loader: 'webpack-dependency-suite/loaders/list-based-require-loader',
          options: {
            addLoadersCallback,
            packagePropertyPath: 'aurelia.build.resources',
            enableGlobbing: true,
            rootDir
          } as ListBasedRequireOptions
        }]
      }
    ]
  },
  resolve: {
    plugins: [
      new RewriteModuleSubdirectoryPlugin((moduleName, remainingRequest, request) => {
        if (moduleName.startsWith('aurelia-'))
          return `${moduleName}/dist/native-modules/${remainingRequest || moduleName}`
      }),
      new RewriteModuleSubdirectoryPlugin((moduleName, remainingRequest, request) => {
        if (moduleName.startsWith('aurelia-'))
          return `${moduleName}/dist/commonjs/${remainingRequest || moduleName}`
      }),
      // removes duplicate submodules if the required SemVer is satisfied
      // preferring local ones (closest to rootDir)
      // useful especially when using linked modules
      new RootMostResolvePlugin(rootDir, true)
    ],
  },

  plugins: [
    new MappedModuleIdsPlugin({
      appDir: srcDir,
      prefixLoaders: [
        {loader: 'bundle-loader', prefix: 'async'}, 
        {loader: 'expose-loader', prefix: 'expose'},
        {loader: 'css-loader', prefix: false},
        {loader: 'style-loader', prefix: 'style'},
        {loader: 'html-webpack-plugin/lib/loader', prefix: 'html-webpack'},
      ],
      logWhenRawRequestDiffers: true,
      dotSlashWhenRelativeToAppDir: false,
      beforeLoadersTransform: (moduleId) => {
        if (!moduleId.startsWith('aurelia-')) return moduleId
        return moduleId
          .replace('/dist/native-modules', '')
          .replace('/dist/commonjs', '')
      },
      afterExtensionTrimmingTransform: (moduleId) => {
        if (!moduleId.startsWith('aurelia-')) return moduleId
        const split = moduleId.split('/')
        if (split.length === 2 && split[0] === split[1]) {
          // aurelia uses custom main path
          return split[0]
        }
        return moduleId
      }
    }),
  ]
}

const config = merge(
  base,
  ENV === 'production' ? production : development,
  css,
  aureliaTemplateLint,
  aureliaApplication,
  typescript,
  variables,
  fontsAndImages,
  globals,
  generateIndexHtml,
  ...(
    ENV === 'production' ? [commonChunks, copyFiles] : []
  ),
  ...(
    ENV === 'test' ? [generateCoverage] : []
  ),
  ...(
    isLive ? [dashboard] : []
  )
)

// console.dir(config, {depth: 3})

module.exports = config
