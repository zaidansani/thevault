---
title: Red-Blue Rule
tags:
  - CS2040S
  - algorithms
---

| Rule |                                                                                 |
| ---- | ------------------------------------------------------------------------------- |
| Red  | If $C$ is a cycle with no red arcs, then colour the max-weight edge in $C$ red. |
| Blue | If $D$ is a cut with no blue arcs, colour the min-weight edge in $D$ blue.      |
# Algorithm
1. Apply red rule, or blue rule to arbitrary edge, until no more edges can be coloured.
2. On termination, blue edges are an MST.

# Proof of Correctness.
1. Every cycle has a red edge. There are no blue cycles.
2. Blue edges form a tree (spanning)
3. Every edge is coloured
4. Every blue edge is in MST.
