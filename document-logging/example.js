var log = (function() {
  var line = 0;
  return function(string) {
    document.write(line++ + ": " + string + "<br/>");
    console.log(string);
  }
}());

log("Hi, Mom!"); // Writes "Hi, Mom!" to the document and console
