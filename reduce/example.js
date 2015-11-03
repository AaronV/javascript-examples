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
