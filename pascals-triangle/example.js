'use strict';

/*
          1
        1   1
      1   2   1
    1   3   3   1
  1   4   6   4   1
1   5  10  10   5   1
*/

function pascal(n) {
  let tri = [];

  function addRow(i) {
    let row = i - 1;

    if (i === 1) {
      tri[row] = [1];
    } else {
      addRow(i - 1);
      tri[row] = [];
      for (let j = 0; j < i; j++) {
        tri[row][j] = addTwo(row - 1, j - 1);
      }
    }
  }

  function addTwo(row, start) {
    let one = tri[row][start] || 0;
    let two = tri[row][start+1] || 0;
    return one + two;
  }

  addRow(n);
  return tri;
}

console.log(
  pascal(10)
);
