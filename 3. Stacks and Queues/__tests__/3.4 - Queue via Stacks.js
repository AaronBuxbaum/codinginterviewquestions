import { range } from "lodash";
import { MyQueue } from "../3.4 - Queue via Stacks";

test("Queue via Stacks", () => {
  const queue = new MyQueue();
  range(1, 10).forEach(i => queue.enqueue(i));
  expect(queue.peek()).toEqual(1);
  expect(queue.size()).toEqual(9);
  range(1, 10).forEach(i => {
    expect(queue.dequeue()).toEqual(i);
  });
  expect(queue.size()).toEqual(0);
});
