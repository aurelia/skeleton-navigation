var gulp = require('gulp');
var paths = require('../paths');
var changelog = require('conventional-changelog');
var pkg = require('../../package.json');

gulp.task('changelog', function() {
    return changelog({
        repository: pkg.repository.url,
        version: pkg.version,
        file: paths.doc + '/CHANGELOG.md'
    }, 
    function(err, log) {
        fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
    });
});
