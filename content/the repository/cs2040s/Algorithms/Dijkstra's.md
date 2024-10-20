---
title: Dijkstra's
tags:
  - CS2040S
  - algorithms
---
# Time Complexity

``insert`` $V$ times
* Each node is added to priority queue once
``relax/decreaseKey`` $E$ times
* Each edge is relaxed once

| Implementation of queue | ``insert``  | ``deleteMin`` | ``decreaseKey`` | Time complexity               |
| ----------------------- | ----------- | ------------- | --------------- | ----------------------------- |
| Array                   | $1$         | $V$           | $1$             | $O(V^2)$                      |
| AVL Tree                | $log(V)$    | $log(V)$      | $log(V)$        | $O((E + V)log(V)) = O(ElogV)$ |
| d-way Heap              | $dlog_d(V)$ | $dlog_d(V)$   | $log_d(V)$      | $O(Elog_{E/V}(V)$)$           |
| Fibonacci Heap          | $1$         | $log(V)$      | $1$             | $O(E + VlogV)$                |


# Proof of Correctness

_Proof by induction_
1. Every finished vertex has correct estimate.
2. Basis step: The start vertex is finished and has a correct estimate.
3. Inductive step:
	1. Remove vertex from priority queue
	2. Relax edges
	   * Changes priority if there is a vertex in priority queue with less priority
	3. Add vertex to set of finished vertices
	4. Estimate of vertex is final

# Invariants

1. Vertex is finished when dequeued.
	* Estimate is never changed
	* When destination is reached, we can stop the algorithm

# Limitations

1. Fails with negative weights.
2. Graphs cannot be reweighted.