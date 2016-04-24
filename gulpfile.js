var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    ngAnnotate = require('gulp-ng-annotate'),
    watcher = gulp.watch(['./main/**/*.js', './main/**/*.scss', './main/**/*.html'], ['default']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('styles', function() {
  return gulp.src('./main/**/*.scss')
    .pipe(sass())
    // .pipe(uglifycss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/styles'))
});

gulp.task('javascript', function() {
  gulp.src(['./main/**/*.js', '!./main/jquery.js'])
    .pipe(ngAnnotate())
    // .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/scripts'))
});

gulp.task('html', function() {
  gulp.src('./main/**/*.html')
    .pipe(gulp.dest('./public/html/'))
});

gulp.task('default', ['styles', 'javascript', 'html']);
