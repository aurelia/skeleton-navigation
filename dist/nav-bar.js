System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, NavBar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      NavBar = (function () {
        function NavBar() {}

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router");
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