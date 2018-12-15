/*
    Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
    Note that the intersection is defined based on reference, not value.
    That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list,
    then they are intersecting.
 */

export const findIntersection = (list1, list2) => {
  let pointer1 = list1.head;
  let pointer2 = list2.head;
  let counter1 = 0;
  let counter2 = 0;

  while (pointer1.next) {
    counter1++;
    pointer1 = pointer1.next;
  }
  while (pointer2.next) {
    counter2++;
    pointer2 = pointer2.next;
  }

  if (pointer1 !== pointer2) {
    return null;
  }

  let head1 = list1.head;
  while (counter1 > counter2) {
    head1 = head1.next;
    counter1--;
  }

  let head2 = list2.head;
  while (counter2 > counter1) {
    head2 = head2.next;
    counter2--;
  }

  while (head1 && head2) {
    if (head1 === head2) {
      return head1;
    }
    head1 = head1.next;
    head2 = head2.next;
  }
};

/*
    Analysis

    We can do this by creating a map of all of the memory locations seen, but this solution takes a different tack.
    Note that if there is an intersection, the last nodes of the lists are the same node. Once we know that, we have to
    find the point that they intersect. We know that if we have two lists of the same length, we can find the intersecting
    node by iterating them both at the same time and checking them to see if they're equal -- we can get to that point by
    "trimming off" the beginning of the longer list.

    So, this solution iterates over each of the lists, counting the length of the list while doing it.
    If the end nodes are the same, there's an intersection.
    Then, we "trim the head" of the longer list until they are the same length.
    Lastly, we iterate over each list at the same time, at each step checking if the pointed-to node is the same.
    One of these nodes will be the first intersection point!

    Time: O(A + B), where A and B are the lengths of each list.
    Space: O(1) -- we create a few counters, but no new data structures.
 */
