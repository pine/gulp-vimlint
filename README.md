gulp-vimlint
------------

[![npm version](https://badge.fury.io/js/gulp-vimlint.svg)](http://badge.fury.io/js/gulp-vimlint)
[![Build Status](https://travis-ci.org/pine613/gulp-vimlint.svg?branch=master)](https://travis-ci.org/pine613/gulp-vimlint)
[![Code Climate](https://codeclimate.com/github/pine613/gulp-vimlint/badges/gpa.svg)](https://codeclimate.com/github/pine613/gulp-vimlint)
[![Test Coverage](https://codeclimate.com/github/pine613/gulp-vimlint/badges/coverage.svg)](https://codeclimate.com/github/pine613/gulp-vimlint)<br />
[![Dependency Status](https://david-dm.org/pine613/gulp-vimlint.svg)](https://david-dm.org/pine613/gulp-vimlint)
[![devDependency Status](https://david-dm.org/pine613/gulp-vimlint/dev-status.svg)](https://david-dm.org/pine613/gulp-vimlint#info=devDependencies)

Validate `.vimrc`, `.vim` files with [vimlint](https://github.com/syngan/vim-vimlint).

## Getting Started
This plugin requires [gulp](http://gulpjs.com) and Vim.

```sh
$ npm install gulp-vimlint --save-dev
```

## Usage examples

```js
var vimlint = require('gulp-vimlint');

gulp.task('vimlint', function () {
  gulp.src('**/*.vim')
    .pipe(vimlint());
});
```

## Additional Notes
This plugin **doesn't work** on Windows. It works on Linux, Mac OS X, or other *nix OSs.

## Acknowledgement
This plugin uses following software to validate `.vim` files. Thank you.

 - [syngan](https://github.com/syngan) / [vim-vimlint](https://github.com/syngan/vim-vimlint)
 - [ynkdir](https://github.com/ynkdir) / [vim-vimlparser](https://github.com/ynkdir/vim-vimlparser)

## See also

 -  [node-vimlint](https://github.com/pine613/node-vimlint)
 -  [grunt-vimlint](https://github.com/pine613/grunt-vimlint)

## License
MIT License<br />
Copyright (c) 2015 Pine Mizune