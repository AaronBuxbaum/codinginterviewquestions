/*
    Write a program to sort a stack such that the smallest items are on the top.
    You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).
    The stack supports the following operations: push, pop, peek, and isEmpty.
 */

// We could just search for the smallest number in the stack and then push it into the new stack, but that requires
// a third stack to hold the elements of the stack while we iterate through it.
// Instead

import { Stack } from "./Stack";

export const sortStack = stack => {
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  return tempStack;
};
