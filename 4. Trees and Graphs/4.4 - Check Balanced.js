/*
  Implement a function to check if a binary tree is balanced.
  For the purposes of this question, a balanced tree is defined to be a tree such that
  the heights of the two subtrees of any node never differ by more than one.
 */

const getHeightDiff = tree => {
  if (!tree) {
    return -1;
  }

  const leftHeight = getHeightDiff(tree.left);
  const rightHeight = getHeightDiff(tree.right);
  const heightDiff = Math.abs(leftHeight - rightHeight);

  if (heightDiff > 1) {
    throw new Error();
  }

  return Math.max(leftHeight, rightHeight) + 1;
};

export const isBalanced = tree => {
  try {
    getHeightDiff(tree);
    return true;
  } catch (_) {
    return false;
  }
};

// We could just compute the height of each subtree, but then we have to calculate the height for every node, for each node above it (O (N log N))
// Instead, while we're going through, we should find if the subtree ever isn't balanced; if it's not, cut off calculation right then
// I used an exception but we could use error values instead
// Time complexity: O(N) -- we look through each node
// Space complexity: O(H), where H is the height of the tree -- we have up to that many recursive layers
