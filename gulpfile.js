(() => {
	let gulp = require('gulp');
	let sass = require('gulp-sass');
	let concat = require('gulp-concat');
	let uglifyCss = require('gulp-uglifycss');
	let ngAnnotate = require('gulp-ng-annotate');

	let watchFiles = [
		'./app/**/*.scss',
		'./app/**/*.js',
		'./app/**/*.html',
	];
	
	let watcher = gulp.watch(watchFiles, ['default']);

	gulp.task('default', [
		'styles',
		'js',
		'html',
	]);

	gulp.task('watch', ['styles', 'js', 'html'], () => {
		gulp.watch(watchFiles, ['default'])
	});

	watcher.on('change', (event) =>  {
		console.log('file ' + 
			event.path + 
			' was ' + 
			event.type + 
			' at ' +
			new Date() +
			', running tasks...');
	});

	gulp.task('styles', () => {
		return gulp.src('./app/**/*.scss')
			.pipe(sass())
			.pipe(concat('styles.css'))
			.pipe(gulp.dest('./public/styles'))
	});

	gulp.task('js', () => {
		return gulp.src(['./app/**/*.js'])
			.pipe(ngAnnotate())
			.pipe(concat('scripts.js'))
			.pipe(gulp.dest('./public/scripts'))
	});

	gulp.task('html', () => {
		gulp.src('./app/**/*.html')
			.pipe(gulp.dest('./public/html'))
	});
})();
