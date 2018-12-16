import { buildList } from "../LinkedList";
import { sumLists, sumListsForwardOrder } from "../2.5 - Sum Lists";

test("Sum Lists", () => {
  let list1 = buildList([7, 1, 6]);
  let list2 = buildList([5, 9, 2]);
  let resultList = buildList([2, 1, 9]);
  expect(sumLists(list1, list2)).toEqual(resultList);

  list1 = buildList([5]);
  list2 = buildList([5, 9, 9]);
  resultList = buildList([0, 0, 0, 1]);
  expect(sumLists(list1, list2)).toEqual(resultList);
});
