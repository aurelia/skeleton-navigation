/// <binding BeforeBuild='build' Clean='clean' ProjectOpened='watch' />
// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');