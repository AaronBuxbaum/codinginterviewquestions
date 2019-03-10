/*
  Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
  Avoid storing additional nodes in a data structure.
  NOTE: This is not necessarily a binary search tree.
 */

// if this was a BST, we could use that property to search for the correct node in log time (just find the last value that holds the BST property)

// if each node has a pointer to its parent, we can iterate down to the two nodes and find the height of each node. Then, move the one that's farther down up until they're at the same height, then iterate both pointers up the parent chain until you're at the same depth.
// This would take O(d) time, where d is the depth of the deepest node. In the worst case, this can be represented as O(n), where the tree has two paths going down the left and right side, and the common ancestor is the root.

// alternatively, we can, given nodes p and q:
// check if p is contained under q, or vice versa -- if so, the higher one is the common ancestor
// then, pick one and move up one level and check the _other_ sibling (ie. if we already know that it's not in the left of the new pointer node, check if it's under the right of it)
// repeat until you find it or until you're at the root -- if you don't find it here, there is no connection
// This would take O(t) time, where t is the size of the subtree for the first common ancestor. In the worst case, this could be represented as O(n), where each node is searched once -- again, if the common ancestor is the root.

// ...if we don't have links to parents...

// we can check the root node to see if it owns both nodes, then try each child and see if it owns both nodes, and continue down. The first time that p and q are not children of those nodes, we have found the common ancestor.
// This would take O(n) time on a balanced tree -- O(n) time for the first check, then O(n/2) nodes, etc, until we run out. In a worst-case, it would take O(n^2) since we'd have to look for each element.

// We can make this faster for the worst case (and improve constant time) -- we can recurse down the tree to find p and q (preorder), and then as you "bubble up" the stack, you return if you have seen p or q in the recursion. Once you find both, you're good. This gets a bit complicated, though, if the ancestor is p or q, or if one of the nodes does not exist.
// This would take O(n) time in the worst case, since we'll look at every node
