# Graphs

A _graph_ is a collection of nodes with edges between some of them.
  * Note that a tree is a type of graph -- it is a connected graph with no cycles and a single root node.

A graph is _directed_ if the edges run just one way (otherwise, it's _undirected_).
A graph is _connected_ if there is a path between all vertices.
 - It's important to clarify this -- people often just assume that the graph is connected.
A graph is _acylic_ if there are no cycles in it.

Graph nodes are also called _vertices_.

There are two common ways to represent a graph:
1. Adjacency List: every vertex stores a list of adjacent vertices. This looks similar to a tree node with children.
   - If your graph is undirected, the edge would be stored twice -- once on both vertices.
   - Note that you can't work via a single Node class because you can't necessarily reach every node from any single node. Therefore, you'll need a Node class and a Graph class that holds Nodes.
   - You could also store the edges as an array or a hashtable, which just represents each of the edges, but this is typically avoided since it's less clean.
2. Adjacency Matrix: an NxN boolean matrix where a true value indicates an edge from node `i` to node `j`.
   - In general, this is less efficient than Adjacency Lists because for each node, you have to iterate over every other node to know where it can connect to.

## Graph Search
There are two main ways to search a graph. For both, we'll start at the root, or an arbitrary selected node.

1. Depth-First Search (DFS): Explore each branch completely before moving on to the next branch. In other words, go deep first before we go wide.
2. Breadth-First Search (BFS): Explore each neighbor before going on to any of their children. In other words, go wide before we go deep.

We tend to use DFS if we know that we'll want to visit every node in the graph, because it's a little simpler. If we want to find a path between two nodes, BFS tends to be better just due to the fact that similar nodes tend to be relatively closely co-located.
  - Pre-order, in-order, and post-order are all forms of DFS.
  - Important note: when implementing DFS in a graph, you must check if a node has been visited before, because a graph can be cyclic. If you don't, you risk getting stuck in an infinite loop.

Unlike DFS (which is recursive), BFS uses a queue to tell us where we are in the list of the previous level. Once you remember to use a queue, the rest comes pretty naturally.

## Bidirectional Search
_Bidirectional search_ is used to find the shortest path between a source and destination node. It works by running two simultaneous breadth-first searches, one from each node. When their searches collide, we have found a path.
  * This is faster because the two searches collide after `Math.floor(D/2)+1` levels (ie. if they are 5 levels away from each other, they will collide after 3 levels each), as opposed to `D` levels.
  * Without bidirectional search, the time complexity is `O(K^D)`, where `K` is the number of adjacent nodes and `D` is the number of levels in the shortest path between the two paths.
  * With bidirectional search, because the two searches collide after `D/2` levels, and because we have two searches going on, the time complexity is `2K^(D/2)`. So that's a square root difference -- we can support paths that are twice as long.