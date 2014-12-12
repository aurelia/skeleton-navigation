define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  var Property = _aureliaFramework.Property;
  var NavBar = (function () {
    var NavBar = function NavBar() {};

    NavBar.annotations = function () {
      return [new Property("router")];
    };

    return NavBar;
  })();

  exports.NavBar = NavBar;
});