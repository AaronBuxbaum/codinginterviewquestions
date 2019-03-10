export class BinaryNode {
  right;
  left;
  parent;

  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
  }

  isComplete() {
    return !!(this.left && this.right);
  }

  addChild(value) {
    const node = new BinaryNode(value, this);

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
  root.children = [];
  if (root.left) {
    root.children.push(root.left);
  }
  if (root.right) {
    root.children.push(root.right);
  }
  return root;
};
