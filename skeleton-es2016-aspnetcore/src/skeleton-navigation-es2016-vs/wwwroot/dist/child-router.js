'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var ChildRouter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('ChildRouter', ChildRouter = function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        ChildRouter.prototype.configureRouter = function configureRouter(config, router) {
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

          this.router = router;
        };

        return ChildRouter;
      }());

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUFhLFc7Ozs7ZUFDWCxPLEdBQVUsYzs7OzhCQUVWLGUsNEJBQWdCLE0sRUFBUSxNLEVBQVE7QUFDOUIsaUJBQU8sR0FBUCxDQUFXLENBQ1QsRUFBRSxPQUFPLENBQUMsRUFBRCxFQUFLLFNBQUwsQ0FBVCxFQUEwQixNQUFNLFNBQWhDLEVBQWlELFVBQVUsU0FBM0QsRUFBNEUsS0FBSyxJQUFqRixFQUF1RixPQUFPLFNBQTlGLEVBRFMsRUFFVCxFQUFFLE9BQU8sT0FBVCxFQUEwQixNQUFNLE9BQWhDLEVBQWlELFVBQVUsT0FBM0QsRUFBNEUsS0FBSyxJQUFqRixFQUF1RixPQUFPLGNBQTlGLEVBRlMsRUFHVCxFQUFFLE9BQU8sY0FBVCxFQUEwQixNQUFNLGNBQWhDLEVBQWlELFVBQVUsY0FBM0QsRUFBNEUsS0FBSyxJQUFqRixFQUF1RixPQUFPLGNBQTlGLEVBSFMsQ0FBWDs7QUFNQSxlQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0QsUyIsImZpbGUiOiJjaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
