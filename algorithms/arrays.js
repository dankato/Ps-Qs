//--Remove Dupes----------------------------
// Q: how would you remove dupes from an array?
// A: use a while loop and keep an object associated array. if i find an element for the 1st time, set its value to true. If an element in the exist object, it will not be added.

function removeDupes(array) {
  let doesExist = {},
    outArray = [],
    element;

  for (let i = 0; i < array.length; i++) {
    element = array[i];
    if (!doesExist[element]) {
      outArray.push(element);
      doesExist[element] = true;
    }
  }
  return outArray;
}

removeDupes([1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//--Merge 2 sorted Array----------------------------
// Q: how would you merge two sorted array?
// A: Keep a pointer for each array, and merge the array into a new one.

function mergeSortedArray() {}
