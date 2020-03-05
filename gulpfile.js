const gulp = require('gulp');
const sass = require('gulp');

const connect = require('gulp-connect');


gulp.task("server", done => {
    //搭建本地的服务器，让dist里的页面在这个服务器运行
    connect.server({
      root: "dist",
      livereload: true
    });
    done();
  });
  
