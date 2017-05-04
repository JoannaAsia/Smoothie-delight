var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('dist', function() {
	gulp.src('src/css/*.css')
	.pipe(postcss([
		require('autoprefixer')({}),
		]))
	.pipe(gulp.dest('dist/src/css'));
});