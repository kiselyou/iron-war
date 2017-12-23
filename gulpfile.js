let gulp = require('gulp');
let concat = require('gulp-concat');
let minify = require('gulp-minify');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('prepare:js', () => {
	gulp.src('bundles/js/**/*.js')
		.pipe(concat('bundle.js'))
		.pipe(sourcemaps.init())
		.pipe(minify())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('web/build'));
});

gulp.task('prepare:less', () => {
	console.log('less');
});

gulp.task('prepare', ['prepare:js', 'prepare:less']);

gulp.task('watch', function() {
	gulp.watch(
		[
			'bundles/js/**/*.js',
			'bundles/ejs/**/*.ejs'
		],
		[
			'prepare:js'
		]
	);
	
	gulp.watch(
		'bundles/less/**/*.less',
		[
			'prepare:less'
		]
	);
});