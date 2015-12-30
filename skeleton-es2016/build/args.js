var yargs = require('yargs');

var argv = yargs.argv;
var validBumpTypes = 'major|minor|patch|prerelease'.split('|');
var bump = (argv.bump || 'patch').toLowerCase();

if (validBumpTypes.indexOf(bump) === -1) {
  throw new Error('Unrecognized bump "' + bump + '".');
}

module.exports = {
  bump: bump,
  depth: parseInt(argv.depth || '0')
};
