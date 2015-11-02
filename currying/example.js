function curry(fn) {
  console.log("Total arguments: " + fn.length);

  function curried() {
    if (arguments.length < fn.length) {

    } else {
      return fn.apply(this, arguments);
    }
  };

  return curried;
}

// var curriedProblem = curry(problem);

// log(problem("Figure Four", "red", "V6"));
console.log(curry(function(grade) { return grade; })("V5"));
console.log("----------------------------");
console.log(curry(function(grade, name) { return grade + " named " + name; })("V5")("Saxaphone"));
console.log("----------------------------");
console.log(curry(function(grade, name, color) { return grade + " named " + name + " that is " + color; })("V5")("Saxaphone")("red"));
