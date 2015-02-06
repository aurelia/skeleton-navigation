System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Welcome, UpperValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Welcome = _export("Welcome", (function () {
        function Welcome() {
          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _prototypeProperties(Welcome, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            configurable: true
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {}

        _prototypeProperties(UpperValueConverter, null, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            },
            writable: true,
            configurable: true
          }
        });

        return UpperValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUFhLE9BQU8sRUFnQlAsbUJBQW1COzs7Ozs7QUFoQm5CLGFBQU87QUFDUCxpQkFEQSxPQUFPLEdBQ0w7QUFDWCxjQUFJLENBQUMsT0FBTyxHQUFHLHdDQUF3QyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCOzs2QkFMVSxPQUFPO0FBT2Qsa0JBQVE7aUJBQUEsWUFBRTtBQUNaLDBCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRzthQUM3Qzs7O0FBRUQsaUJBQU87bUJBQUEsbUJBQUU7QUFDUCxtQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQzthQUNyQzs7Ozs7O2VBYlUsT0FBTzs7QUFnQlAseUJBQW1CO2lCQUFuQixtQkFBbUI7OzZCQUFuQixtQkFBbUI7QUFDOUIsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFDO0FBQ1gscUJBQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNyQzs7Ozs7O2VBSFUsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==