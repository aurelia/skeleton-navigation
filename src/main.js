import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //In the next release of Aurelia, this API will be removed.
  //At that time, the text loader will become the default.
  //Anyone wanting to use HTMLImports, will install the appropriate plugin.
  aurelia.loader.useTextLoader();

  aurelia.start().then(a => a.setRoot());
}
