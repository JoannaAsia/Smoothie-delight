var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
	return gulp.src('src/css/*.css')
	.pipe(postcss([
		require('autoprefixer')({}),
		]))
	.pipe(gulp.dest('dist'));
});