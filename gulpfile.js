const gulp      = require('gulp');
const MinifyJS  = require('gulp-terser');
const rename    = require('gulp-rename');
const { watch } = require('gulp');

function build() {
    return gulp.src('src/js/raid-calculator.js')
        .pipe(MinifyJS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/js/'));
}
function dev() {
    return gulp.src('src/js/raid-calculator.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/js/'));
}


exports.build = build;
exports.dev   = dev;
exports.watch = function() {
    watch('src/js/raid-calculator.js', dev);
};