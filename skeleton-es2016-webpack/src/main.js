import 'aurelia-bootstrapper';
import 'aurelia-loader-webpack';

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.css');
require('../styles/styles.css');


export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot());
}
