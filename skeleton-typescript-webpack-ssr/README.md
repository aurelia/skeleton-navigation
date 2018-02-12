# Aurelia Server Side Rendering

### Running
1. `npm install`
2. In one terminal run `npm run watch` to create server and client bundles
3. When the bundles have been created, run `npm run server` in another terminal
4. Go to http://localhost:8080

### Minify HTML
```js
app.use(require('koa-compress')());
 
app.use(require('koa-html-minifier')({
  collapseWhitespace: true
}));

app.use(aureliaKoaMiddleware({
  preboot: true,
  prebootOptions: {
    uglify: true
  },
  bundlePath: require.resolve(bundle),
  template: require('fs').readFileSync(path.resolve('./dist/index.ssr.html'), 'utf-8')
}, {
  main: () => {
    delete require.cache[require.resolve(bundle)];
    return require(bundle);
  }
}));
```
