---
title: Single Source Shortest Path
tags:
  - algorithms
  - CS2040S
---
> [!summary] Finding the shortest path between a pair of vertices.

| Condition                 | Algorithm                                     | Time Complexity |
| ------------------------- | --------------------------------------------- | --------------- |
| Unweighted Graph          | BFS                                           | $O(V + E)$      |
| No Negative Weight Cycles | [Bellman-Ford](../Algorithms/Bellman-Ford.md) | $O(VE)$         |
| No Negative Weights       | [Dijkstra's](../Algorithms/Dijkstra's.md)     | depends..       |
| Tree                      | BFS/DFS                                       | $O(V)$          |
| Directed Acyclic Graph    | [DAG SSSP](#DAG%20SSSP)                       | $O(V + E)$      |
# DAG SSSP

This algorithm
- does a [topological sort](Topological%20Sorting.md) on the graph, while relaxing the edges.
- now, in topological order, each vertex is processed.

This works for DAGs because of the property that at vertex `v`, all the **shortest paths to all its parents** have been found. 

![[diagrams/dag sssp.svg]]
%%[[diagrams/dag sssp|🖋 Edit in Excalidraw]]%%

