# Linked lists
A _linked list_ is a data structure that represents a sequence of nodes. You can have either singly linked list (just pointers to the next node) or doubly linked list (pointers to the next and previous node).

Linked lists have O(K) time to find the Kth element, but have the advantage of adding or removing items in constant time.

Implementation is typically done as a `Node` class which has a `Node` member variable for the next pointer, and an `appendToTail` function. As long as you keep track of the head Node, you can access down and do whatever you need. You don't need an explicit `LinkedList` class, though it helps make management of the list easier (ie. what happens if you have multiple objects that reference the linked list, and then the head of the linked list changes? some objects might still be pointing to the old head). Therefore, creation of a `LinkedList` class is smart -- all it needs is a single member variable of the head `Node`.

In an interview, always ask if it a singly or doubly linked list.

To delete:
  1. Given node `n`, find the previous node (`prev`)
  2. Set `prev.next` to `n.next`
  3. If the list is doubly linked, set `n.next.prev` to `n.prev`
It's important to remember to check for the null pointer and to update the head or tail pointer as necessary.

"Runner Technique":
This technique is used in many linked list problems. You iterate through the LL with two pointers at the same time, with one ahead of the other. It can be ahead by a fixed amount, or hopping multiple nodes for each slow node.

A number of linked list problems rely on recursion -- if you're having trouble, explore a if a recursive approach will work. Remember that recursive algorithms take at least O(N) space, where N is the depth of the recursive call. All recursive algorithms can be implemented iteratively, although they may be more complex.