---
title: Floyd-Warshall
tags:
  - CS2040S
  - algorithms
---
[Dynamic Programming](../Paradigms/Dynamic%20Programming.md)
# Subproblems

Let $S[v, w, P]$ be the shortest path from $v$ to $w$ that only uses intermediate nodes in the set $P$.

$$S[v, w, P_k]= min( S[v, w, P_{k-1}], S[v, x, P_{k-1}] + S[x, w, P_{k-1}])$$

## Derivation

![[diagrams/floyd-warshall.svg]]
%%[[diagrams/floyd-warshall|🖋 Edit in Excalidraw]]%%

Consider that the shortest distance from vertex `a` to another vertex `c` in the set of nodes is the minimum between
- the shortest distance from `a` to `c` within the set of nodes $P_2$ denoted in blue OR
- the shortest distance from `a` to `b` + shortest distance between `b` + `c` in the graph

The first value can be denoted as $S[a,c, P_2]$, and the second as $S[a,b,P_3]+ S[b,c, P_3]$. 
Then, we can get our desired shortest path by taking the minimum of two of these values: $$min(S[a,c, P_2],S[a,b,P_3]+ S[b,c, P_3])$$

We can then generalise this formula for all vertices as: the shortest distance from any vertex `v` to another vertex `w` is the formula 
$$S[v, w, P_k]= min( S[v, w, P_{k-1}], S[v, x, P_{k-1}] + S[x, w, P_{k-1}])$$

This is preferred over **Dijkstra** for dense graphs as this approach allows for memoisation to occur, saving repeated computation times. However, for sparse graphs, [Dijkstra's](Dijkstra's.md) is still preferred.