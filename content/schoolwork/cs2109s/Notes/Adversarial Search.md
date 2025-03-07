---
{"publish":true,"tags":["CS2109S","artificial_intelligence","searching"],"title":"Adversarial Search","PassFrontmatter":true}
---

# Motivation

> [!tldr] Adversarial search
> Useful for competitive environments, in which two or more agents have conflicting goals, giving rise to adversarial search problems. 

- Fully observable
- Deterministic
- Discrete
- Terminal states exist
	- No infinite runs
- Two-player zero-sum
	- Zero-sum refers to the lack of win-win outcome - what is good for one player is just as bad for the other.
- Turn-taking

# Problem Formulation

- States
- Initial state
- **Terminal states**
- Actions
- Transition
- **Utility function**

**Terminal states** refer to when the states in which the game is over.

**Utility function** which defines the final numeric value to player $p$ when the game ends in terminal state $s$.
# Minimax

Expand function outputs a set of `(action, next_state)` pairs.
The terminal function `is_terminal` returns `true` if the state is terminal, `false` otherwise.

```
def minimax(state):
	v = max_value(state)
	return action in expand(state) with value v

def max_value(state):
	if is_terminal(state):
		return utility(state)
	v = -infty
	for action, next_state in expand(state):
		v = max(v, min_value(next_state))
	return v

def min_value(state):
	if is_terminal(state):
		return utility(state)
	v = infty
	for action, next_state in expand(state):
		v = min(v, max_value(next_state))
	return v
```

The idea of the minimax algorithm is that it assumes the opponent plays optimally and tries to minimise the player's value.

$$
Minimax(s) = 
\begin{cases}
utility(s, max) & \text{if Is-Terminal(s)} \\
max_{a\in{Actions(s)}}Minimax(Result(s, a)) & \text{if To-Move(s) = Max} \\
min_{a\in{Actions(s)}}Minimax(Result(s, a)) & \text{if To-Move(s) = Min} \\
\end{cases}
$$

In `max_value`, it assumes opponents play optimally, hence it gets the `min_value` of the next step, instead, and vice-versa until it hits a terminal state.

> [!abstract] Analysis
> Optimal and complete
## Alpha-Beta Pruning

> [!abstract] Motivation
> There is no point to explore the full game tree. Thus, it is good to prune some of the nodes so that less time is spent evaluating some nodes.

Alpha-beta pruning keeps track of the highest and lowest values the `MAX` player can obtain, essentially:
- $\alpha$ referring to the **highest-value** choice found so far at any choice point along the path at `MAX`
- $\beta$ referring to the **lowest-value** choice found so far at any choice point along the path at `MAX`

```
def alpha_beta_search(state):
	v = max_value(state, -infty, infty)
	return action in expand(state) with value v

def max_value(state, alpha, beta):
	if is_terminal(state):
		return utility(state)
	v = -infty
	for action, next_state in expand(state):
		v = max(v, min_value(next_state))
		alpha = max(alpha, v)
		if v >= beta:
			return v
	return v

def min_value(state, alpha, beta):
	if is_terminal(state):
		return utility(state)
	v = infty
	for action, next_state in expand(state):
		v = min(v, max_value(next_state))
		beta = min(beta, v)
		if v <= alpha:
			return v
	return v
```

> [!abstract] Analysis
> 
> Perfect ordering: 
> $$
> O(b^\frac{m}{2})
> $$
> 
> Note that doing alpha-beta pruning does not change the eventual solution of the algorithm.

## Using a Cutoff

To save time, if a good enough solution is enough, a cutoff can be used, which means the algorithm is terminated either when it hits terminal states, or a certain specified depth.

This is important in handling **large/infinite game trees**.

```
def minimax(state):
	v = max_value(state)
	return action in expand(state) with value v

def max_value(state):
	if is_cutoff(state):
		return eval(state)
	v = -infty
	for action, next_state in expand(state):
		v = max(v, min_value(next_state))
	return v

def min_value(state):
	if is_cutoff(state):
		return eval(state)
	v = infty
	for action, next_state in expand(state):
		v = min(v, max_value(next_state))
	return v
```

Note that the difference between this and regular minimax is that:
- `is_terminal` is replaced with `is_cutoff`
- `utility` is replaced with `eval`
## Evaluation Function

> [!note] Evaluation function
> Used to estimate the "goodness at the state"

To invent the heuristic, there are multiple ways
- relax the game (in principle, too costly in practice)
- expert knowledge
- learn from data
	- reinforcement learning, self play