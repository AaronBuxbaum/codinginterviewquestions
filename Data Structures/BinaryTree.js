class BinaryNode {
  right;
  left;

  constructor(value) {
    this.value = value;
  }

  isComplete() {
    return !!(this.left && this.right);
  }

  addChild(value) {
    const node = new BinaryNode(value);

    if (!this.left) {
      this.left = node;
      return this.left;
    }

    if (!this.right) {
      this.right = node;
      return this.right;
    }

    throw new Error("no available room");
  }
}

// This is for testing purposes only -- builds depth-first
export const buildBinaryTree = (data, start = 0) => {
  if (start > data.length - 1) {
    return;
  }

  const root = new BinaryNode(data[start]);
  const leftIndex = start * 2 + 1;
  const rightIndex = leftIndex + 1;
  root.left = buildBinaryTree(data, leftIndex);
  root.right = buildBinaryTree(data, rightIndex);
  return root;
};
