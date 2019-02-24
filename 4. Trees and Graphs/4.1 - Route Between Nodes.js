/*
  Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 */

// Any tree traversal algorithm can be used here, but you should debate the advantages of each
// for example, DFS is the cleanest and technically fastest, but breadth-first is more likely to find
// it if there's any ordering at all to the tree, and can be used to find shortest path.

export const hasRoute = (node1, node2) => {
  if (node1 === node2) {
    return true;
  }

  node1.visited = true;
};
