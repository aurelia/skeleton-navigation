System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Property, _prototypeProperties, NavBar;
  return {
    setters: [function (_aureliaFramework) {
      Property = _aureliaFramework.Property;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      NavBar = (function () {
        function NavBar() {}

        _prototypeProperties(NavBar, {
          annotations: {
            value: function () {
              return [new Property("router")];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return NavBar;
      })();
      _export("NavBar", NavBar);
    }
  };
});