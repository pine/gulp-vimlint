gulp = require('gulp')
plumber = require('gulp-plumber')
mocha = require('gulp-mocha')
istanbul = require('gulp-istanbul')
jshint = require('gulp-jshint')


gulp.task 'coverage', (cb) ->
  mochaErr = null
  
  gulp.src ['index.js', 'lib/**/*.js']
    .pipe istanbul( includeUntested: true )
    .pipe istanbul.hookRequire()
    .on 'finish', ->
      gulp.src 'test/**/*-test.js'
        .pipe plumber()
        .pipe mocha
          reporter: 'spec'
          timeout: 10 * 1000
        .on 'error', (err) ->
          mochaErr = err
        .pipe istanbul.writeReports()
        .on 'end', ->
          console.log 'end'
          cb(mochaErr)
  
gulp.task 'jshint', ->
  gulp.src ['*.js', 'lib/**/*.js', 'test/**/*.js']
    .pipe jshint()
    .pipe jshint.reporter('default')


gulp.task 'test', ['coverage', 'jshint']
gulp.task 'default', ['test']
