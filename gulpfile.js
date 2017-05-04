var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
	return gulp.src('src/css/*.css')
	.pipe(postcss([
		require('autoprefixer')({}),
		require('postcss-nested')
		]))
	.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/minified'));
});