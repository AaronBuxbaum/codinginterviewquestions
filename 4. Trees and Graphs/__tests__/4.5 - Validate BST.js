import { validateBST } from "../4.5 - Validate BST";
import { buildBinaryTree } from "../../Data Structures/BinaryTree";
import { range } from "lodash";
import { buildMinimalHeightBST } from "../4.2 - Minimal Tree";

test("Validate BST", () => {
  const tree = buildBinaryTree(range(10));
  expect(validateBST(tree)).toBe(false);

  const bst = buildMinimalHeightBST(range(10));
  expect(validateBST(bst)).toBe(true);
});
