import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';

// font-awesome requires some fonts and thus cannot be required from within the View
import 'font-awesome/css/font-awesome.css';

bootstrap((aurelia: Aurelia): void => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  const rootElem = document.body;
  aurelia.start().then(() => aurelia.setRoot('app', rootElem));
  rootElem.setAttribute('aurelia-app', '');
});
