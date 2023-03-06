const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cssimport = require('gulp-cssimport');
const webpack = require('webpack-stream');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const glob = require('glob');

// Define the paths for the project
const paths = {
  src: {
    fonts: 'src/fonts/**/*',
    images: 'src/images/**/*',
    scss: 'src/scss/**/*.scss',
    js: {
      app: ['src/js/**/*.js', '!src/js/custom/**/*.js'],
      custom: './src/js/custom/**/*.js',
    },
    html: 'src/**/*.html',
  },
  dist: {
    fonts: 'dist/fonts/',
    images: 'dist/images/',
    css: 'dist/css/',
    js: {
      app: 'dist/js/',
      custom: 'dist/js/custom/',
    },
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
  return gulp
    .src([paths.src.images, 'node_modules/flag-icons/flags/**/*'])
    .pipe(
      gulp.dest((opt) => {
        return opt.base.includes('flags') ? paths.dist.images + 'flags' : paths.dist.images;
      })
    )
    .pipe(browserSync.stream());
});

// Copy fonts to dist folder
gulp.task('fonts', function () {
  return gulp
    .src([paths.src.fonts, 'node_modules/@tabler/icons-webfont/fonts/**/*', 'node_modules/boxicons/fonts/**/*'])
    .pipe(gulp.dest(paths.dist.fonts))
    .pipe(browserSync.stream());
});

// Compile SASS for development
gulp.task('scss', function () {
  return gulp
    .src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', sass.logError)
    )
    .pipe(
      cssimport({
        includePaths: ['node_modules'],
      })
    )
    .pipe(postcss())
    .pipe(minifyCSS({ level: 0 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
});

// Compile SASS for production
gulp.task('scss:prod', function () {
  return gulp
    .src(paths.src.scss)
    .pipe(
      sass({
        includePaths: ['node_modules'],
      })
    )
    .pipe(
      cssimport({
        includePaths: ['node_modules'],
      })
    )
    .pipe(postcss())
    .pipe(minifyCSS({ level: 0 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css));
});

// Compile App JS for development
gulp.task('js', function () {
  return gulp
    .src(paths.src.js.app)
    .pipe(sourcemaps.init())
    .pipe(
      webpack({
        ...webpackConfig,
        mode: 'development',
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.js.app))
    .pipe(browserSync.stream());
});

// Compile App JS for production
gulp.task('js:prod', function () {
  return gulp.src(paths.src.js.app).pipe(webpack(webpackConfig)).pipe(uglify()).pipe(gulp.dest(paths.dist.js.app));
});

// Compile Custom JS for development
gulp.task('js:custom', function () {
  return gulp
    .src(paths.src.js.custom)
    .pipe(sourcemaps.init())
    .pipe(
      webpack({
        ...webpackConfig,
        mode: 'development',
        entry: glob.sync(paths.src.js.custom).reduce((acc, path) => {
          const name = path.split('/').pop().split('.').shift();
          acc[name] = path;
          return acc;
        }, {}),
        output: {
          filename: '[name].js',
        },
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.js.custom))
    .pipe(browserSync.stream());
});

// Compile Custom JS for production
gulp.task('js:custom:prod', function () {
  return gulp
    .src(paths.src.js.custom)
    .pipe(
      webpack({
        ...webpackConfig,
        entry: glob.sync(paths.src.js.custom).reduce((acc, path) => {
          const name = path.split('/').pop().split('.').shift();
          acc[name] = path;
          return acc;
        }, {}),
        output: {
          filename: '[name].js',
        },
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js.custom));
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
  gulp.watch(paths.src.js.app, gulp.series('js'));
  gulp.watch(paths.src.js.custom, gulp.series('js:custom'));
  gulp.watch(paths.src.html, gulp.series('html', 'scss'));

  gulp.watch('src/**/*').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('fonts', 'images', 'scss', 'js', 'js:custom', 'html', 'watch'));

// Build task
gulp.task('build', gulp.series('fonts', 'images', 'scss:prod', 'js:prod', 'js:custom:prod', 'html'));
