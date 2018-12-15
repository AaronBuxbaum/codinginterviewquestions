import { rotateMatrix } from "../1.7 - Rotate Matrix";

test("Rotate Matrix - even", () => {
  const original = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  const rotated = [
    [4, 8, 12, 16],
    [3, 7, 11, 15],
    [2, 6, 10, 14],
    [1, 5, 9, 13]
  ];
  rotateMatrix(original);
  expect(original).toEqual(rotated);
});

test("Rotate Matrix - odd", () => {
  const original = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const rotated = [[3, 6, 9], [2, 5, 8], [1, 4, 7]];
  rotateMatrix(original);
  expect(original).toEqual(rotated);
});
