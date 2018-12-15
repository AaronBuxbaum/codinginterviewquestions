import { buildList } from "../LinkedList";
import { findBeginningOfLoop } from "../2.8 - Loop Detection";

xtest("Loop Detection", () => {
  let list = buildList([1, 2, 3, 4, 5]);
  expect(findBeginningOfLoop(list)).toEqual(null);

  list.head.next.next.next = list.head.next;
  expect(findBeginningOfLoop(list)).toEqual(list.head.next);
});
