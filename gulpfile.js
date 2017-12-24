const gulp = require('gulp');
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

const less = require('gulp-less');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

const BUILD_DIR = 'web/build';
let isProd = false;

gulp.task('build:js', () => {
	// let build = gulp.src('bundles/js/**/*.js')
	let build = gulp.src('bundles/index.js')
		.pipe(webpack({
			output: {
				filename: 'bundle.js',
			},
			module: {
				rules: [
					{
						// exclude: /(node_modules|bower_components|Particle)/,
						exclude: /.js/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['env']
							}
						}
					}
				]
			}
		}));
	
	if (isProd) {
		return build
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(minify())
			.pipe(sourcemaps.write('maps'))
			.pipe(gulp.dest(BUILD_DIR));
	}
	
	return build.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build:prod', () => {
	isProd = true;
	gulp.run('build:js');
	gulp.run('build:less');
});

gulp.task('build:less', function() {
	let build = gulp.src('bundles/less/index.less')
		.pipe(less())
		.pipe(rename('bundle.css'));
	
	if (isProd) {
		return build
			.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(cssnano())
			.pipe(sourcemaps.write('maps'))
			.pipe(gulp.dest(BUILD_DIR));
	}
	
	return build.pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', function() {
	gulp.watch(
		[
			'bundles/**/*.js'
		],
		[
			'build:js'
		]
	);
	
	gulp.watch(
		[
			'bundles/less/**/*.less'
		],
		[
			'build:less'
		]
	);
});