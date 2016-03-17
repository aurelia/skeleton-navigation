import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';

//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/font-awesome/css/font-awesome.css';
//import '../styles/styles.css';

bootstrap((aurelia:any) : void => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
