import {Property} from 'aurelia-framework';

export class NavBar {
  static annotations(){
    return [new Property('router')];
  }
}