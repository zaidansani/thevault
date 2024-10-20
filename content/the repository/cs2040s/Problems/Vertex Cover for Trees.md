---
title: Vertex Cover for Trees
tags:
  - algorithms
  - CS2040S
---
> [!summary] A set of nodes where every edge is adjacent to at least one of the nodes.

# Dynamic Programming Solution
[Dynamic Programming](../Paradigms/Dynamic%20Programming.md)

## Optimal substructure
Consider the subproblems:
1. $S[v,0]$ - the size of the vertex cover, if it is uncovered.
2. $S[v,1]$ - the size of the vertex cover, if it is covered.

## Solving subproblems
Given $w$ is a child of $v$, consider:
1. $S[w,0]$
   Since $w$ is not covered, $v$ would have to be covered, thus:
   * $S[w,0] = S[v,1]$
2. $S[w,1]$
   Since $w$ is covered, we can just take the minimum of the vertex covers of $v$:
   * $S[w,0] = min(S[v,1], S[v,0]) + 1$