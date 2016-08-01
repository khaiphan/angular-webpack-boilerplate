import gulp from 'gulp';
import clean from 'gulp-clean';
import watch from 'gulp-watch';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import webpackConfig from './webpack.config.babel.js';

const webpackConfigServe = Object.assign(Object.assign({}, webpackConfig), {
  watch: true,
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
  ],
});

const webpackConfigBuild = Object.assign(Object.assign({}, webpackConfig), {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),
  ],
});

gulp.task('clean', () =>
  gulp
    .src(['./dist', './tmp'], {
      read: false,
    })
    .pipe(clean())
);

gulp.task('compile-serve', () =>
  gulp.src('./server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./tmp/server'))
);

gulp.task('compile-build', () =>
  gulp.src('./server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist/server'))
);

gulp.task('nodemon', ['compile-serve'], () =>
  nodemon({
    script: './tmp/server/app.js',
    watch: 'server',
    tasks: ['compile'],
  })
);

gulp.task('copy', () =>
  gulp.src(['client/app.html'])
    .pipe(gulp.dest('./tmp/client'))
);

gulp.task('copy-build', () =>
  gulp.src(['client/app.html'])
    .pipe(gulp.dest('./dist/client'))
);

gulp.task('watch', () =>
  watch(['client/app.html'])
    .pipe(gulp.dest('./tmp/client'))
);

gulp.task('webpack-serve', () =>
  gulp.src('./client/app.js')
    .pipe(webpackStream(webpackConfigServe))
    .pipe(gulp.dest('./tmp/client'))
);

gulp.task('webpack-build', () =>
  gulp.src('./client/app.js')
    .pipe(webpackStream(webpackConfigBuild))
    .pipe(gulp.dest('./dist/client'))
);

gulp.task('serve', (cb) =>
  runSequence('clean', ['copy', 'webpack-serve', 'watch', 'nodemon'], cb)
);

gulp.task('build', (cb) =>
  runSequence('clean', ['copy-build', 'webpack-build', 'compile-build'], cb)
);
