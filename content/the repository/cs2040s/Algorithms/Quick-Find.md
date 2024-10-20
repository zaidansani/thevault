---
title: Quick-Find
tags: [algorithms, CS2040S]
---

| object       | .... |
| ------------ | ---- |
| component ID | .... |

# ``find(p)``

> [!info] Assumed that vertices in the same component have the same component identifier

$$ O(1)$$ 1. Compare component identifier.

# ``union(p, q)``


$$ O(n) $$
1. Get component ID of ``q``
2. For all objects with component ID ``q``, change it to ``p``.

# Augmentation
[[Weighted Union]] keeps size of tree at root, to ensure balance