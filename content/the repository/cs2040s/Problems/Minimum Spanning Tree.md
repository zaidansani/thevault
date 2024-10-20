---
title: Minimum Spanning Tree
tags:
  - algorithms
  - CS2040S
---
> [!summary] An **acyclic** subset of edges that connects all nodes with minimum weight.

# Properties
* No cycles
* If a MST is *cut*, both pieces are MSTs.
* For every cycle in the original graph, the maximum weight edge is **not** in the MST.
	* For every cycle, minimum weight edge may or may not be in the MST.
* For every partition of nodes, the minimum weight edge across the cut is in the MST.
	* For every vertex, the maximum outgoing edge is never part of the MST.
# Algorithms

| Algorithm                                                               | Time Complexity          | Remarks                                      |
| ----------------------------------------------------------------------- | ------------------------ | -------------------------------------------- |
| [[../Algorithms/Prim's#Naive (Non-PQ) Implementation\| Prim's (Naive)]] | $O(V^2)$                 | Better for dense graphs where $V^2<E(log(V)$ |
| [[../Algorithms/Prim's#Priority Queue Implementation\|Prim's (PQ)]]     | $O(ElogV), O(E + VlogV)$ | Better for sparse graphs                     |
| [Kruskal's](../Algorithms/Kruskal's.md)                                 | $O(ElogV)$               |                                              |
| DFS or BFS                                                              | $O(E)$                   | For unweighted graphs (or same weight)       |
The Prim and Kruskal algorithms are fairly similar, with the Prim algorithm focusing more on vertices, and the Kruskal algorithms focusing on edges.
## Maximum Spanning Tree

## Approaches

An approach could be to **multiply each edge weight by $-1$ and run a MST algorithm**. Since the relative order is swapped, the minimum spanning tree of this new tree will represent a maximum spanning tree of the original tree.

Another approach could be to use **Kruskal** but choose the **largest edges** first.