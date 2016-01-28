//Modified from tutorial at CSS-Tricks
//https://css-tricks.com/gulp-for-beginners/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

gulp.task('scripts', function () {
	return gulp.src('src/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
});

gulp.task('css', function() {
	return gulp.src('src/**/*.css')
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'))
});

gulp.task('images', function() {
	return gulp.src('src/**/*.+(png|jpg)')
	.pipe(cache(imagemin({optimizationLevel: 4, progressive: true})))
	.pipe(gulp.dest('dist/images'))
});

gulp.task('delete', function() {
	return del(['dist/css', 'dist/scripts', 'dist.images']);
});

gulp.task('default', ['delete'], function() {
	gulp.start('scripts', 'css', 'images');
});