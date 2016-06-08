'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export, _context) {
  "use strict";

  var inject, HttpClient, _dec, _class, Users;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      _export('Users', Users = (_dec = inject(HttpClient), _dec(_class = function () {
        function Users(http) {
          _classCallCheck(this, Users);

          this.heading = 'Github Users';
          this.users = [];

          http.configure(function (config) {
            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
          });

          this.http = http;
        }

        Users.prototype.activate = function activate() {
          var _this = this;

          return this.http.fetch('users').then(function (response) {
            return response.json();
          }).then(function (users) {
            return _this.users = users;
          });
        };

        return Users;
      }()) || _class));

      _export('Users', Users);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLFkscUJBQUEsTTs7QUFDQSxnQix1QkFBQSxVOzs7dUJBSUssSyxXQURaLE9BQU8sVUFBUCxDO0FBS0MsdUJBQVksSUFBWixFQUFrQjtBQUFBOztBQUFBLGVBSGxCLE9BR2tCLEdBSFIsY0FHUTtBQUFBLGVBRmxCLEtBRWtCLEdBRlYsRUFFVTs7QUFDaEIsZUFBSyxTQUFMLENBQWUsa0JBQVU7QUFDdkIsbUJBQ0csd0JBREgsR0FFRyxXQUZILENBRWUseUJBRmY7QUFHRCxXQUpEOztBQU1BLGVBQUssSUFBTCxHQUFZLElBQVo7QUFDRDs7d0JBRUQsUSx1QkFBVztBQUFBOztBQUNULGlCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsRUFDSixJQURJLENBQ0M7QUFBQSxtQkFBWSxTQUFTLElBQVQsRUFBWjtBQUFBLFdBREQsRUFFSixJQUZJLENBRUM7QUFBQSxtQkFBUyxNQUFLLEtBQUwsR0FBYSxLQUF0QjtBQUFBLFdBRkQsQ0FBUDtBQUdELFMiLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
