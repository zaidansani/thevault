---
title: Searching
tags:
  - CS2109S
  - artificial_intelligence
  - searching
---
> [!definition] Search problem
> A type of problem where the goal is to find a state (or a path to a state) from a set of possible states by exploring various possibilities.
> > [!example] Path finding, puzzle solving

> [!definition] Search algorithm
> An algorithm that takes in a **search problem** as input, and returns a **solution/failure**.
> 
> > [!example] Linear search, Dijkstra

A search solution could be a sequence of actions or final state
- an **optimal** solution is a solution with least cost (/least number of steps).

For problems that can be solved by searching, the environment of the agent used is **fully-observable, deterministic, static, discrete**. Due to the nature of the environment, the agent only needs to look at the problem once, as the environment doesn't change.

Usually, the agent structure used for the agent is the **goal-based** agent.

To solve a problem using searching, the agent needs:
- a goal (or set of goals)
- a model of the environment 
- a search algorithm 

> [!note] Problem solving steps
> We can look at the steps largely as the following sequential procedure:
> 1. Goal Formulation
> 2. Problem Formulation
>    - States
>    - Initial State
>    - Goal state/test
>    - Actions
>    - Transition model
>    - Action cost function
> 3. Search
> 4. Execute

Goal state/test depends on the problem - sometimes there is
- one goal state
- a small set of alternative goal sets
- goal is defined by a property that applies to many states
This can be accounted for by specifying a `is-goal` method for a problem

The actions available to the agent `actions(state)` returns a finite set of actions that can be executed at `state` - these actions are applicable at `state`. 

The transition model describes what each action does and gets the results from doing the specific action for that state.

When formulating the problem, the **representation invariant** must hold: the abstract states must have corresponding concrete states. What this means is that for every state formulated in the problem formulation, it must have a concrete state (a real representation of it).

> [!definition] Goal test
> A goal (for the goal-based model) defined via a function such as `is_goal(state)`

> [!definition] Actions
> A set `actions(state)` with size `|actions(state)|` (branching factor)

> [!definition] Transition model
> The `transition` should be so that it maps the old state to the new state, representatively `new_state = transition(old_state)`


> [!example] Trying to navigate to a specific place using a map (Bucharest)
> 
> **Goal Formulation**: 
> The goal is to reach Bucharest.
> 
> **Problem Formulation**: 
> Simplify the map into different cities, connecting the cities in a graph structure, with the edges being weighted edges representing the cost (distance between the cities).
> - States: Cities {at Sibiu, at Pitesti}
> - Initial State: at Sibiu
> - Goal State: at Bucharest
> - Actions: Go to neighbouring city
> - Transition Model: current state = selected city
> - Action Cost Function: Edges

> [!example] Sudoku
> 
> **Problem Formulation**: 
> - States: All possible assignments of numbers to a 9x9 matrix
> - Initial State: Partially filled matrix
> - Goal Test: All the constraints of Sudoku is satisfied
> - Actions: Filling the matrix
> - Transition Model: current state = filled matrix
> - Action Cost Function: 1 (doesn't matter)

# Search Algorithm

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

The frontier can be any data structure - queue, priority queue, or stack. It defines the search, and is used to determine what nodes are traversed to.
## Search Terms

> [!note] Problem vs search tree
> The graph structure to model the path is the problem.
> However, the search tree is the path taken to search through the problem.

> [!note] Node vs state

> [!definition] Path cost
> The cost of a path from any state to any state.
> > [!note] Optimal path cost
> > The cost of the **lowest-cost path** from any state to any state.

> [!definition] State space
> All possible configurations or states of a system

> [!definition] Search space
> Subset of the state space that will be searched
## Evaluation

Worst-case complexity is taken to evaluate the search algorithm.

> [!definition] Time complexity
> Number of nodes generated or expanded

> [!definition] Space complexity
> Maximum number of nodes in memory

The algorithm can be analysed thorugh its completeness and optimality.

> [!definition] Complete
> An algorithm is complete if,  for every problem instance,  it will find a solution if one exists.

> [!definition] Optimal
> An algorithm is optimal if, for every instance where it produces a solution, the solution is the best possible.

# Algorithms

- [Informed Search](Informed%20Search.md)
- [Uninformed Search](Uninformed%20Search.md)
- [Local Search](Local%20Search.md)
- [Adversarial Search](Adversarial%20Search.md)
## Tree-Search

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
## Graph-Search

```
create frontier
create visited

insert Node(initial_state) to frontier:

while frontier is not empty:
	node = frontier.pop()
	if node.state is goal:
		return solution
	if state in visited:
		continue
	visited.add(state)

	for action in actions(node.state):
		next_state = transition(node.state, action)
		frontier.add(Node(next_state))

return failure
```

