var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var to5 = require('gulp-6to5');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var yuidoc = require("gulp-yuidoc");
var changelog = require('conventional-changelog');
var assign = Object.assign || require('object.assign');
var pkg = require('./package.json');
var fs = require('fs');
var connect = require('gulp-connect');

var path = {
  source:'src/**/*.js',
  html:'src/**/*.html',
  output:'dist/',
  doc:'./doc'
};

var compilerOptions = {
  filename: '',
  filenameRelative: '',
  blacklist: [],
  whitelist: [],
  modules: '',
  sourceMap: true,
  sourceMapName: '',
  sourceFileName: '',
  sourceRoot: '',
  moduleRoot: '',
  amdModuleIds: false,
  runtime: false,
  comments: false,
  experimental: false
};

var jshintConfig = {esnext:true};

gulp.task('clean', function() {
  return gulp.src([path.output], {read: false})
    .pipe(clean());
});

gulp.task('build-amd', function () {
  return gulp.src(path.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'amd'})))
    .pipe(gulp.dest(path.output));
});

gulp.task('build-html', function () {
  return gulp.src(path.html)
    .pipe(gulp.dest(path.output));
});

gulp.task('lint', function() {
  return gulp.src(path.source)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));
});

gulp.task('doc', function(){
  gulp.src(path.source)
    .pipe(yuidoc.parser(null, 'api.json'))
    .pipe(gulp.dest(path.doc));
});

gulp.task('changelog', function(callback) {
  changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: path.doc + '/CHANGELOG.md'
  }, function(err, log) {
    fs.writeFileSync(path.doc + '/CHANGELOG.md', log);
  });
});

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['build-amd', 'build-html'],
    callback
  );
});

gulp.task('watch', ['build'], function() {
  var watcher = gulp.watch([path.source, path.html], ['build']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('serve', function(){
  connect.server({
    root: [__dirname],
    port: 9000,
    livereload: false,
    open: false
  });
});

gulp.task('prepare-release', function(callback){
  runSequence(
    'build',
    'lint',
    'doc',
    'changelog',
    callback
  );
});