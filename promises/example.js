'use strict';

function makePromise() {

  function resolve() {
    console.log(this);
  }

  return {
    then: function(func) {

    },
    resolve: function() {
      resolve();
    }
  }
}

var p = makePromise();

p.then(function() {
  console.log('promise resolved');
});

p.resolve();
