(function() {
  'use strict';

  let input = [1,2,[3,[4,5]],6];

  function flatten(input, depth) {
    depth = depth || 0;
    let result = [];

    input.forEach(_flatten, 1);

    function _flatten(input, currentDepth) {
      if (isArray(input) && currentDepth > depth) {
        input.forEach(_flatten, currentDepth + 1);
      } else {
        result.push(input);
      }
    }

    return result;
  }

  function isArray(obj) {
    return typeof obj === 'object' && obj.length;
  }

  console.log('input:', input);
  console.log('depth=0:', flatten(input));
  console.log('depth=1:', flatten(input, 1));
  console.log('depth=2:', flatten(input, 2));
}());
