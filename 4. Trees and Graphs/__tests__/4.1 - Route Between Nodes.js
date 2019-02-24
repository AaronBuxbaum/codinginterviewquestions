import { hasRoute } from "../4.1 - Route Between Nodes";
import { buildBinaryTree } from "../../Data Structures/BinaryTree";
import { range } from "lodash";

test("Route Between Nodes", () => {
  const tree = buildBinaryTree(range(10));
  const startNode = tree.left;
  const endNode = tree.left.left.right;
  const otherNode = tree.right.right;

  expect(hasRoute(startNode, endNode)).toBe(true);
  expect(hasRoute(startNode, otherNode)).toBe(false);
});

test("Route Between Nodes - Cycle Exists", () => {
  const tree = buildBinaryTree(range(30));

  const startNode = tree;
  const endNode = tree.right.left;

  expect(hasRoute(startNode, endNode)).toBe(true);

  // add a cycle that prevents the left side from being seen
  tree.left = tree;
  tree.children[0] = tree;

  expect(hasRoute(startNode, endNode)).toBe(false);
});
