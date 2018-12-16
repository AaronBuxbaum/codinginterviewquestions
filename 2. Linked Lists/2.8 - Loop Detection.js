/*
    Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

    DEFINITION
    Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

    EXAMPLE
    Input: A -> B -> C -> D -> E -> C [the same C as earlier]
    Output: C
*/

export const findBeginningOfLoopWithSet = list => {
  const seen = new Set();

  let head = list.head;
  while (head) {
    if (seen.has(head)) {
      return head;
    }

    seen.add(head);
    head = head.next;
  }

  return null;
};

// This runs in O(N + 1) time, where N is the number of unique items in the list
// It also takes O(N) space for the set itself

// We can do this one better by using the "runner" technique -- have a slow and fast (2x)
// pointer. When these pointers meet, you are k steps before the start of the cycle,
// where k is the number of nodes before that node. So, we reset one pointer to the beginning
// and then iterate them both at the same time.

export const findBeginningOfLoop = list => {
  let slow = list.head;
  let fast = list.head;

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      break;
    }
  }

  if (!slow || slow !== fast) {
    return null;
  }

  slow = list.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};
