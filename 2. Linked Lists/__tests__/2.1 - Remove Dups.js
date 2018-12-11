import { buildList } from "../LinkedList";
import { removeDups, removeDupsNoBuffer } from "../2.1 - Remove Dups";

test('Remove Dups', () => {
    let originalList = buildList([1, 2, 3, 2, 4]);
    removeDups(originalList);
    let uniqueList = buildList([1, 2, 3, 4]);
    expect(originalList).toEqual(uniqueList);

    originalList = buildList([1, 2, 3, 4]);
    removeDups(originalList);
    uniqueList = buildList([1, 2, 3, 4]);
    expect(originalList).toEqual(uniqueList);

    originalList = buildList([1, 1, 1, 1, 1, 1]);
    removeDups(originalList);
    uniqueList = buildList([1]);
    expect(originalList).toEqual(uniqueList);
});

test('Remove Dups - No Buffer', () => {
    let originalList = buildList([1, 2, 3, 2, 4]);
    removeDupsNoBuffer(originalList);
    let uniqueList = buildList([1, 2, 3, 4]);
    expect(originalList).toEqual(uniqueList);

    originalList = buildList([1, 2, 3, 4]);
    removeDupsNoBuffer(originalList);
    uniqueList = buildList([1, 2, 3, 4]);
    expect(originalList).toEqual(uniqueList);

    originalList = buildList([1, 1, 1, 1, 1, 1]);
    removeDupsNoBuffer(originalList);
    uniqueList = buildList([1]);
    expect(originalList).toEqual(uniqueList);
});