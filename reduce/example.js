'use strict';

// Simple example

function sum() {
  var args = Array.prototype.slice.apply(arguments);

  function add(a, b) {
    return a + b;
  }

  return args.reduce(add);
}

console.log(
  sum(1, 2, 3, 4)
);

// More complex

var data = [
  ["aaron", "oldsmobile", "blue"],
  ["aaron", "mazda", "silver"],
  ["andrea", "subaru", "silver"],
  ["mike", "toyota", "black"]
];

function formatData(data) {
  return data.reduce((data, line) => {
    data[line[0]] = data[line[0]] || [];
    data[line[0]].push({
      make: line[1],
      color: line[2]
    });
    return data;
  }, {});
}

console.log(
  JSON.stringify(formatData(data), null, 2)
);
