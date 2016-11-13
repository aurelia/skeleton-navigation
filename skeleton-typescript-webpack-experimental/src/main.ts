// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'aurelia-loader-webpack';
import 'aurelia-bootstrapper';
// import 'aurelia-bootstrapper-webpack';
import {Aurelia} from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(/* @import */ 'aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(/* @import */ 'aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot(/* @import */ 'app');
}
