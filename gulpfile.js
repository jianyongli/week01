var gulp = require('gulp');
var scss = require('gulp-sass');
var minCss = require('gulp-clean-css');
var minHtml = require('gulp-htmlmin');
var minJs = require('gulp-uglify');
var server = require('gulp-webserver');
var sequence = require('gulp-sequence');
var data = require('./src/data/data.json')

gulp.task('copycss', function() {
    return gulp.src('src/css/common.css')
        .pipe(gulp.dest('dist/css'))
});
gulp.task('copyicon', function() {
    return gulp.src('src/icon/iconfont.css')
        .pipe(gulp.dest('dist/icon'))
});
gulp.task('copyimg', function() {
    return gulp.src('src/img/*.jpg')
        .pipe(gulp.dest('dist/img'))
});
//压缩css
gulp.task('minCss', function() {
    return gulp.src('src/css/*.scss')
        .pipe(scss())
        .pipe(minCss())
        .pipe(gulp.dest('dist/css'))
});

//压缩js
gulp.task('minJs', function() {
        return gulp.src('src/js/*.js')

        .pipe(minJs())
            .pipe(gulp.dest('dist/js'))
    })
    //压缩html
var options = { removeComments: true, collapseWhitespace: true, collapseBooleanAttributes: true, removeEmptyAttributes: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, minifyJS: true, minifyCSS: true };
gulp.task('minHtml', function() {
        return gulp.src('src/index.html')
            .pipe(minHtml(options))
            .pipe(gulp.dest('dist'))
    })
    //服务
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8888,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (/\list/g.test(req.url)) {
                    res.end(JSON.stringify(data))
                }
                next();
            }
        }))
})

gulp.task('watch', function() {
    gulp.watch('src/css/*.scss', ['minCss']);
    gulp.watch('src/js/*.js', ['minJs'])
    gulp.watch('src/index.html', ['minHtml'])
})


gulp.task('default', function(cb) {
    sequence(['copycss', 'minCss', 'minJs', 'minHtml', 'copyicon', 'copyimg'], 'watch', 'server', cb)
})