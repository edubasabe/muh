var gulp            =  require('gulp');
var sass            =  require('gulp-sass');
var uglify          =  require('gulp-uglify');
var gulpIf          =  require('gulp-if');
var autoprefixer    =  require('gulp-autoprefixer');
var browserSync     =  require('browser-sync');
var useref          =  require('gulp-useref');
var imagemin        =  require('gulp-imagemin');
var cache           =  require('gulp-cache');
var del             =  require('del');
var runSequence     =  require('run-sequence');
var cssnano         =  require('gulp-cssnano');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

//-- BrowserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

//-- Sass
gulp.task('sass', function() {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({ stream:true }));
});


//-- Watch
gulp.task('watch', ['browserSync','sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/*.php', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

//-- Useref
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

//-- Images
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'));
});

//-- Fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*.+(ttf|eot|otf|svg|woff|woff2)')
  .pipe(gulp.dest('dist/fonts'));
});

//-- Clean
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//-- Run Sequence
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  );
});

//-- Default Task
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  );
});
