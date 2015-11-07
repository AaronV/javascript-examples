'use strict';

function fib(n) {
  if (n <= 0) return;

  var numbs = [];

  function add(i) {
    if (i === 1) {
      numbs.push(1);
    } else if (i === 2) {
      numbs.push(1, 1);
    } else {
      add(i - 1);
      numbs.push(numbs[numbs.length - 1] + numbs[numbs.length - 2]);
    }
  }

  add(n);
  return numbs;
}

console.log(fib(30));
