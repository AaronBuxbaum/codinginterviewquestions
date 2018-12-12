import { partition } from "../2.4 - Partition";
import { buildList } from "../LinkedList";

test('Partition', () => {
    const originalList = buildList([3, 5, 8, 5, 10, 2, 1]);
    const partitionedList = buildList([3, 1, 2, 10, 5, 5, 8]);
    expect(partition(originalList, 5)).toEqual(partitionedList);
});