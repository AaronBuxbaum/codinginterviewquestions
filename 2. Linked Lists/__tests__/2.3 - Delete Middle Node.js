import { buildList } from "../LinkedList";
import { deleteMiddleNode } from "../2.3 - Delete Middle Node";

test('Delete Middle Node', () => {
    let list = buildList([1, 2, 3, 4, 5]);
    deleteMiddleNode(list, 3);
    const removedList = buildList([1, 2, 4, 5]);
    expect(list).toEqual(removedList);
});