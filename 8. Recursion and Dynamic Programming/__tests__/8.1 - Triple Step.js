import { tripleStep } from "../8.1 - Triple Step";

test("Triple Step", () => {
  expect(tripleStep(1)).toEqual(1);
  expect(tripleStep(2)).toEqual(2);
  expect(tripleStep(3)).toEqual(4);
  expect(tripleStep(4)).toEqual(7);
  expect(tripleStep(5)).toEqual(13);
  expect(tripleStep(6)).toEqual(24);
  expect(tripleStep(7)).toEqual(44);
  expect(tripleStep(8)).toEqual(81);
  expect(tripleStep(9)).toEqual(149);
});
