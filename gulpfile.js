const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const rename = require("gulp-rename");

// Sass Task
function compileTask() {
  return src("./src/scss/micro-balli.scss", { sourcemaps: true })
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename("micro-balli.min.css"))
    .pipe(dest("./dist/css"));
}

// Watch Task
function watchTask() {
  watch(["./src/scss/**/*.scss"], series(compileTask));
}

// Default Gulp task
exports.default = series(compileTask, watchTask);
