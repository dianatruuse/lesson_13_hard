const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var minifyCSS = require("gulp-minify-css");
var rename = require('gulp-rename');

gulp.task('hello', function (done) {
  console.log('Привет, мир!');
  done();
});

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// task
gulp.task('compressCSS', function (done) {
    gulp.src('./css/*.css') // path to your file
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./minify-css'));
    done();
});