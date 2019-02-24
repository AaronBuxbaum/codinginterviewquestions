/*
    Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
    lf x is contained within the list, the values of x only need to be after the elements less than x (see below).
    The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

    EXAMPLE
    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

// We could create two new lists and then merge them together, or we could just swap components around.
// I went for the latter approach -- we effectively create a new "list" at the front of the list and move elements into it
// Via a "head" and "tail" (since we don't care about stability -- if we do care about stability, we need to use new lists)

import { LinkedList } from "../Data Structures/LinkedList";

export const partition = (list, partition) => {
  let head = list.head;
  let tail = head;

  let pointer = list.head;
  while (pointer) {
    let next = pointer.next;

    if (pointer.value < partition) {
      pointer.next = head;
      head = pointer;
    } else {
      tail.next = pointer;
      tail = pointer;
    }

    pointer = next;
  }

  delete tail.next;
  const returnList = new LinkedList();
  returnList.head = head;
  return returnList;
};

// Analysis: O(N) time to iterate through each of the elements
// O(1) space since we don't actually add any elements, we just move around the pointers
