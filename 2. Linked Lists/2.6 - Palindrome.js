/*
    Implement a function to check if a linked list is a palindrome.
 */

// This is pretty trivial with a doubly-linked list, but not that obvious with singly-linked (assuming we don't just want to dump it into a string)

// One solution is to reverse the linked list (O(N)), then compare the first half of each to each other.
// An alternative solution is to push each node to a stack, and then compare those.
// Another alternative is if we can manipulate the list, we can make it doubly linked and then iterate over it.
// We can also do it recursively, like most linked list problems.
// We will use the first implementation for this example.

import { Node } from "./LinkedList";

export const isPalindrome = list => {
  let reversedHead;
  let pointer = list.head;
  while (pointer) {
    const node = new Node(pointer.value);
    node.next = reversedHead;
    reversedHead = node;
    pointer = pointer.next;
  }

  let head = list.head;
  while (reversedHead !== head) {
    if (reversedHead.value !== head.value) {
      return false;
    }
    reversedHead = reversedHead.next;
    head = head.next;
  }
  return true;
};

/*
    This solution requires O(N) extra space -- all solutions will require this, afaik
    It takes O(N) time -- we iterate over the string, then iterate over half of it again.
 */
