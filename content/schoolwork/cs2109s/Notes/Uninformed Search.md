---
{"publish":true,"title":"Uninformed Search","tags":["CS2109S","artificial_intelligence","searching"],"cssclasses":""}
---


```
create frontier

insert Node(initial_state) to frontier:

while frontier is not empty:
	node = frontier.pop()
	if node.state is goal:
		return solution

	for action in actions(node.state):
		next_state = transition(node.state, action)
		frontier.add(Node(next_state))

return failure
```
# Motivation

An uninformed search is needed when there is a **blind search** - when there is no clue how good a state. 
# Breadth-First-Search (BFS)

If all actions have the same cost, an appropriate strategy is BFS, in which the root node is expanded first, then all the successors, than their successors and so on.

For BFS, the frontier used is a **Queue**, which follows the first-in-first-out (FIFO) policy, meaning nodes added first, are processed first (breadth-first)

```
create frontier : Queue

insert Node(initial_state) to frontier:

while frontier is not empty:
	node = frontier.pop()
	if node.state is goal:
		return solution

	for action in actions(node.state):
		next_state = transition(node.state, action)
		frontier.add(Node(next_state))

return failure
```


> [!tldr] Analysis
> 
> **Time complexity** (number of nodes generated): Exponential with regards to the depth of the optimal solution.
> **Space complexity**: Exponential with regards to the depth of the optimal solution
> **Completeness**: Complete, if $b$ (referring to the number of nodes) is finite
> **Optimality**: Optimal, if step cost is the same.

The time complexity is exponential, with regards to the depth of the optimal solution, as the total number of nodes generated is 

$$
1 + b + b^{2}+ ... + b^{d} = O(b^{d})
$$

Similarly, since all the nodes remain in memory, the space complexity is similar.

Breadth-first search **always** finds a solution that is cost-optimal: when it is generating nodes at $d$, every node generated at $d-1$ is already checked, so if there was a more optimal solution, it would have already been found.

# Uniform-Cost-Search (UCS)

> [!remark] Also known as Dijkstra.

When actions have different costs, best-first-search (where the evaluation function is the cost of the path from the root to the current node) can be used. This is Uniform-Cost-Search.

For UCS, the frontier used is a **Priority-Queue**, which follows the priority of the node.

```
create frontier : PriorityQueue

insert Node(initial_state) to frontier:

while frontier is not empty:
	node = frontier.pop()
	if node.state is goal:
		return solution

	for action in actions(node.state):
		next_state = transition(node.state, action)
		frontier.add(Node(next_state))

return failure
```


> [!tldr] Analysis
> 
> **Time complexity** (number of nodes generated): Exponential with regards to the tier of the optimal solution.
> **Space complexity**: Exponential with regards to the tier of the optimal solution
> **Completeness**: Complete, if step cost is always positive, and finite total cost
> **Optimality**: Optimal, if step cost is always positive

Given the cost of the optimal solution $C^{*}$ and the lower bound on the cost of each action $\epsilon$, the time complexity and space complexity can be seen as:

$$
O(b^{1+\lfloor{C^*}{\epsilon}\rfloor})
$$

Note that is all the costs are equal, this reduces to BFS.

> [!note] Breadth-first-search is UCS with equal costs.

# Depth-First-Search (DFS)

For UCS, the frontier used is a **Stack**, which follows the **Last-In-First-Out** policy.

```
create frontier : Stack

insert Node(initial_state) to frontier:

while frontier is not empty:
	node = frontier.pop()
	if node.state is goal:
		return solution

	for action in actions(node.state):
		next_state = transition(node.state, action)
		frontier.add(Node(next_state))

return failure
```


> [!tldr] Analysis
> 
> **Time complexity** (number of nodes generated): Exponential with regards to the maximum depth of the search tree.
> **Space complexity**: Polynomial with regards to the maximum depth of the search tree
> **Completeness**: Not complete, when depth of search tree is infinite (action is reversible)
> **Optimality**: Not optimal, solution may be in a shallower depth.

For finite state spaces that are trees, DFS is efficient and complete.
However, 
- for acyclic state spaces, it may end up expanding the same state many times via different paths
- for cyclic state spaces, it can get stuck in an infinite loop, meaning implementations might need to check nodes for cycles.

DFS however only has a space complexity of $O(bm)$, making it much more efficient with regards to memory requirements.

# Search with visited memory

```
create frontier
create visited

insert Node(initial_state) to frontier:

while frontier is not empty:
	node = frontier.pop()
	if node.state is goal:
		return solution

	if node.state in visited:
		continue
	visited.add(state)

	for action in actions(node.state):
		next_state = transition(node.state, action)
		frontier.add(Node(next_state))

return failure
```

# Depth-limited search (DLS)

The DLS limits the search to a certain depth $l$, and backtracks when the limit is hit.

> [!tldr] Analysis
> 
> **Time complexity** (number of nodes generated): Exponential with regards to the depth limit
> **Space complexity** (size of frontier): Dependent on search algorithm (BFS/DFS/UCS)
> **Completeness**: Not complete, when depth of optimal solution is longer than depth specified.
> **Optimality**: Dependent on search algorithm (BFS/DFS/UCS).

# Iterative Deepening Search (IDS)

An IDS uses the DLS, iteratively increasing the depth limit from 0 to infinity until the solution is found.

> [!tldr] Analysis
> 
> **Time complexity** (number of nodes generated): Exponential with regards to the depth limit
> **Space complexity** (size of frontier): Dependent on search algorithm (BFS/DFS/UCS)
> **Completeness**: Complete
> **Optimality**: Complete

In general, iterative deepening is the preferred uninformed search method when 
- search state space is larger than can be fit in memory
- depth of solution is unknown