---
title: Weighted Union
tags: [algorithms, CS2040S]
---

| object | .... |
| ------ | ---- |
| parent | .... |
| size   | .... |
1. The augmentation makes sure the trees are as balanced
2. Searching will be on a balanced tree
3. The maximum depth $h = log(n)$.

# ``find(p)``

> [!info] Objects are connected if they are of the same tree

$$ O(log(n))$$
1. Find highest parent of $p$
2. Find highest parent of $q$
3. If highest parent of $p$ and $q$ are the same, objects are connected.

![[diagrams/weighted union find.svg]]
%%[[diagrams/weighted union find|🖋 Edit in Excalidraw]]%%

# ``union(p, q)``


$$ O(log(n)) $$
1. Find highest parent of $p$
2. Find highest parent of $q$
3. If the size of the highest parent of $p$ is more than the highest parent of $q$,
	1. Change the parent of the highest parent of $q$ to the highest parent of $p$.
4. Else, do the reverse.
	1. Change parent of highest parent of $p$ to highest parent of $q$.

![[diagrams/weighted union union.svg]]
%%[[diagrams/weighted union union|🖋 Edit in Excalidraw]]%%
# Augmentation (Path Compression)

$$\alpha(m,n)$$
for both operations.

Adding path compression allows for even more optimisation.

After finding the root of the tree (the highest parent), set parent of each traversed node to the root.

# `findRoot(p)`

1. Find the root of $p$
2. From $p$, backtrack all the way to root of $p$ while changing the parent of all nodes to the root of $p$.

![[diagrams/path compression.svg]]
%%[[diagrams/path compression|🖋 Edit in Excalidraw]]%%