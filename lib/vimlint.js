'use strict';

/*jshint node: true */
/*jshint -W040: true */

var through = require('through2');
var gutil = require('gulp-util');
var vimlint = require('vimlint');

var PLUGIN_NAME = 'gulp-vimlint';

function transform(file, enc, cb) {
  var self = this;
  
  this.push(file);
  
  if (!file.isNull()) {
    vimlint(file.path, function (err, stdout, stderr) {
      if (err) {
            self.emit(
              'error',
              new gutil.PluginError(PLUGIN_NAME, stdout || stderr));
      }
      
      cb();
    });
    return;
  }
  
  cb(); // if null
}

module.exports = function () {
  return through.obj(transform);
};