---
title: Probability
tags:
  - statistics
  - ST1131
---
# Concepts

> [!info] Sample space
> Set of all possible outcomes of a random phenomenon - usually denoted by the letter $S$.

> [!info] Event
> A subset of the sample space $S$ corresponding to a particular outcome or a group of possible outcomes.

Given two events $A, B$:
- **Union** $A \cup B$ - contains all outcomes belonging to $A, B$ or both
- **Intersection** $A \cap B$ - contains of all outcomes common to both $A,B$
- **Complement** $A^{c}$ - consists of all outcomes not in $A$
- **Mutually exclusive** $A \cap B = \emptyset$ 

---
# Probability

> [!info] Probability
> Proportion of times that an event occurs, in a long run of trials.
## Axioms

- $P(A) \geq 0$
- $P(S) = 1$
- If $A,B$ are mutually exclusive, then $P(A \cup B) = P(A) + P(B)$.
- If $A_{1}, A_{2}, ...$ is pairwise mutually exclusive then $P(A_{1} \cup A_{2} \cup ...) = P(A_{1}) + P(A_{2}) + ....$
- **Additive Law of Probability** $P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$

## Independence

Two events are **independent** if:
$$
P(A \cap B) = P(A)P(B)
$$
Independence implies that two events do not influence each other.

## Conditional Probability

The **conditional probability** of $A$ given $B$ is defined to be:
$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$
## Law of Total Probability

If $B_{1}, B_{2}, ..., B_n$ are mutually exclusive events within a sample space, where $B_{1} \cup B_{2} ... \cup B_{n} = S$, $B_{1}, B_{2}, ..., B_n$ are said to partition the sample space $S$.

Then, for any event $A$, we have:
$$
P(A) = \sum\limits^{n}_{i = 1} P(A \cap B_i)
$$

## Bayes Theorem

Given two events, $A,B$ on the sample space $S$ where $P(A) > 0$, then
$$
P(B|A) = \frac{P(B) \times P(A|B)}{P(A)}
$$

Suppose $B_{1}, B_{2}, ..., B_n$ partition the sample space $S$.
$$
\begin{align}
P(B_{i}|A) = & \frac{P(B_{i} \cap A)}{P(A)} \\
= & \frac{P(A|B_{i})P(B_{i})}{P(A)} \\
= & \frac{P(A|B_{i})P(B_{i})}{\sum\limits^{n}_{i = 1} P(A \cap B_{i})}\\
= & \frac{P(A|B_{i})P(B_{i})}{\sum\limits^{n}_{i = 1} P(A|B_{i})P(B_{i})}
\end{align}
$$

## Epidemiological Terms

> [!info] Sensitivity
> The probability that the test is positive, given that the person has a disease.

$$
Sen = P(+|D)
$$

> [!info] Specificity
> The probability that the test is negative, given that that the person does not have the disease.

$$
Spec = P(- | D^C)
$$


> [!info] Prevalence
> The number of people who currently have the disease, divided by the number of people in population.

$$
Prevalence = P(D)
$$
### Confusion Matrix

Adapted from [Wikipedia](https://en.wikipedia.org/wiki/Sensitivity_and_specificity).

| P + N      | Predicted +ve | Predicted -ve |
| ---------- | ------------- | ------------- |
| Actual +ve | TP            | FN            |
| Actual -ve | FP            | TN            |
$$
\begin{align*}
Prevalence &= \frac{P}{P+N}\\
Accuracy &= \frac{TP+TN}{P+N}\\
\\
PPV &= \frac{TP}{PP} \\
NPV &= \frac{TN}{PN} \\
\\
TPR &= \frac{TP}{P}\\
FNR &= \frac{FN}{P}\\
FPR &= \frac{FP}{N}\\
TNR &= \frac{TN}{N}\\
 
\end{align*}
$$
