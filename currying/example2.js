'use strict';

function makeArray(args) {
  return Array.prototype.slice.apply(args);
}

// curry takes a function, and a list of n-arguments
// It runs the function passed in, with both the arguments
// used when the function was curried, and any additional
// arguments

function curry(func) {
  var args = makeArray(arguments).slice(1);

  return function() {
    return func.apply(null, args.concat(makeArray(arguments)));
  };
}

var inc = curry(function(a, b) {
  return a + b;
}, 1);

console.log(inc(6));
