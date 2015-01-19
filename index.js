/**
 * Module Dependencies
 */

var oldWrite = process.stdout.write;

/**
 * Export `stdout`
 */

module.exports = stdout;

/**
 * Monkey-patch `stdout`
 */

function stdout() {
  var ret = '';

  process.stdout.write = (function(write){
    return function(str, enc, fd) {
      ret += str;
    };
  })(oldWrite);

  return function restore() {
    process.stdout.write = oldWrite;
    return ret;
  }
}
