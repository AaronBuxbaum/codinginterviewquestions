/*
    Implement a MyQueue class which implements a queue using two stacks.
 */

import { Stack } from "../Data Structures/Stack";

export class MyQueue {
  constructor() {
    this.newestStack = new Stack();
    this.oldestStack = new Stack();
  }

  size() {
    return this.newestStack.size() + this.oldestStack.size();
  }

  shiftStacks() {
    if (this.oldestStack.isEmpty()) {
      while (!this.newestStack.isEmpty()) {
        this.oldestStack.push(this.newestStack.pop());
      }
    }
  }

  enqueue(value) {
    this.newestStack.push(value);
  }

  peek() {
    this.shiftStacks();
    return this.oldestStack.peek();
  }

  dequeue() {
    this.shiftStacks();
    return this.oldestStack.pop();
  }
}
