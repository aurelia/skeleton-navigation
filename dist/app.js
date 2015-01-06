System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      App = function App(router) {
        this.router = router;
        this.router.configure(function (config) {
          config.title = "Aurelia";
          config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
        });
      };

      App.inject = function () {
        return [Router];
      };

      _export("App", App);
    }
  };
});