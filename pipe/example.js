// WIP

/*
pipe(func1, func2, ...) returns a function that takes any number of arguments
and runs them throught he first function. Then takes the response of that
function, and runs it through each subsequent function in turn.
*/

function makeArray(args) {
  return Array.prototype.slice.apply(args);
}

function firstName(name) {
  console.log("firstName: " + name);
  return name.split(" ")[1];
}

function firstLetter(string) {
  return string[0];
}

function add3(string) {
  return string + " three";
}

function pipe() {
  var funcs = makeArray(arguments),
      that = this;

  var getOutput = function(func, args) {
    return func.apply(that, args);
  };

  return function() {
    var args = makeArray(arguments),
        output = args;

    funcs.forEach(function(func) {
      output = func.apply(that, Array.prototype.concat.apply(output));
    });

    return output;
  };
}

var firstInitial = pipe(firstName, firstLetter, add3);

var name = "Mr. Aaron Vanderpoel";
console.log(
  "firstInitial: " + firstInitial(name)
);
