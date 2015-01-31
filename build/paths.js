var path = require('path');

module.exports = {
    source: path.resolve('../src/**/*.js'),
    html: path.resolve('../src/**/*.html'),
    style: path.resolve('../styles/**/*.css'),
    output: path.resolve('../dist/'),
    doc: path.resolve('.././doc'),
    e2eSpecsSrc: path.resolve('../test/e2e/src/*.js'),
    e2eSpecsDist: path.resolve('../test/e2e/dist/')
};