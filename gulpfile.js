const gulp = require('gulp');
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

const BUILD_DIR = 'web/build';
let isProd = false;

gulp.task('build:js', () => {
	let build = gulp.src('bundles/js/**/*.js')
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
});

gulp.task('watch', function() {
	gulp.watch(
		[
			'bundles/js/**/*.js',
			'bundles/ejs/**/*.ejs'
		],
		[
			'build:js'
		]
	);
});