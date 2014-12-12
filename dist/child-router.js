define(["exports", "aurelia-router"], function (exports, _aureliaRouter) {
  "use strict";

  var Router = _aureliaRouter.Router;
  var Welcome = (function () {
    var Welcome = function Welcome(router) {
      this.heading = "Child Router";
      this.router = router;
      router.configure(function (config) {
        config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
      });
    };

    Welcome.inject = function () {
      return [Router];
    };

    return Welcome;
  })();

  exports.Welcome = Welcome;
});