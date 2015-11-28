(function() {
'use strict';

/*
Recursion
A function that calls itself until it doesn't

Outputs
10
9
8
..
2
1
*/

let countDownFrom = (n) => {
  if (n === 0) return;
  console.log(n);
  countDownFrom(n - 1);
};

countDownFrom(10);

}());
