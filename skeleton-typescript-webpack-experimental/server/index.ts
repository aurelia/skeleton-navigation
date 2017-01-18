/// <reference types="jquery" />

import * as path from 'path';
import 'aurelia-polyfills';
import {Options, WebpackLoader as NodeJsLoader} from 'aurelia-loader-nodejs';
import {PLATFORM, DOM} from 'aurelia-pal';
import {globalize} from 'aurelia-pal-nodejs';
import {Aurelia} from 'aurelia-framework';
import * as http from 'http'
import * as webpack from 'webpack'
import * as ecstatic from 'ecstatic'

// ignore importing '.css' files, useful only for Webpack codebases that do stuff like require('./file.css'):
require.extensions['.css'] = function (m, filename) {
  return
}

// set the root directory where the aurelia loader will resolve to
// this is the 'src' dir in case of skeleton
Options.relativeToDir = path.resolve(__dirname, '..', 'src')

process.on('unhandledRejection', function(reason, p) {
  console.log('Possibly unhandled Rejection at: Promise ', p, ' reason: ', reason)
})

// initialize PAL and set globals (window, document, etc.)
globalize()

// needed by bootstrap:
;(global as any).$ = (global as any).jQuery = require('jquery')
;(global as any).server = true

// aurelia expects console.debug
console.debug = console.log

// const compiler = webpack(require('../webpack.config'))

// const watcher = compiler.watch({}, (err, stats) => {
//   const info = stats.toJson({chunks: true})
//   console.log(`ready to serve`, info)
//   if (err) {
//     console.error(err)
//   }
// })

const staticHandler = ecstatic({ root: path.resolve(__dirname, '..', 'dist'), handleError: true })

const server = http.createServer((request, response) => {
  if (request.url.match(/\.(js|css|ico|woff2|woff|ttf)$/)) {
    const ret = staticHandler(request, response)
    // console.log(ret)
    return
    // if (response.finished) {
    //   return
    // } else {
    //   response.statusCode = 404
    //   response.end()
    // }
  }

  if (request.url.endsWith('.ico')) {
    response.statusCode = 404
    response.end()
  }

  response.statusCode = 200

  console.log(`serving: ${request.url}`)

  // set the path you want to load:
  // document.location.pathname = request.url
  document.location.hash = request.url //'/users';

  const aurelia = new Aurelia(new NodeJsLoader())
  aurelia.host = document.body
  ;(aurelia as any).configModuleId = 'main'

  // note: this assumes your configure method awaits or returns the value of aurelia.setRoot(...)
  // skeletons currently don't do that so you need to adjust
  require('../src/main').configure(aurelia).then(() => {
    const attribute = document.createAttribute('aurelia-app')
    attribute.value = 'main'
    document.body.attributes.setNamedItem(attribute)
    const renderedHtml = 
      `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Aurelia Navigation Server Skeleton</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="">
        <link href="/1.css" rel="stylesheet">
        <script type="text/javascript" async src="/app.bundle.js"></script>
      </head>
      ${document.body.outerHTML}
      </html>`

    response.end(renderedHtml)
  });
})

server.listen(8765)
console.log(`Listening server-side-rendered at http://localhost:8765/`)
