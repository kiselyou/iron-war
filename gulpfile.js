const gulp = require('gulp');
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

const less = require('gulp-less');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

const BUILD_DIR = 'web/build';
let isProd = false;

let buildJs = (input, output) => {
    let build = gulp.src(input)
        .pipe(webpack({
            output: {
                filename: output,
            },
            module: {
                rules: [
                    {
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
};

gulp.task('build:js', () => {
    buildJs('bundles/index.js', 'bundle.js');
});

gulp.task('build:admin:js', () => {
    buildJs('bundles/admin/index.js', 'bundle-admin.js');
});

gulp.task('build', () => {
	isProd = true;
	gulp.run('build:js');
	gulp.run('build:less');
	gulp.run('build:admin:js');
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
	gulp.watch(['bundles/index.js', 'bundles/api.js', 'bundles/js/**/*.js'], ['build:js']);
	gulp.watch(['bundles/less/**/*.less'], ['build:less']);
    gulp.watch(['bundles/admin/**/*.js'], ['build:admin:js']);
});