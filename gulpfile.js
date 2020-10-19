import GulpClient from "gulp";
import { Gulp } from "gulp";
import browserSync, { BrowserSyncInstance } from "browser-sync";
const gulpSass = require('gulp-sass');

GulpClient.task('gulpSass', () => {
    return GulpClient.src([
            'node_modules/bootstrap/scss/bootstap.scss',
            'src/scss/*.scss'
        ])
        .pipe(gulpSass({ outputStyle: 'compressed' }))
        .pipe(GulpClient.dest(src / css))
        .pipe(browserSync())
});