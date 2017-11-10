// Q: Remove Duplicates
let array = [1, 2, 3, 3, 4, 5, 5, 5, 6, 7];

function removeDupes(array) {
  let exists = {},
    outArray = [],
    element;

  for (let i = 0; i < array.length; i++) {
    element = array[i];
    if (!exists[element]) {
      outArray.push(element);
      exists[element] = true;
    }
  }
  return outArray;
}

removeDupes(array);
// [1, 2, 3, 4, 5, 6, 7]
