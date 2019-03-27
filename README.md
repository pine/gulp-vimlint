gulp-vimlint
------------

[![npm version](https://img.shields.io/npm/v/gulp-vimlint.svg?style=flat-square)](https://www.npmjs.com/package/gulp-vimlint)
[![Build Status](https://img.shields.io/travis/pine/gulp-vimlint/master.svg?style=flat-square)](https://travis-ci.org/pine613/gulp-vimlint)
[![Code Climate](https://img.shields.io/codeclimate/github/pine/gulp-vimlint.svg?style=flat-square)](https://codeclimate.com/github/pine613/gulp-vimlint)
[![Coverage Status](https://img.shields.io/coveralls/pine613/gulp-vimlint/master.svg?style=flat-square)](https://coveralls.io/r/pine613/gulp-vimlint?branch=master)
[![Dependency Status](https://img.shields.io/david/pine/gulp-vimlint.svg?style=flat-square)](https://david-dm.org/pine613/gulp-vimlint)
[![devDependency Status](https://img.shields.io/david/dev/pine/gulp-vimlint.svg?style=flat-square)](https://david-dm.org/pine613/gulp-vimlint#info=devDependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/pine/gulp-vimlint.svg)](https://greenkeeper.io/)


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

 -  [node-vimlint](https://github.com/pine/node-vimlint)
 -  [grunt-vimlint](https://github.com/pine/grunt-vimlint)
 -  [fly-vimlint](https://github.com/pine/fly-vimlint)

## License
MIT License
