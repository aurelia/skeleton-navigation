import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap((aurelia: Aurelia): void => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  const rootElem = document.body;
  aurelia.start().then(() => aurelia.setRoot('app', rootElem));
  rootElem.setAttribute('aurelia-app', '');
});
