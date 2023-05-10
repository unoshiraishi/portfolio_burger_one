import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';

const minImg = () => {
    return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
}

const minCss = () => {
    return gulp.src('src/css/style.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
}

export default gulp.series(minImg, minCss);