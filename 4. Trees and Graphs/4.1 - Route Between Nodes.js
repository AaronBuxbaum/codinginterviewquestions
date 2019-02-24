/*
  Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 */

// Any graph traversal algorithm can be used here, but you should debate the advantages of each
// for example, DFS is the cleanest and technically fastest, but breadth-first is more likely to find
// it if there's any ordering at all to the tree, and can be used to find shortest path.

// We can't use bidirectional search because the graph is directed.
// We also have to be careful to tag seen nodes to avoid infinite loops.

export const hasRoute = (startNode, endNode) => {
  if (startNode.visited) {
    return false;
  }

  if (startNode === endNode) {
    return true;
  }

  startNode.visited = true;

  return startNode.children.some(node => hasRoute(node, endNode));
};

// I use DFS here for convenience, but we could use any algorithm.
// Time complexity: O(N) -- we will potentially look at every node in the graph
// Space complexity: O(1), but technically O(K) where K is the number of levels in the graph; each recursive stack will need to be stored in memory.
