---
title: Dynamic Programming
tags: [algorithms, CS2040S]
---
Dynamic programming is a type of computational thinking that has two key properties:
1. optimal sub-structure
   - optimal solution can be constructed from optimal solutions to smaller sub-problems.
2. overlapping sub-problems

Generally, dynamic programming allows for a formula to be derived to find a certain result in a scenario. 

> [!example] Prize Collecting
> 
> Let `P[v,k]` be the maximum prize that can be collected starting at `v` taking `k` steps.
> 
> `P[v, k]` can be considered as the maximum of `P[w, k - 1] + weight(e)` where `e` is an edge from `w` to `v`.
> 
> Thus, a formula can be derived.
> `P[v, k] = MAX{ P[w_1, k_1] + weight(v, w_1), ...... }`

# Approaches

## Bottom-down
1. Solve smallest problem
2. Combine smaller problems.
3. Repeat
4. Solve root problem
## Top-down
1. Start at root and recurse
2. Solve and memoize.

# General Strategy
1. Identify optimal substructure
2. Define sub-problems
3. Solve problems using sub-problems