import { range } from "lodash";
import {
  preOrderTraversal,
  inOrderTraversal,
  postOrderTraversal,
  breadthFirstTraversal
} from "../TreeTraversals";
import { buildBinaryTree } from "../BinaryTree";

const tree = buildBinaryTree(range(1, 10));

test("pre-order", () => {
  expect(preOrderTraversal(tree)).toEqual([1, 2, 4, 8, 9, 5, 3, 6, 7]);
});

test("in-order", () => {
  expect(inOrderTraversal(tree)).toEqual([8, 4, 9, 2, 5, 1, 6, 3, 7]);
});

test("post-order", () => {
  expect(postOrderTraversal(tree)).toEqual([8, 9, 4, 5, 2, 6, 7, 3, 1]);
});

test("breadth-first", () => {
  expect(breadthFirstTraversal(tree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
