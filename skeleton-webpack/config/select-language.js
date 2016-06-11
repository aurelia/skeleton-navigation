const helpers = require('./helpers');

if (!helpers.package.language) {
  const inquirer = require('inquirer');
  inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: 'Which language would you like to use with Aurelia?',
      choices: [
        'JavaScript',
        'TypeScript'
      ]
    }
  ]).then(function (answers) {
    try {
      helpers.selectLanguage(answers.language);
    } catch (e) {
      console.error(e.message);
    }
  });
}
