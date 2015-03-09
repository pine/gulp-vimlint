'use strict';

/*jshint node: true */
/*jshint expr: true */
/*globals describe, it */

var chai = require('chai');
var expect = chai.expect;


describe('Test for index.js', function () {
  it('should require lib/vimlint.js', function () {
    expect(require('../')).to.equal(require('../lib/vimlint'));
  });
});