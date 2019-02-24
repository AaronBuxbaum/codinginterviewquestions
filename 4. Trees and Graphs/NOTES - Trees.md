# Trees

A _tree_ is a data structure composed of nodes.

* Each tree has a root node (technically not true in graph theory, but usually in programming)
* The root node has zero or more child nodes
* Each child node has zero or more child nodes
* ...etc

Some more information:
* No cycles
* Nodes may or may not be in a particular order
* Nodes can have any data value type
* Nodes may or may not have links back to their parents

Implementation is typically done as a `Node` class, which has a value member variable and an array of `Node` children.

### BinaryTree Definitions
A _binary tree_ is a tree with the added property that each node has up to two children. Not all trees are binary trees.

An _n-ary_ tree is a tree where each node can have up to _n_ children.

A _leaf node_ is a node that has no children.

A _binary search tree_ is a binary tree with the added property that each node has a specific ordering property: `all left descendents <= n < all right descendents`.
  * Depending on definition, duplicate values might be allowed on the left or right or both sides, or might not be allowed at all. You should with your interviewer.
  * Note that this must be true for all of a node's descendents, not just its immediate children.

Never assume that given a tree question that the interviewer means a binary search tree -- you should ask.

A _balanced tree_ is one where the longest branch is at most 1 away from the shortest branch. In other words, an assurance of O(log n) insertion and find time.
  * Red-Black Trees and AVL Trees are types of balanced trees

A _complete binary tree_ is a binary tree in which every level is fully filled, except perhaps the last level. As long as everything is filled from the left to the right, it is complete, even if the tree is not _perfect_ (discussed shortly).

A _full binary tree_ is a binary tree in which every node has either zero or two children.

A _perfect binary tree_ is one that is both full and complete.
  * Unless stated, don't assume that a binary tree is perfect.

### Binary BinaryTree Traversals
There are three main traversals -- in-order, pre-order, and post-order traversal. You should be comfortable with all of them.

* In-Order: visit the left branch, then the current node, then the right branch
* Pre-Order: visit the current node, then left branch, then right branch
* Post-Order: visit the left branch, then right branch, then the current node.

### Binary Heaps
A _heap_ is a complete binary tree with some property attached. For example, a min-heap has the property that each node is smaller than its children.

There are two main operations on a heap: _insert_ and _extract_.

Insert: insert the element at the bottom, in the rightmost spot to maintain the complete tree property. Then, we "fix" the tree by swapping the new element with its parent until an appropriate spot is found. In other words, "bubble up" the element according to the heap's property.
  * This takes `O(log n)` time, where `n` is the number of nodes in the heap
Extract: Finding the element with the maximum of the property (ie. in a min-heap, the smallest element) is easy -- it's the element at the top of the heap. To remove it, we remove the root, then bubble down this element with its children until the heap's property is restored.
  * This also takes `O(log n)` time, where `n` is the number of nodes in the heap
  
## Tries
A _trie_ is variant of an n-ary tree where characters are stored at each node, and the path down the tree represents a word. Typically, a null node (ie. `*`) is used to denote the end of a complete word, or you can add a boolean flag to the node to denote that it represents a word, or you can use a special type of child (ie. `TerminatingNode` which extends `Node`).

A trie is often used to store the entire English language for quick prefix lookup -- you can't effectively do hash table lookup for prefixes. Time to find a valid prefix is actually the same in a hash table -- both technically take `O(K)` time, where `K` is the length of the input string.

A trie is often used as an optimization with lists of valid words. For example, if you're looking through a tree for related prefixes repeatedly (ie. M -> MA -> MAN -> MANY), you could instead pass a reference to the current node and then check if Y is a child of MAN, as opposed to starting from the root each time.