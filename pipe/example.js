function firstName(name) {
  console.log("firstName: " + name);
  return name.split(" ")[1];
}

function firstLetter(string) {
  return string[0];
}

function pipe() {
  console.log(arguments.length);
  console.log(arguments[0]);

  return function(a0) {
    return null;
  };
}

var firstInitial = pipe(firstName);

var name = "Mr. Aaron Vanderpoel";
console.log("firstInitial: " + firstInitial(name));
