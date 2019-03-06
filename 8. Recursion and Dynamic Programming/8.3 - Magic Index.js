/*
  A magic index in an array A[1. .. n-1] is defined to be an index such that A[i] = i.
  Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
*/

// trivial solution
export const getMagicIndexTrivial = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      return i;
    }
  }

  return -1;
};

// Time: O(n) -- look through each element
// Space: O(1) -- no stored information

export const getMagicIndex = (array, start = 0, end = array.length - 1) => {
  if (start > end) {
    return -1;
  }

  const index = Math.floor((end + start) / 2);
  const value = array[index];

  if (value === index) {
    return index;
  } else if (value > index) {
    return getMagicIndex(array, start, index - 1);
  } else {
    return getMagicIndex(array, index + 1, end);
  }
};

// Time: O(log n) -- effectively the same as binary search
// Space: O(log n) -- recursive stacks of a binary search

// TODO: Follow-up: what if they array does not have the distinct property?
