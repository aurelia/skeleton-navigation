'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, Welcome, UpperValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Welcome', Welcome = function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
        }

        Welcome.prototype.submit = function submit() {
          this.previousValue = this.fullName;
          alert('Welcome, ' + this.fullName + '!');
        };

        Welcome.prototype.canDeactivate = function canDeactivate() {
          if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
          }
        };

        _createClass(Welcome, [{
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      }());

      _export('Welcome', Welcome);

      _export('UpperValueConverter', UpperValueConverter = function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        UpperValueConverter.prototype.toView = function toView(value) {
          return value && value.toUpperCase();
        };

        return UpperValueConverter;
      }());

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFFYSxPOzs7O2VBQ1gsTyxHQUFVLHdDO2VBQ1YsUyxHQUFZLE07ZUFDWixRLEdBQVcsSztlQUNYLGEsR0FBZ0IsS0FBSyxROzs7MEJBV3JCLE0scUJBQVM7QUFDUCxlQUFLLGFBQUwsR0FBcUIsS0FBSyxRQUExQjtBQUNBLDhCQUFrQixLQUFLLFFBQXZCO0FBQ0QsUzs7MEJBRUQsYSw0QkFBZ0I7QUFDZCxjQUFJLEtBQUssUUFBTCxLQUFrQixLQUFLLGFBQTNCLEVBQTBDO0FBQ3hDLG1CQUFPLFFBQVEsaUNBQVIsQ0FBUDtBQUNEO0FBQ0YsUzs7Ozs4QkFiYztBQUNiLG1CQUFVLEtBQUssU0FBZixTQUE0QixLQUFLLFFBQWpDO0FBQ0Q7Ozs7Ozs7O3FDQWNVLG1COzs7OztzQ0FDWCxNLG1CQUFPLEssRUFBTztBQUNaLGlCQUFPLFNBQVMsTUFBTSxXQUFOLEVBQWhCO0FBQ0QsUyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
