---
title: Quick-Union
tags:
  - CS2040S
  - algorithms
---

| object | .... |
| ------ | ---- |
| parent | .... |

# ``find(p)``

> [!info] Objects are connected if they are of the same tree

$$ O(n)$$
1. Find highest parent of $p$
2. Find highest parent of $q$
3. If highest parent of $p$ and $q$ are the same, objects are connected.

# ``union(p, q)``


$$ O(n) $$
1. Find highest parent of $p$
2. Find highest parent of $q$
3. Make the highest parent of $q$ the parent of the highest parent of $p$.