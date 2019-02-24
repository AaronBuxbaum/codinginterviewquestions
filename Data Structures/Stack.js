import { last } from "lodash";

export class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.isEmpty() ? Number.MAX_SAFE_INTEGER : last(this.stack);
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  length() {
    return this.stack.length;
  }
}

// this is just for the sake of easier testing
export const buildStack = arr => {
  const stack = new Stack();
  arr.forEach(item => {
    stack.push(item);
  });
  return stack;
};
