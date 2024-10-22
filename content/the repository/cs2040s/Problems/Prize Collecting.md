---
title: Prize Collecting
tags: [algorithms, CS2040S]
---
> [!summary] Given a directed graph, find the maximum amount of "prize" (weight of edges) possible to be obtained.

# Dynamic Programming Solution
[Dynamic Programming](../Paradigms/Dynamic%20Programming.md)

1. Check for infinite cycle (positive cycle)
2. Negate edges and run [Bellman-Ford](../Algorithms/Bellman-Ford.md)
   * Bellman-Ford finds negative weight cycles.

## Optimal Substructure
The solution for $(k-1)$ affects the solution for $k$.

## Subproblems
$P[v, k]$ as the maximum prize collected starting at $v$ taking exactly $k$ steps.

If $w_1,...,w_n$ are nodes connected to $v$, the subproblem can be seen as:
$$
max({P[w_{1,}k - 1] + weight(v,w_{1),}..... })
$$
![[diagrams/prize collecting.excalidraw.svg]]
%%[[diagrams/prize collecting.excalidraw|🖋 Edit in Excalidraw]]%%