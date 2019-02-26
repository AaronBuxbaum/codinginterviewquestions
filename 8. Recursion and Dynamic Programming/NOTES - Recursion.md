# Recursion

A good hint that a problem is recursive is that it can be build off of subproblems (by definition). For example, problems that begin with...
* "compute the nth..."
* "list the first n..."
* "compute all..."
...then it is often (but not always) a good candidate for recursion.

Because a recursive solution is built off of subproblems, most of the time you will be computing f(n) by adding something, removing something, or otherwise changing the solution for f(n-1). In other cases, you might solve the problem for the first half, then the second half, and then merge the results.

There are three common approaches to divide a problem into subproblems:
1. Bottom-Up: start with thinking how to solve for one element, then two, then three, etc. The key is to think about how you can _build_ the solution for one case off of the previous case (or multiple previous cases).
2. Top-Down: Think of how we can divide the problem for case N into subproblems.
  * Be careful of overlap between the cases!
3. Half-and-Half: divide the data set in half.
  * Example: binary search -- figure out which half of the array contains the value, then recurse and search for it in that half.
  * Example: merge sort -- sort each half of the array, then merge together the sorted halves.

Bottom-Up is typically most intuitive.

Recursive algorithms can be very space inefficient -- each call adds a new layer to the stack. All recursive algorithms can be implemented iteratively, though sometimes the code is much more complex. Discuss the tradeoffs with your interviewer!