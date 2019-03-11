/*
  Implement a function to check if a binary tree is a binary search tree.
 */

// We can do an in-order traversal and then see if the array is sorted
// but that won't work for duplicates (since one will be incorrect)
// Instead, we can just check the previously seen node against the new node
// Even better, we can just traverse through the tree and check each node against the constraints of the previous node

// alternatively, we could use a sliding window of requirements (ie. if you recurse to the left, you know that every node under it should be less than its own value; vice versa for the right child)

export const validateBST = (tree, min, max) => {
  if (!tree) {
    return true;
  }

  const [left, right] = tree.children;
  const { value } = tree;

  if ((min && value <= min) || (max && value > max)) {
    return false;
  }

  return validateBST(left, min, value) && validateBST(right, value, max);
};

// time complexity: O(N), where N is the number of nodes in the tree. This is the best we can do since we need to look at each node.
// space complexity: O(N) worst case, O(log N) on a balanced tree. Each recursive call stack is added to the space.
