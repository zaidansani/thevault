---
title: Uninformed Search
tags:
  - CS2109S
  - artificial_intelligence
  - searching
---

> [!abstract] Local search
> Useful, when instead of finding paths through search space, the intention is to just find a valid final state.
> 
> > [!example]
> > 8-queens problem - trivial to reconstruct steps to create a valid configuration, but the importance is finding the valid configuration.

Local search algorithms operate by searching from a start state to neighboring states, without keeping track of the paths, nor the set of states, that have been reached. 

The key advantages are:
- they use **very little memory**
- they can often **find reasonable solutions in large or infinite state spaces** for which systematic algorithms are unsuitable
- they can solve optimisation problem in which the aim is to find the best state according to an objective function

Types of problems this would be useful for:
- Very large state space
- Good enough solution is preferable, rather than no solution

> [!note] Any-time property
> The longer the runtime, the better the solution found.
# Types

**Pertubative search**
- search space: complete candidate solutions
- search step: modification of one/more solutions

**Constructive search**
- search space: partial candidate solutions
- search step: extension with one/more solution components
# Problem Formulation

- States
- Initial State: a candidate solution
- Goal Test
- **Successor Function**
- **Evaluation Functions**

> [!important] The state space may not directly map to an actual problem state.

The other parts are similar, but the **successor function** refers to possible states from a state (and replaces the **actions** from uninformed/informed search)

Evaluation functions output the value/goodness of a state, and is also called an **objective function**.

## State-Space Landscape

Consider: the states of a problem laid out in a state-space landscape. Each state has an elevation corresponding to an objective function.

If the aim is
- to find the highest peak (a **global maximum**), this is called **hill climbing**
- to find the lowest valley (elevation corresponding to cost) (a **global minimum**), this is called gradient descent

# Hill-Climbing Search

```
current = initial

while True:
	neighbor = a highest-valued successor of current
	if value(neighbor) <= value(current):
		return current
	current = neighbour
```

Hill-climbing effectively grabs a good neighbour state without thinking ahead about where to go next - but can get stuck for the following reasons:
- **Local maxima** - the peak is higher than each of its neighbouring states, but lower than the global maximum. This causes the algorithm to go towards this peak, but then be stuck with nowhere to go (since it is a local maxima)
- **Ridges** - a sequence of local maxima
- **Plateau** - a flat area of the state-space landscape (a flat local maximum, from which no uphill exit exists) or a shoulder (from which progress is possible)
# Simulated Annealing

> [!abstract] Motivation
> A hill-climbing algorithm that never makes "downhill" moves towards states with lower value is vulnerable to get stuck in a local maximum. However, a purely random walk will eventually stumble upon the global maximum, but will be extremely inefficient.
> 
> Thus, a combination of this should help in yielding efficiency and completeness.

The overall structure of the simulated annealing algorithm is similar to hill climbing, but instead of picking the best move, it picks a **random** move.

The criteria for accepting the move is
- if it helps the situation, it is picked
- otherwise, it is accepted with some probability (non-1)
	- probability decreases exponentially with the badness of the move, the amount $\Delta E$ by which evaluation is worsened
	- decreases as $T$ goes down, bad moves are likely to be allowed at the start when T is high, and they become more unlikely as $T$ decreases.
	- if the schedule lowers $T$ to $0$ slowly enough, then a property of the Boltzmann distribution, $e^\frac{\Delta{E}}{T}$.

```
current = initial
T = a large positive value

while T > 0:
	next = a highest-valued successor of current
	if value(next) <= value(current):
		current = next
	else:
		with probability P(current, next, T): current = next
	decrease T
return current
```