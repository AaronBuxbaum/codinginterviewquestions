import { range, shuffle } from "lodash";
import {
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
  radixSort
} from "../Sorting Algorithms";

const expected = range(101);
const original = shuffle(expected);

test("Sorting Algorithms", () => {
  expect(bubbleSort(original)).toEqual(expected);
  expect(selectionSort(original)).toEqual(expected);
  // expect(mergeSort(original)).toEqual(expected);
  expect(quickSort(original)).toEqual(expected);
  expect(radixSort(original)).toEqual(expected);
});
