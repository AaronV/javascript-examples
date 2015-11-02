// Hoisting splits out variables into two statements.
// It moves the initialization step to the top of the
// block and leaves the assignment where it was.

(function() {

  var varOne = 0,
      varTwo;

  /* Translates to:
    var varOne = undefined;
    var varTwo = undefined;
    varOne = 0;
  */

  console.log(varThree); // undefined
  var varThree = 5;
  console.log(varThree); // 5

  /* Translates to:
    var varThree;
    console.log(varThree);
    varThree = 5;
    console.log(varThree);
  */

}());
