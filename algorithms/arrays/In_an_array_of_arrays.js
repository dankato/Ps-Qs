// Q: In an array of arrays,
// e.g. given [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []],
// print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
// Implement an iterator that supports hasNext(), next() and remove() methods.

// first flatten the array
var arrays = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []];
var merged = [].concat.apply([], arrays);
merged;
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .remove() method returns a Promise after removing any session data associated with the current object.
// next()
function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    }
  };
}

var it = makeIterator([
  [],
  [1, 2, 3],
  [4, 5],
  [],
  [],
  [6, 7],
  [8],
  [9, 10],
  [],
  []
]);
console.log(it.next().value); // '[]'
console.log(it.next().value); // '[1,2,3]'
console.log(it.next().done); // false   note: true will happen after next() is complete
