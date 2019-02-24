/*
  Given a binary tree, design an algorithm which creates a linked list of all the nodes
  at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
 */

export const listOfDepths = (tree, returnValue = [], level = 0) => {
  if (!tree) {
    return;
  }

  if (!returnValue[level]) {
    returnValue.push([]);
  }

  returnValue[level].push(tree.value);

  tree.children.forEach(child => listOfDepths(child, returnValue, level + 1));

  return returnValue;
};

// note that I did this solution with JS arrays out of convenience, but it works the same with LL

// time complexity: O(N) -- we look at every node
// space complexity: assuming a balanced tree, O(log N) -- we need log N recursive calls
