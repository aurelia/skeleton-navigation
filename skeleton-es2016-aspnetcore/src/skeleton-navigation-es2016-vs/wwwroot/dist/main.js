'use strict';

System.register(['bootstrap'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFTyxlQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEI7QUFDakMsZ0JBQVEsR0FBUixDQUNHLHFCQURILEdBRUcsa0JBRkg7O0FBV0EsZ0JBQVEsS0FBUixHQUFnQixJQUFoQixDQUFxQjtBQUFBLGlCQUFNLFFBQVEsT0FBUixFQUFOO0FBQUEsU0FBckI7QUFDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
