System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Welcome;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Welcome = (function () {
        function Welcome() {
          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _prototypeProperties(Welcome, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Welcome;
      })();
      _export("Welcome", Welcome);
    }
  };
});