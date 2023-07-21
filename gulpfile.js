const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require ('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');


function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJavascript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
}

function watchGulp () {
    gulp.watch ('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch ('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
    gulp.watch ('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
}


exports.default = watchGulp;

// funções abaixo criadas só para teste antes de colocar na default e em watch.
exports.sass = compilaSass; 
exports.javascript = comprimeJavascript;
exports.imagemin = comprimeImagem;