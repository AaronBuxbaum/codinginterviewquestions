import { buildMinimalHeightBST } from "../4.2 - Minimal Tree";
import { range } from "lodash";
import { buildBinaryTree } from "../../Data Structures/BinaryTree";

const getLength = tree => {
  let maxLen = 0;
  tree.len = 1;
  let queue = [tree];

  while (queue.length) {
    let node = queue.shift();

    if (node.children) {
      queue = queue.concat(
        node.children.map(child => ({
          ...child,
          len: node.len + 1
        }))
      );

      maxLen = Math.max(maxLen, node.len);
    }
  }

  return maxLen;
};

const assertBinarySortedness = tree => {
  if (!tree) {
    return;
  }

  const [left, right] = tree.children;

  if (left && left.value) {
    expect(left.value).toBeLessThanOrEqual(tree.value);
  }

  if (right && right.value) {
    expect(right.value).toBeGreaterThanOrEqual(tree.value);
  }

  assertBinarySortedness(left);
  assertBinarySortedness(right);
};

test("Get Length", () => {
  const perfectTree = buildBinaryTree(range(8));
  expect(getLength(perfectTree)).toEqual(4);

  const oneMore = buildBinaryTree(range(7));
  expect(getLength(oneMore)).toEqual(3);

  const incompleteTree = {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    value: 1
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    value: 2
  };
  expect(getLength(incompleteTree)).toEqual(5);
});

test("Minimal Tree", () => {
  let tree = buildMinimalHeightBST(range(6));
  expect(getLength(tree)).toEqual(3);

  tree = buildMinimalHeightBST(range(7));
  expect(getLength(tree)).toEqual(3);

  tree = buildMinimalHeightBST(range(8));
  expect(getLength(tree)).toEqual(4);

  assertBinarySortedness(tree);
});
