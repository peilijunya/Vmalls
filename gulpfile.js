const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const sourcemaps = require("gulp-sourcemaps");


gulp.task("server", done => {
    //搭建本地的服务器，让dist里的页面在这个服务器运行
    connect.server({
      root: "dist",
      livereload: true
    });
    done();
  });

  gulp.task('sass',done=>{
    gulp.src('res/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
    done();
})
  gulp.task('html',done=>{
    gulp.src('res/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
    done();
})
gulp.task('img',done=>{
  gulp.src('res/img/*.{png,jpg,JPG}')
  .pipe(gulp.dest('dist/img'))
  .pipe(connect.reload());
  done();
})
gulp.task('js',done=>{
  gulp.src('res/js/*.js')
  .pipe(gulp.dest('dist/js'))
  .pipe(connect.reload());
  done();
})
gulp.task('css',done=>{
  gulp.src('res/css/*.css')
  .pipe(gulp.dest('dist/css'))
  .pipe(connect.reload());
  done();
})
gulp.task('watch',done=>{
    gulp.watch('res/sass/*.scss',gulp.series('sass'));
    gulp.watch('res/css/*.css',gulp.series('css'));
    gulp.watch('res/*.html',gulp.series('html'));
    gulp.watch('res/img/*.{png,,jpg,JPG}',gulp.series('img'));
    gulp.watch('res/js/*.js',gulp.series('js'));
    done();
})
gulp.task('default',gulp.parallel('server','watch'));