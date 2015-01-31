var path = require('path');

module.exports = {
    source: '../src/**/*.js',
    html: '../src/**/*.html',
    style: '../styles/**/*.css',
    e2eSpecsSrc: '../test/e2e/src/*.js',

    output: path.resolve('../dist/'),
    doc: path.resolve('../doc'),
    e2eSpecsDist: path.resolve('../test/e2e/dist/')
};