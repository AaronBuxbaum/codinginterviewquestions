import { buildBinaryTree } from "../../Data Structures/BinaryTree";
import { range } from "lodash";
import { isBalanced } from "../4.4 - Check Balanced";

test("Check Balanced", () => {
  const balanced = buildBinaryTree(range(10));
  expect(isBalanced(balanced)).toBe(true);

  const extraTree = buildBinaryTree(range(5));
  balanced.left.right = extraTree;
  balanced.left.children[1] = extraTree;
  expect(isBalanced(balanced)).toBe(false);
});
