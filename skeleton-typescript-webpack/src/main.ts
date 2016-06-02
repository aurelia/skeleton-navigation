import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';


bootstrap((aurelia: Aurelia): void => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  const rootElem = document.body;
  aurelia.start().then(() => aurelia.setRoot('app', rootElem));
  rootElem.setAttribute('aurelia-app', '');
});
