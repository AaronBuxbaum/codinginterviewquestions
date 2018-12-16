import { buildList } from "../LinkedList";
import {
  findBeginningOfLoop,
  findBeginningOfLoopWithSet
} from "../2.8 - Loop Detection";

test("Loop Detection", () => {
  let list = buildList([1, 2, 3, 4, 5]);
  expect(findBeginningOfLoopWithSet(list)).toEqual(null);

  list.head.next.next.next = list.head.next;
  expect(findBeginningOfLoopWithSet(list)).toEqual(list.head.next);
});

test("Loop Detection - No Set", () => {
  let list = buildList([1, 2, 3, 4, 5]);
  expect(findBeginningOfLoop(list)).toEqual(null);

  list.head.next.next.next = list.head.next;
  expect(findBeginningOfLoop(list)).toEqual(list.head.next);
});
