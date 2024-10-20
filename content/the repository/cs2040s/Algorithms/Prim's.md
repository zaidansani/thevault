---
title: Prim's
tags:
  - CS2040S
  - algorithms
---
# Naive (Non-PQ) Implementation

1. Iterate through all vertices ($V$ iterations)
2. For each vertex:
	1. Find the next vertex by looking at the next edge with the minimum weight that has an vertex not visited yet.
	2. Update the weights by looking at the distance from the vertex on its edges and checking if it is
		1. lesser than the weights (priority)
		2. vertex is not visited yet
$$ O(V^2)$$
# Priority Queue Implementation

1. Initialise a priority queue $pq$, inserting all the nodes with the largest possible priority, except for the start vertex, initialised with $0$ priority. $O(Vlog(V))$
2. Initialise the set $s$ to store all visited nodes, and put the start vertex in. $O(1)$
3. Initialise the hash table $parent$, and put the start vertex in. $O(1)$
4. While the queue is non-empty: 
	1. Extract the vertex with lowest priority.
	2. Put the vertex in $s$.
	3. Iterate through all the edges. 
	   If the node on the other side of the edge is not in $s$, and the priority of the node is more than the current edge weight:
		1. Run ``decreaseKey`` with the weight of the current edge on the other node in the queue. $O(log(V))$ (Total: $O(Elog(V))$)
		2. Make the current node the parent of the other node. $O(1)$

$$
O(Vlog(V) + Elog(V)) =  O((V + E)log(V)) = O(Elog(V))
$$
![[diagrams/prim.svg]]
%%[[diagrams/prim|🖋 Edit in Excalidraw]]%%

# Proof Of Correctness

1. Each added edge is the lightest on some cut
2. Hence, each edge is in MST.

```Java
// imagine u have a list of parsers (parsers)
// also imagine u have a list to store completable futures (lst)

CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(Main::fetchData)
for (Supplier p: parsers) {
	lst.add(cf1.thenApply(p))
}	
```

