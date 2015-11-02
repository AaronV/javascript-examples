(function() {
'use strict';

let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
];


/* Should turn into something like this:
{
  animals: {
    mammals: {
      dogs: {
        'chihuahua': null
        'labrador': null
      },
      cats: {
        'persian': null
        'siamese': null
      }
    }
  }
}
*/

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id));
  return node;
};

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2
  )
);

}());
