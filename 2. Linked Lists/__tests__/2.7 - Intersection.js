import { buildList } from "../../Data Structures/LinkedList";
import { findIntersection } from "../2.7 - Intersection";

test("Intersection", () => {
  let list1 = buildList([1, 2, 3, 4, 5]);
  let list2 = buildList([6, 7, 8, 9, 10]);
  expect(findIntersection(list1, list2)).toEqual(null);

  list1.head.next.next.next.next = list2.head.next.next.next;
  expect(findIntersection(list1, list2)).toEqual(
    list1.head.next.next.next.next
  );
});
