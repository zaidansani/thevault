---
title: Bellman-Ford
tags:
  - CS2040S
  - algorithms
---
# Time Complexity

Relax every edge $e$ $v$ times.
$$
O(VE)
$$
# Invariant

* After iteration $j$, if node $u$ is $j$ hops from $s$ on a shortest path $P$ from $s$ to $v$, then $est[u] =  distance(s, u)$.

# Limitations
* Works for negative weights, but not **negative weight cycles**
	* Run Bellman-Ford for $|V| + 1$ iterations, and check for estimate change in last iteration.