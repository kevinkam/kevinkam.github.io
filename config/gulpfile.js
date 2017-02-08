var gulp = require('gulp');
var rollup = require('rollup').rollup;
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');
var babel = require('rollup-plugin-babel');
var replace = require('rollup-plugin-replace');
var uglify = require('rollup-plugin-uglify');
var minify = require('uglify-js').minify;
var concat = require('gulp-concat');
var uglifyJS = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var googleWebFonts = require('gulp-google-webfonts');

gulp.task('util', () => {
  return gulp.src(['../public/js/util/jquery-1.12.4.min.js', '../public/semantic/essential/semantic.js'])
    .pipe(concat('util.js'))
    .pipe(uglifyJS())
    .pipe(gulp.dest('../dist/js/'));
});
gulp.task('fonts', () => {
  return gulp.src(['../dist/css/fonts.list'])
    .pipe(googleWebFonts({}))
    .pipe(gulp.dest('../dist/css/fonts'));
});
gulp.task('stylesheets', () => {
  return gulp.src(['../public/css/semantic.css', '../public/css/resume.css'])
    .pipe(concat('stylesheet.css'))
    .pipe(cleanCSS({
      rebase: false,
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('../dist/css/'));
})
gulp.task('script', function () {
  return rollup({
    entry: '../public/js/App.js',
    plugins: [
      nodeResolve({ jsnext: true }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          'react',
          ['es2015',{
            "modules": false
          }]
        ],
        plugins: [
          "external-helpers"
        ]
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      }),
      uglify({}, minify)
    ]
  }).then(function (bundle) {
    return bundle.write({
      format: 'iife',
      dest: '../dist/js/bundle.js'
    });
  });
});

gulp.task('watch', () => {
  gulp.watch(['../public/js/App.js', '../public/js/components/*.js'], ['script']);
  gulp.watch(['../public/css/semantic.css', '../public/css/resume.css'], ['stylesheets']);
})
