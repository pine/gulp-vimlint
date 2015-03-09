'use strict';

/*jshint node: true */
/*jshint expr: true */
/*globals describe, it */

var path = require('path');
var fs = require('fs');
var gutil = require('gulp-util');
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

var vimlint = require('../lib/vimlint');


function getTestFile(file) {
  return new gutil.File({
    path: path.join(__dirname, file),
    cwd: process.cwd,
    base: __dirname,
    contents: fs.readFileSync(path.join(__dirname, file))
  });
}


describe('Test for lib/vimlint.js', function () {
  it('should pass lint', function (done) {
    var file = getTestFile('succeeded.vim');
    var stream = vimlint(file);
    var on_data = sinon.spy(console.log);
    var on_error = sinon.spy(console.error);
    
    stream
      .on('data', on_data)
      .on('error', on_error)
      .once('end', function () {
        expect(on_data).to.have.been.calledOnce;
        expect(on_error).to.not.have.been.called;
        done();
      });
    
    stream.write(file);
    stream.end();
  });
  
  it('should fail lint', function (done) {
    var file = getTestFile('failed.vim');
    var stream = vimlint(file);
    var on_data = sinon.spy(console.log);
    var on_error = sinon.spy(console.error);
    
    stream
      .on('data', on_data)
      .on('error', on_error)
      .once('end', function () {
        expect(on_data).to.have.been.calledOnce;
        expect(on_error).to.have.been.calledOnce;
        done();
      });
      
    stream.write(file);
    stream.end();
  });
});