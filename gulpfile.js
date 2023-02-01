const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cssimport = require('gulp-cssimport');
const webpack = require('webpack-stream');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

// Define the paths for the project
const paths = {
  src: {
    fonts: 'src/fonts/**/*',
    images: 'src/images/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    html: 'src/**/*.html',
  },
  dist: {
    fonts: 'dist/fonts/',
    images: 'dist/images/',
    css: 'dist/css/',
    js: 'dist/js/',
    html: 'dist/',
  },
};

const webpackConfig = {
  mode: 'production',
  output: {
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

// Copy images to dist folder
gulp.task('images', function () {
  return gulp.src(paths.src.images).pipe(gulp.dest(paths.dist.images)).pipe(browserSync.stream());
});

// Copy fonts to dist folder
gulp.task('fonts', function () {
  return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.dist.fonts)).pipe(browserSync.stream());
});

// Compile SASS for development
gulp.task('scss', function () {
  return gulp
    .src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      cssimport({
        includePaths: ['node_modules'],
      })
    )
    .pipe(postcss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
});

// Compile SASS for production
gulp.task('scss:prod', function () {
  return gulp
    .src(paths.src.scss)
    .pipe(sass())
    .pipe(
      cssimport({
        includePaths: ['node_modules'],
      })
    )
    .pipe(postcss())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
});

// Compile JS for development
gulp.task('js', function () {
  return gulp
    .src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(
      webpack({
        ...webpackConfig,
        mode: 'development',
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
});

// Compile JS for production
gulp.task('js:prod', function () {
  return gulp
    .src(paths.src.js)
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
});

// Copy HTML files to dist folder
gulp.task('html', function () {
  return gulp.src(paths.src.html).pipe(gulp.dest(paths.dist.html)).pipe(browserSync.stream());
});

// Watch for changes and reload the browser
gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    open: false,
    notify: false,
  });

  gulp.watch(paths.src.fonts, gulp.series('fonts'));
  gulp.watch(paths.src.images, gulp.series('images'));
  gulp.watch(paths.src.scss, gulp.series('scss'));
  gulp.watch(paths.src.js, gulp.series('js'));
  gulp.watch(paths.src.html, gulp.series('html', 'scss'));

  gulp.watch('src/**/*').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('fonts', 'images', 'scss', 'js', 'html', 'watch'));

// Build task
gulp.task('build', gulp.series('fonts', 'images', 'scss:prod', 'js:prod', 'html'));
