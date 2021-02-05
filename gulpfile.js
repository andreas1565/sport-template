const gulp = require('gulp');
const terser = require('gulp-terser');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const htmlmin = require('gulp-htmlmin');
/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

gulp.task('message', (done) => {
  console.log('Gulp is running...');
  done();
});

// Minify JS
gulp.task('minify', (done) => {
  gulp
    .src('./src/js/*.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(gulp.dest('site/js', { sourcemaps: '.' }));
  done();
});

// compille sass
gulp.task('sass', (done) => {
  var plugins = [
    autoprefixer('last 2 versions', 'ie 6-8', 'Firefox > 20'),
    cssnano(),
  ];
  gulp
    .src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./site/css'));
  done();
});

gulp.task('html', (done) => {
  gulp
    .src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./site'));
  done();
});

gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/sass/*.scss', gulp.series('sass'));
  gulp.watch('src/js/*.js', gulp.series('minify'));
});
