// WIP

'use strict';

function makePromise() {

  let waiting = [],
      status = 'unresolved';

  function vouch(func) {
    if (status === 'unresolved') {
      waiting.push(func);
    } else {
      func();
    }
  }
  function resolve() {
    status = 'resolved';
    waiting.forEach((func) => {
      try {
        func();
      } catch(e) {}
    });
  }

  return {
    then: function(func) {
      vouch(func);
    },
    resolve: function() {
      resolve();
    }
  };
}

var p = makePromise();

p.then(function() {
  console.log('promise resolved');
});

p.resolve();
