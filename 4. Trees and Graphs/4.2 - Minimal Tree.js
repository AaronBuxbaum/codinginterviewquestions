/*
  Given a sorted (increasing order) array with unique integer elements,
  write an algorithm to create a binary search tree with minimal height.
 */

class Node {
  constructor(value) {
    this.value = value;
  }
}

export const buildMinimalHeightBST = (arr, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return;
  }

  const range = end + start;
  const middleIndex = Math.floor(range / 2);
  const value = arr[middleIndex];
  const root = new Node(value);
  root.children = [
    buildMinimalHeightBST(arr, start, middleIndex - 1),
    buildMinimalHeightBST(arr, middleIndex + 1, end)
  ];
  return root;
};

// Time complexity is O(N) -- we have to look at each node once
// Space complexity is O(N), to build the tree itself.
// We could also include the space complexity of the recursive stacks, theoretically
