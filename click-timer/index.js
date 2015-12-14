'use strict';

var timeClicks = function() {
  let clicks = [];
  let output = document.getElementById('output');

  return function() {
    let thisClick = Date.now();

    clicks.push(thisClick);

    if (clicks.length === 2) {
      let dur = clicks[1] - clicks[0];
      output.value = `${dur} ms`;
      clicks = [];
    }
  };
}();
