var gulp=require('gulp');
var sourcemaps=require('gulp-sourcemaps');

gulp.task('zadanie',function(){
	console.log('Robię zadanie');
});

var sass = require('gulp-sass');

gulp.task('sass', function() {
return gulp.src('scss/*.scss')

	.pipe(sourcemaps.init())
	.pipe(sass({errLogToConsole: true}))
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
})