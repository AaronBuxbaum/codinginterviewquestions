import {buildList} from "../LinkedList";
import {sumLists} from "../2.5 - Sum Lists";

test('Sum Lists', () => {
    const list1 = buildList([7, 1, 6]);
    const list2 = buildList([5, 9, 2]);
    const resultList = buildList([2, 1, 9]);
    expect(sumLists(list1, list2)).toEqual(resultList);
});