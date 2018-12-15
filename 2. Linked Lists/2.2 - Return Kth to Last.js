/*
    Implement an algorithm to find the kth to last element of a singly linked list.
 */

// make sure to discuss if the "0th to last" is an option; in other words, if "1st to last" is the last element
// I have taken that direction, hence we iterate to k - 1.

// note that if we know the length of list, we can just iterate list.length - k times -- this is trivial, but worth asking.

// we can also solve this recursively -- we can recurse to the end of the list and then, passing through a counter, we can
// find the kth value when we go back through the recursive stack. However, this takes O(N) space, and it requires us to
// pass through both the counter and the value, so we need a special data structure (ie. an object) for that.

export const kthToLast = (list, k) => {
  let head = list.head;

  for (let i = 0; i < k - 1; i++) {
    if (!head.next) {
      return null;
    }
    head = head.next;
  }

  let trail = list.head;

  while (head.next) {
    head = head.next;
    trail = trail.next;
  }

  return trail.value;
};

// O(N) time (iterate through the entire list), and O(1) space

// Recusive solution. I'm not super happy with this.
export const kthToLastRecursive = (node, k) => {
  let returnValue;
  if (node.next) {
    returnValue = kthToLastRecursive(node.next, k);
  } else {
    returnValue = {
      value: null,
      iteratedN: 0
    };
  }

  const { value, iteratedN } = returnValue;
  if (iteratedN === k - 1) {
    return {
      value: node.value,
      iteratedN: iteratedN + 1
    };
  }

  return {
    value: value,
    iteratedN: iteratedN + 1
  };
};

// O(N) time (iterate through the entire list), and O(N) space for recursive stack
