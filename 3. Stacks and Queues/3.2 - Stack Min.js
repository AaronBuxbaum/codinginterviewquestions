/*
    How would you design a stack which, in addition to `push` and `pop`, has a function `min` which returns the minimum element?
    Push, pop and min should all operate in 0(1) time.
 */

import { Stack } from "./Stack";

export class StackMin {
  constructor() {
    this.stack = new Stack();
    this.minValues = new Stack();
  }

  push(value) {
    if (this.minValues.isEmpty() || value <= this.min()) {
      this.minValues.push(value);
    }
    this.stack.push(value);
  }

  min() {
    return this.minValues.peek();
  }

  pop() {
    const returnValue = this.stack.pop();
    if (returnValue === this.min()) {
      this.minValues.pop();
    }
    return returnValue;
  }
}

// This solution creates a data structure which is made from two stacks which update in parallel.
// We don't need to store O(N) items; we only need O(K), where K is the number of unique numbers in the stack
// We can do this because we know if we have a smaller element at the same point in the normal stack, we don't
// actually need to store it and just do a check on push and pop

// Therefore, besides for the O(N) space for the stack itself, we add O(K) space for the minimum values stack.
// As mentioned in the problem description, time complexity for each of the functions is O(1).
