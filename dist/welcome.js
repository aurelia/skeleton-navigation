define(["exports"], function (exports) {
  "use strict";

  var _classProps = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Welcome = (function () {
    var Welcome = function Welcome() {
      this.heading = "Welcome to the Aurelia Navigation App!";
      this.firstName = "John";
      this.lastName = "Doe";
    };

    Welcome.prototype.welcome = function () {
      alert("Welcome, " + this.fullName + "!");
    };

    _classProps(Welcome, null, {
      fullName: {
        get: function () {
          return "" + this.firstName + " " + this.lastName;
        }
      }
    });

    return Welcome;
  })();

  exports.Welcome = Welcome;
});