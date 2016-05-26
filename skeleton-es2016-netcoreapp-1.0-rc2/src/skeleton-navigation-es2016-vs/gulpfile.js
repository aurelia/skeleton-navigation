/// <binding BeforeBuild='clean, build-system, build-html, build-css, build-jspm' Clean='clean' ProjectOpened='watch' />
// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');