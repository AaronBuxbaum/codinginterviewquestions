import { getMagicIndex, getMagicIndexTrivial } from "../8.3 - Magic Index";

const none = [-40, -20, -1, 1, 2, 3, 5, 6, 9, 12, 13];
const distinct = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];

test("Magic Index - Trivial", () => {
  expect(getMagicIndexTrivial(none)).toEqual(-1);
  expect(getMagicIndexTrivial(distinct)).toEqual(7);
});

test("Magic Index", () => {
  expect(getMagicIndex(none)).toEqual(-1);
  expect(getMagicIndex(distinct)).toEqual(7);
});

test.todo("Magic Index - Nondistinct");
