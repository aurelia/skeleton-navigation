import {inject, computedFrom} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';

@inject(CssAnimator)
export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';

  constructor(animator) {
    this.animator = animator;
  }

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    if(this.firstName === '') {
      this.animator.addClass(this.elFirstName, 'input-error');
    } else {
      this.animator.removeClass(this.elFirstName, 'input-error');
      alert(`Welcome, ${this.fullName}!`);
    }
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
