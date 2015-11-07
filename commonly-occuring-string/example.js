'use strict';

// Define a function that takes an array of strings,
// and returns the most commonly occurring string
// that array

let stringArray = [
  'one',
  'two',
  'three',
  'four',
  'one',
  'two',
  'one',
  'three',
  'three',
  'three'
];

function mostCommonString(stringArray) {
  let stringHash = stringArray.reduce((stringHash, string) => {
    if (typeof stringHash[string] === 'undefined') {
      stringHash[string] = 1;
    } else {
      stringHash[string] += 1;
    }
    return stringHash;
  }, {});

  var array = [];

  Object.keys(stringHash).forEach((key) => {
    array.push([stringHash[key], key]);
  });

  return array.sort().reverse()[0][1];
}

console.log(
  mostCommonString(stringArray)
);
