import { range } from "lodash";
import { TripleStack } from "../3.1 - Three in One";

test("Three in One", () => {
  const stack = new TripleStack();

  range(1, 10).forEach(i => {
    stack.push(1, i);
    stack.push(2, i);
    stack.push(3, i);
  });

  expect(stack.getLength(2)).toEqual(9);
  expect(stack.pop(1)).toEqual(9);
  expect(stack.peek(1)).toEqual(8);
  expect(stack.pop(1)).toEqual(8);
  expect(stack.pop(1)).toEqual(7);
  expect(stack.peek(3)).toEqual(9);
});
