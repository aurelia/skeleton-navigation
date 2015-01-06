System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, Welcome;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      Welcome = function Welcome(router) {
        this.heading = "Child Router";
        this.router = router;
        router.configure(function (config) {
          config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
        });
      };

      Welcome.inject = function () {
        return [Router];
      };

      _export("Welcome", Welcome);
    }
  };
});