---
title: All Pairs Shortest Paths
tags: [algorithms, CS2040S]
---
> [!summary] Find all the shortest paths between every pair of vertices in a graph.

>[!info] Can be used to find the **diameter** of a graph.

Related to [Single Source Shortest Path](Single%20Source%20Shortest%20Path.md)

# Approaches/Algorithms

| Implementations                                                     | Running Time  |
| ------------------------------------------------------------------- | ------------- |
| [Dijkstra's](../Algorithms/Dijkstra's.md) on every pair of vertices | $O(V^2ElogV)$ |
| [Floyd-Warshall](../Algorithms/Floyd-Warshall.md)                   | $O(V^3)$      |

