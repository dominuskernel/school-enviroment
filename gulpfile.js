var gulp            = require('gulp'),
// this is an arbitrary object that loads all gulp plugins in package.json.
    $           = require("gulp-load-plugins")(),
    browserSync = require('browser-sync'),
    coffeelint  = require("gulp-coffeelint"),
    del         = require("del"),
    merge       = require('merge-stream'),
    path        = require('path'),
    reload      = browserSync.reload,
    runSequence = require('run-sequence'),
    tinylr      = require('tiny-lr'),
    sass        = require('gulp-sass'),
    server      = tinylr();

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('coffee', function() {
    return gulp.src('src/scripts/*.coffee')
        .pipe($.plumber())
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
        .pipe($.coffee({bare: true}).on('error', $.util.log))
        .pipe(gulp.dest('./scripts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
});

gulp.task('scripts', function(){
    return gulp.src('src/scripts/*.js')
        .pipe($.plumber())
        .pipe(gulp.dest('./scripts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
});

gulp.task('compass', function() {
    var stylesFile = gulp.src('./src/stylesheets/*.scss')
        .pipe($.plumber())
        .pipe(browserSync.reload({stream: true}))
        .pipe($.compass({
            css: './stylesheets',
            sass: 'src/stylesheets'
        }))
        .pipe(gulp.dest('./stylesheets'))
        .pipe($.livereload( server ));
    var mainFile = gulp.src('./src/main.scss')
        .pipe($.plumber())
        .pipe(browserSync.reload({stream: true}))
        .pipe($.compass({
            css: './',
            sass: 'src/'
        }))
        .pipe(gulp.dest('./'))
        .pipe($.livereload( server ));
    return merge(stylesFile,mainFile);
});

gulp.task('css', function(){
    return gulp.src('src/stylesheets/*.css')
        .pipe($.plumber())
        .pipe(gulp.dest('./stylesheets'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
});

gulp.task('html', function(){
    var mainPage = gulp.src('src/index.html')
        .pipe($.plumber())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
    var webPages = gulp.src('src/views/*.html')
        .pipe($.plumber())
        .pipe(gulp.dest('./views'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
    return merge(mainPage, webPages);
});

gulp.task('jade', function () {
    return gulp.src('src/jade/*.jade')
        .pipe($.plumber())
        .pipe($.jade({
            pretty: true
        })).pipe( gulp.dest('templates/'))
        .pipe(browserSync.reload({stream: true}))
        .pipe( $.livereload( server ) );
});

gulp.task('build', ['coffee', 'scripts', 'compass', 'css', 'html' ,'jade']);

gulp.task('server', function (callback) {
    runSequence('build','browser-sync');
    gulp.watch('src/scripts/*.coffee',['coffee', reload]);
    gulp.watch('src/scripts/*.js',['scripts', reload]);
    gulp.watch('src/main.scss',['compass',reload]);
    gulp.watch('src/stylesheets/*.scss',['compass', reload]);
    gulp.watch('src/stylesheets/*.css',['css', reload]);
    gulp.watch('src/index.html',['html', reload]);
    gulp.watch('src/views/*.html', ['html', reload]);
    gulp.watch('src/jade/*.jade', ['jade', reload]);
});

gulp.task('default', ['server']);