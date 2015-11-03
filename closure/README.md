### Global

```
var names = ['zero', 'one', 'two', 'three'];

var digitName = function(n) {
  return names[n];
}

console.log(digitName(3));  // 'three'
```

### Slow

```
var digitName = function(n) {
  var names = ['zero', 'one', 'two', 'three'];

  return names[n];
}

console.log(digitName(3));  // 'three'
```

### Closure

```
var digitName = (function() {
  var names = ['zero', 'one', 'two', 'three'];

  return function(n) {
    return names[n];
  };
}());

console.log(digitName(3));  // 'three'
```
