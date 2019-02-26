import { RandomBinaryTree } from "../4.11 - Random Node";

jest.unmock("lodash");
const lodash = require.requireActual("lodash");

test("Random Node", () => {
  lodash.random = () => 4;

  const tree = new RandomBinaryTree();

  tree.insert(1);
  tree.insert(5);
  tree.insert(3);
  tree.insert(8);
  tree.insert(2);

  expect(tree.getRandomNode().value).toEqual(8);
});
