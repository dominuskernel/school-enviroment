var gulp            = require('gulp'),
    // this is an arbitrary object that loads all gulp plugins in package.json.
    $           = require("gulp-load-plugins")(),
    path        = require('path'),
    browserSync = require('browser-sync'),
    merge       = require('merge-stream'),
    reload      = browserSync.reload,
    tinylr      = require('tiny-lr'),
    sass        = require('gulp-sass');
    server      = tinylr();

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./views"
    }
  });
});

gulp.task('coffee', function() {
    return gulp.src('src/scripts/*.coffee')
        .pipe($.plumber())
        .pipe($.coffee({bare: true}).on('error', $.util.log))
        .pipe(gulp.dest('views/scripts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
});

gulp.task('compass', function() {
  return gulp.src('./src/stylesheets/*.scss')
    .pipe($.plumber())
    .pipe(browserSync.reload({stream: true}))
    .pipe($.compass({
      css: 'views/stylesheets',
      sass: 'src/stylesheets'
    }))
    .pipe(gulp.dest('views/stylesheets'))
    .pipe($.livereload( server ));;
});

gulp.task('components', function(){
    return gulp.src('bower_components/**/*.*')
        .pipe($.plumber())
        .pipe(gulp.dest('views/bower_componets'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.livereload( server ));
});

gulp.task('demo', function() {
  var jadeDemo = gulp.src('demo/index.jade')
      .pipe($.plumber())
      .pipe($.jade({
          pretty: true
      }))
      .pipe(gulp.dest('views'))
      .pipe(browserSync.reload({stream: true}))
      .pipe( $.livereload( server ) );
  var scssDemo = gulp.src('demo/main.scss')
      .pipe($.plumber())
      .pipe($.compass({
          css: 'views',
          sass: 'demo'
      }))
      .pipe(gulp.dest('views'))
      .pipe(browserSync.reload({stream: true}))
      .pipe($.livereload( server ));
  var coffeeDemo = gulp.src('demo/app.coffee')
      .pipe($.plumber())
      .pipe($.coffee({bare: true}).on('error', $.util.log))
      .pipe(gulp.dest('views'))
      .pipe(browserSync.reload({stream: true}))
      .pipe($.livereload( server ));

    return merge(jadeDemo, scssDemo, coffeeDemo)
});

gulp.task('jade', function () {
  return gulp.src('src/jade/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    })).pipe( gulp.dest('views/templates'))
    .pipe(browserSync.reload({stream: true}))
    .pipe( $.livereload( server ) );
});

gulp.task('build', ['coffee', 'compass', 'components', 'demo', 'jade']);

gulp.task('serve', ['build', 'browser-sync'], function () {
  gulp.watch('src/scripts/*.coffee',['coffee', reload]);
  gulp.watch('src/stylesheets/*.scss',['compass', reload]);
  gulp.watch('src/bower_components/**/*.*',['components', reload]);
  gulp.watch('demo/**/*.*'['demo', reload]);
  gulp.watch('src/jade/*.jade', ['views', reload]);
});

gulp.task('default', ['serve']);
