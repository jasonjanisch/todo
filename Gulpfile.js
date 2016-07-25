var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src('app.spec.js')
    .pipe(mocha());
});

gulp.task('watch', function() {
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

var watcher = gulp.watch('**/*.js', ['test']);
