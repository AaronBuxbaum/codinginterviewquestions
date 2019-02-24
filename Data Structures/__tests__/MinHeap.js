import { MinHeap } from "../MinHeap";

describe("Data Structures", () => {
  test("MinHeap", () => {
    const heap = new MinHeap();
    const input = [5, 3, 8, 6, 9, 1, 4];
    input.forEach(i => heap.add(i));
    expect(heap.getSorted()).toEqual(input.sort());
  });
});
