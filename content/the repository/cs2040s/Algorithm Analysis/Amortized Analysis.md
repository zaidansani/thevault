---
title: Amortized Analysis
tags:
  - algorithm_analysis
  - CS2040S
---
> [!summary] 
> Used for algorithms where an occasional operation is very slow, but most of the other operations are faster.

An operation has **amortized cost** $T(n)$ if for every integer $k$, the cost of $k$ operations is $\leq kT(n)$

$$
k \text{ operations } \leq kT(n) \; \forall k\implies T(n)
$$

---

> [!example] Example of amortized cost:
> 
> The following example here has a amortized cost $7$.

| operation         | cost | total | avg    |
| ----------------- | ---- | ----- | ------ |
| insert            | 5    | 5     | 5 <= 7 |
| insert            | 5    | 10    | 5 <= 7 |
| insert            | 5    | 15    | 5 <= 7 |
| insert + *resize* | 13   | 28    | 7 <= 7 |
| insert            | 7    | 35    | 7 <= 7 |

---

# Difference between average cost and amortized cost

Even though there are scenarios in which the amortized cost is the same as the average cost, it is **not necessary** that the amortized cost is the same as the average cost.

If the set of operations are arranged to a point where the more expensive operations happen more at the beginning of the set of operations, the amortized cost becomes a **conservative estimate** of the average cost, and is not necessarily equal to the average cost.