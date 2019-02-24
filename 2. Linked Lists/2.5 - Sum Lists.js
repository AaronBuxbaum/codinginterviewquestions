/*
    You have two numbers represented by a linked list, where each node contains a single digit.
    The digits are stored in reverse order, such that the 1's digit is at the head of the list.
    Write a function that adds the two numbers and returns the sum as a linked list.

    EXAMPLE
    Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
    Output: 2 -> 1 -> 9. That is, 912.


    FOLLOW UP
    Suppose the digits are stored in forward order. Repeat the above problem.

    EXAMPLE
    Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
    Output: 9 -> 1 -> 2. That is, 912.
 */

import { get } from "lodash";
import { LinkedList, Node } from "../Data Structures/LinkedList";

export const sumLists = (list1, list2) => {
  const resultList = new LinkedList();
  resultList.head = new Node();
  let head = resultList.head;

  let list1Head = list1.head;
  let list2Head = list2.head;
  let remainder = 0;

  while (list1Head || list2Head || remainder) {
    const value =
      get(list1Head, "value", 0) + get(list2Head, "value", 0) + remainder;
    head.value = value % 10;
    remainder = Math.floor(value / 10);

    // ugh, gross.
    if (!list1Head.next && !list2Head.next && !remainder) {
      break;
    }

    head.next = new Node();
    head = head.next;
    list1Head = list1Head.next ? list1Head.next : {};
    list2Head = list2Head.next ? list2Head.next : {};
  }
  return resultList;
};

// TODO: follow up
export const sumListsForwardOrder = (list1, list2) => {};
