/*
  You are implementing a binary tree class from scratch which, in addition to insert, find, and delete,
  has a method getRandomNode() which returns a random node from the tree.
  All nodes should be equally likely to be chosen.
  Design and implement an algorithm for getRandomNode, and explain how you would
  implement the rest of the methods.
 */

import { random } from "lodash";

class RandomBinaryTreeNode {
  size = 1;

  constructor(value) {
    this.value = value;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new RandomBinaryTreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new RandomBinaryTreeNode(value);
      } else {
        this.right.insert(value);
      }
    }

    this.size++;
  }

  getSize() {
    return this.size;
  }

  getNthNode(n) {
    const leftSize = this.left ? this.left.getSize() : 0;

    if (n < leftSize) {
      return this.left.getNthNode(n);
    } else if (n === leftSize) {
      return this;
    } else {
      const rightSize = n - (leftSize + 1);
      return this.right.getNthNode(rightSize);
    }
  }
}

export class RandomBinaryTree {
  insert(value) {
    if (!this.root) {
      this.root = new RandomBinaryTreeNode(value);
    } else {
      this.root.insert(value);
    }
  }

  getSize() {
    return this.root ? this.root.getSize() : 0;
  }

  // ignored for now
  find(node) {}

  // ignored for now
  delete(node) {}

  getRandomNode() {
    const seed = random(0, this.getSize());
    return this.root.getNthNode(seed);
  }
}

// Time complexity: O(log N) time to insert, O(log N) to find random node
// Space complexity: O(N) for the nodes themselves, O(log N) to find random node for recursive stacks
