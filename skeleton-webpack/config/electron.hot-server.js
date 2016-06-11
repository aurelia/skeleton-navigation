/* eslint no-console: 0 */

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.electron-renderer.development';

const app = express();
const compiler = webpack(config);
const PORT = 3000;

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
