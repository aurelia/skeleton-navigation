const Koa = require('koa');
const path = require('path');
const {aureliaKoaMiddleware} = require('aurelia-middleware-koa');

var port = process.env.PORT || 8080;

const app = new Koa();
const bundle = './dist/server.bundle';

app.use(aureliaKoaMiddleware({
  preboot: true,
  bundlePath: require.resolve(bundle),
  template: require('fs').readFileSync(path.resolve('./dist/index.ssr.html'), 'utf-8')
}, {
  main: () => {
    delete require.cache[require.resolve(bundle)];
    return require(bundle);
  }
}));

app.use(require('koa-static')(path.resolve(__dirname)));
app.use(require('koa-static')(path.resolve(__dirname, 'dist')));

console.log('Starting server....');
app.listen(port);
console.log(`Listening at http://localhost:${port}/`);

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
  console.log(error.stack);
});