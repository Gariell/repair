const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-html-minifier2');
const tinify = require('gulp-tinify');

// сожми и перенеси

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('build/css/'))
});

// перенеси сжатые JS-файлы
gulp.task('move-js', () => {
  return gulp.src('src/js/*min.js')
  .pipe(gulp.dest('build/js'))
});

//  сожми и перенеси js-файлы
gulp.task('minify-js', () => {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
  .pipe(jsmin())
  .pipe(gulp.dest('build/js'))
});

// сожми и перенеси HTML файлы
gulp.task('htmlmin', () => {
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true}))
  .pipe(gulp.dest('build/'))
});

// сщжми и перенеси шрифты
gulp.task('move-font', () => {
  return gulp.src('src/fonts/*/*')
  .pipe(gulp.dest('build/fonts/'))
});

// сожми изображения и перенеси их в build
gulp.task('imagemin', () => {
  return gulp.src('src/img/**/*.*')
  .pipe(tinify('k8p8b1JPBDj7JvtVXbnwnbyXcNrBvjZr'))
  .pipe(gulp.dest('build/img/'))
});

// переместить PHP в Build
gulp.task('move-php', () => {
  return gulp.src('src/*.php')
  .pipe(gulp.dest('build/'))
});

gulp.task('move-phpmailer', () => {
  return gulp.src('src/phpMailer/*.php')
  .pipe(gulp.dest('build/phpMailer'))
});




gulp.task('build', gulp.series('minify-css', 'move-js', 'minify-js', 'htmlmin', 'imagemin', 'move-font', 'move-php', 'move-phpmailer'));