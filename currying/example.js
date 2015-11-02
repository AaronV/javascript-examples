function makeArray(args) {
  return Array.prototype.slice.apply(args);
}

function curry(fn) {
  console.log("Total arguments: " + fn.length);

  function curried() {
    if (arguments.length < fn.length) {
      var args = makeArray(arguments);
      return function() {
        return curried.apply(this, args.concat(makeArray(arguments)));
      };
    } else {
      return fn.apply(this, arguments);
    }
  }

  return curried;
}

function describeProblem(grade, name, color) {
  return grade +
    " named " +
    name +
    " that is " +
    color;
}

console.log(
  curry(describeProblem)("V5")("Saxaphone Dreams")("Red")
);
