export const preOrderTraversal = (tree, returnValue = []) => {
  returnValue.push(tree.value);

  if (tree.left) {
    preOrderTraversal(tree.left, returnValue);
  }

  if (tree.right) {
    preOrderTraversal(tree.right, returnValue);
  }

  return returnValue;
};

export const inOrderTraversal = (tree, returnValue = []) => {
  if (tree.left) {
    inOrderTraversal(tree.left, returnValue);
  }

  returnValue.push(tree.value);

  if (tree.right) {
    inOrderTraversal(tree.right, returnValue);
  }

  return returnValue;
};

export const postOrderTraversal = (tree, returnValue = []) => {
  if (tree.left) {
    postOrderTraversal(tree.left, returnValue);
  }

  if (tree.right) {
    postOrderTraversal(tree.right, returnValue);
  }

  returnValue.push(tree.value);

  return returnValue;
};

export const breadthFirstTraversal = tree => {
  const returnValue = [];
  const queue = []; // faster as a linked list
  tree.hasBeenSeen = true;
  queue.push(tree);

  while (queue.length) {
    const node = queue.shift();
    returnValue.push(node.value);

    if (node.left && !node.left.hasBeenSeen) {
      node.left.hasBeenSeen = true;
      queue.push(node.left);
    }

    if (node.right && !node.right.hasBeenSeen) {
      node.right.hasBeenSeen = true;
      queue.push(node.right);
    }
  }

  return returnValue;
};
