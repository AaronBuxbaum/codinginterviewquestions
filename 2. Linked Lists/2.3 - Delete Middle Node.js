/*
    Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
    "middle" is defined as: any node but the first and last node, not necessarily the exact middle.

    EXAMPLE
    Input: the node c from the linked list a -> b -> c -> d -> e -> f
    Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
 */

// i misread this -- we do NOT have access to the head node
const deleteMiddleNodeWRONG = (list, value) => {
  let head = list.head;
  while (head.next) {
    if (head.next.value === value) {
      head.next = head.next.next;
      return;
    }
    head = head.next;
  }
};

// O(N) time to iterate through each element, O(1) time since we just store the head pointer

export const deleteMiddleNode = node => {
  node.value = node.next.value;
  node.next = node.next.next;
};

// All we're doing is replacing the current node value with the next node's value, and then deleting the next node
// O(1) time and O(1) space
