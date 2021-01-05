const { series,src,dest } = require('gulp');
var lessc = require('gulp-less');
var path = require('path');

var css = require('gulp-mini-css');

 
function less (cb) {
  return src('./src/*.less')
    .pipe(lessc())
    .pipe(dest('./dist/css/'));

    
};
function copyHtml() {
  return src('src/index.html').pipe(
      dest('dist')
  )
}

function clean(cb) {
    // body omitted
    // del(['output/*.js'], cb);
}

function build(cb) {
    // body omitted
    console.log('build');
    
    cb();
}
exports.style = function(cb){
    return src('./src/*.less')
    .pipe(lessc())
    .pipe(css({ext:'-min.css'}))
    .pipe(dest('./dist/css/'));
} 

// exports.build = build;
// exports.default = series(less,copyHtml);
exports.default = series(clean,build,serve,watchFile);


