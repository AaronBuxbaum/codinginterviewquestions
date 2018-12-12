import { kthToLast, kthToLastRecursive } from "../2.2 - Return Kth to Last";
import {buildList} from "../LinkedList";

test('Return Kth to Last', () => {
    let list = buildList([1, 2, 3, 4, 5]);
    expect(kthToLast(list, 2)).toEqual(4);

    list = buildList([1, 2, 3, 4, 5]);
    expect(kthToLast(list, 5)).toEqual(1);

    list = buildList([1, 2, 3, 4, 5]);
    expect(kthToLast(list, 8)).toEqual(null);
});

test('Return Kth to Last - Recursive', () => {
    let list = buildList([1, 2, 3, 4, 5]);
    expect(kthToLastRecursive(list.head, 2).value).toEqual(4);

    list = buildList([1, 2, 3, 4, 5]);
    expect(kthToLastRecursive(list.head, 5).value).toEqual(1);

    list = buildList([1, 2, 3, 4, 5]);
    expect(kthToLastRecursive(list.head, 8).value).toEqual(null);
});