gulp = require('gulp')
mocha = require('gulp-mocha')

gulp.task 'test', ->
  gulp.src 'test/**/*-test.js'
    .pipe mocha
      reporter: 'spec'
      timeout: 10 * 1000

