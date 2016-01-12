var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

// Make sure js file is errorless and make a minified file
gulp.task('default', function() {
  gulp.src('./ohhai.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish-source', {
      fail: true
    }))
    .pipe(uglify())
    .pipe(rename('ohhai.min.js'))
    .pipe(gulp.dest('./'));
});
