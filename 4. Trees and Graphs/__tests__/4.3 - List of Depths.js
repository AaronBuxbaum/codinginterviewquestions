import { buildBinaryTree } from "../../Data Structures/BinaryTree";
import { range } from "lodash";
import { listOfDepths } from "../4.3 - List of Depths";

test("List of Depths", () => {
  const tree = buildBinaryTree(range(10));
  expect(listOfDepths(tree)).toEqual([[0], [1, 2], [3, 4, 5, 6], [7, 8, 9]]);
});
