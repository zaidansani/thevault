---
tags: [ST2334, statistics]
title: Basic Concepts of Probability
---
# Concepts and Definition

>[!info] Statistical experiment
>Any procedure that produces data or observations.

>[!info] Sample space $S$
> All the possible outcomes
> 
> The sample space is itself an event and called a **sure event**.
> The null space {} is itself an event and called a **null event**.

>[!info] Sample points
>A possible outcome (element) in sample space

>[!info] Event
>A subset of sample space

# Probability Theory

**Event Operations**
- Union $A \cup B = { x: x \in A \text { or } x \in B }$
- Intersection $A \cap B = { x: x \in A \text { and } x \in B }$
- Complement $A' = \{x: x \in U$ and $x \notin A\}$

**Event Relationships**
- Mutually Exclusive/Disjoint: if $A \cap B = \emptyset$
- Contained: $A$ is contained in $B$ if $A \subset B$
- Equivalent: if $A \subset B$ and $B \subset A$, $A = B$.

> [!IMPORTANT] De Morgan's Law
> $(A \cap B)' = A' \cup B'$
> $(A \cup B)' = A' \cap B'$

Event Operations:
- $A \cap A' = \emptyset$
- $A \cap \emptyset = \emptyset$
- $A \cup A' = S$
- $(A')' = A$
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ *Distributive Law*
- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ *Distributive Law*
- $A \cup B = A \cup (B \cap A')$
- $A = (A \cap B) \cup (A \cap B')$

**Multiplication Principle**
If $r$ different experiments are to be performed sequentially with $n$ outcomes, there are $n_1n_2...n_r$ number of possible outcomes.

**Addition Principles**
If an experiment can be done in $k$ different procedures that **do not overlap**, there are $k_1 + k_2....$ 

**Permutation**
The selection and arrangement of $r$ objects out of $n$. Order **is taken into consideration**
$P^n_r =  \frac{n!}{(n-r)!} = n(n-1)(n-2)..(n-(r-1))$

**Combination**
The selection of $r$ objects out of $n$ where order is **not taken into consideration**
${n \choose r} = \frac{P^n_r}{P^r_r} = \frac{n!}{r!(n-r)!}$

# Probability

> [!defdefinition] Probability
> 
> Understood as the chance or how likely a certain event may occur.

Can be interpreted as relative frequency: $f_A =  \frac{n_A}{n}$

Can be defined on the probability space with the axioms:
- $0 \leq P(A) \leq 1$
- $P(S) = 1$
	- Probability of sample space (sample event) is 1
- $P(A \cup B) = P(A) + P(B)$ 
	- Probability of two mutually exclusive events happening (using addition rule)

## Basic Properties of Probability

1. **Proposition 2** Probability of the empty set $\emptyset$ is $P(\emptyset) = 0$ 
2. **Proposition 3** If $A_1, A_2,....$ are mutually exclusive events, that is $A_i \cap A_j = \emptyset$ for any $i = j$, then 
   $P(A_1 \cup A_2 \cup ...) = P(A_1) + P(A_2) + ...$
3.  **Proposition 4** For any event A, $P(A') = 1 - P(A)$
4.  **Proposition 5** For any events $A, B$, $P(A) = P(A \cap B) + P(A \cap B')$
5.  **Proposition 6** For any two events $A,B$, the inclusion exclusion principle holds:

> [!important] Inclusion Exclusion Principle
> 
> $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

6. **Proposition 7** If $A \subset B$, then $P(A) \leq P(B)$.

> [!info] Finite Sample Space with Equally Likely Outcomes
> 
> If there is a sample space with $k$ events (e.g $S = \{a_1,...a_n\}$) where all outcomes are equally likely to occur, for any event $A \subset S$, $P(A) = \frac{\text{sample points in A}}{\text{sample points in S}}$.

# Conditional Probability

Useful for computing the probability of some events when some partial information is available. Specifically useful for computing the probability of event $B$ given an event $A$ has occured.

> [!defdefinition] Conditional Probability
> The conditional probability $P(B|A)$ is the conditional probability of the event $B$ given that event $A$ has occurred.
> 
> For any two events $A, B$ with $P(A) > 0$, the conditional probability of $B$ given that $A$ has occurred is
> $P(B|A) = \frac{P(A \cap B)}{P(A)}$

$A$ can then be considered here as a reduced sample space. 
![[media/Drawing 2024-08-14 04.55.13.excalidraw.svg]]

Using the **multiplication rule**, we can get:
$$
P(A \cap B) = P(A)P(B|A) \text{ if } P(A) \neq 0
$$
or
$$
P(A \cap B) = P(B)P(A|B) \text{ if } P(B) \neq 0
$$

The **inverse probability formula also states**:
$$
P(A|B) = \frac{P(A)P(B|A)}{P(B)}
$$

# Independence

Independence refers to whether an event affects the other event. For example, $A$ is independent from $B$, if learning that $B$ occurred does not affect the probability of $A$ occurring.

> [!defdefinition] Independence
> Two events $A$ and $B$ are independent if and only if
> $$
> P(A \cap B) = P(A)P(B)
> $$
> 
> This can also be written as:
> $$A \perp B \Leftrightarrow (P(A \cap B) = P(A)P(B)))$$
> 
> If A and B are not independent, they are dependent, noted as $A \not \perp B$

Thus, from this, if $P(A) \neq 0$,
$$
A \perp B \iff P(B|A) = P(B)
$$

> [!note] Conditional probability
> 
> If $A, B$ are independent, 
> $$
> P(A|B) = P(A), P(B|A) = P(B)
> $$
# Law Of Total Probability

> [!defdefinition] Partition
> If $A_1, ..., A_n$ are mutually exclusive events, and $\cup^n_{i=1}A_i = S$, the set $A_1,...A_n$ is a partition of $S$.

Thus, we get the theorem:
> [!important] Theorem 11: Law Of Total Probability
> If the set $A_1,...A_n$ is a partition of $S$, then for any event $B$,
> $$
> P(B) = \sum^{n}_{i=1}P(B \cap A_i) = \sum^{n}_{i=1}P(A_i)P(B|A_i)
> $$
> 
> > [!info] Special Case
> > For any events $A,B$,
> > $$
> > P(B) = P(A)P(B|A) + P(A')P(B|A')
> > $$

# Bayes Theorem

> [!important] Bayes' Theorem
> 
> Relates $P(A|B)$ to $P(B|A)$.
> 
> Let the set $A_1,...A_n$ be a partition of $S$, then for any event $B$ and $k = 1, 2, ..., n$
> $$
> P(A_k | B) = \frac{P(A_k)P(B|A_k)}{\sum^n_{i=1}P(A_i)P(B|A_k)}
> $$
> 
> >[!info] Special Case
> >When $n = 2$, ${A, A'}$ is a partition of $S$
> >$$
> >P(A|B) = \frac{P(A)P(B|A)}{P(A)P(B|A) + P(A')P(B|A')}
> >$$

The Bayes' Theorem is derived from [Conditional Probability](#Conditional%20Probability), multiplication rule, and the [Law Of Total Probability](#Law%20Of%20Total%20Probability).

$$
\begin{aligned}
P(A_k|B) & = \frac{P(A_k \cap B)}{P(B)} & \text{conditional probability}\\
& = \frac{P(A_k)P(B|A_k)}{\sum^n_{i=1}P(B \cap A_i)} & \text{multiplication rule on numerator} \\
& = \frac{P(A_k)P(B|A_k)}{\sum^n_{i=1}P(A_i)P(B|A_k)} & \text{law of total probability on denominator}
\end{aligned}
$$