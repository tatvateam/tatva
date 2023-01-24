var gulp = require("gulp");

var rigger = require("gulp-rigger");

gulp.task("html", function () {
  return gulp.src("/*.html").pipe(rigger()).pipe(gulp.dest("build/"));
});
