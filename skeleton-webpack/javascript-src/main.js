import {bootstrap} from 'aurelia-bootstrapper-webpack';

bootstrap(async (aurelia) => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements
  //You'll also need to list the package as a resource in package.json (aurelia->build->resources)

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //You'll also need to list the package as a resource in package.json (aurelia->build->resources)
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  const rootElement = document.body;
  rootElement.setAttribute('aurelia-app', '');

  await aurelia.start();
  aurelia.setRoot('app', rootElement);

  // if you would like your website to work offline (Service Worker),
  // enable the OfflinePlugin in config/webpack.common.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
});
