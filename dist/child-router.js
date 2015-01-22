System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, Welcome;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Welcome = (function () {
        function Welcome(router) {
          this.heading = "Child Router";
          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
          });
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [Router];
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