---
title: "Kruskal's"
tags: [algorithms, CS2040S]
---
Utilises the [Red-Blue Rule](Red-Blue%20Rule.md) on the edges.

1. Sort edges by smallest to biggest $O(ElogE) = O(ElogV)$
2. If the edge does not introduce a cycle, add it into the MST. 
	1. Use union-find $O(logV)$ or $O(\alpha(n))$ operations.

$$ O(ElogV)$$

![[diagrams/kruskal.svg]]
%%[[diagrams/kruskal|🖋 Edit in Excalidraw]]%%
# Proof of Correctness
1. Each added edge crosses a cut
2. Each edge is lightest edge across cut, all other edges across cut has been considered.