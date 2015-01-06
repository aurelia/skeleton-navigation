System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Property, NavBar;
  return {
    setters: [function (_aureliaFramework) {
      Property = _aureliaFramework.Property;
    }],
    execute: function () {
      NavBar = function NavBar() {};

      NavBar.annotations = function () {
        return [new Property("router")];
      };

      _export("NavBar", NavBar);
    }
  };
});