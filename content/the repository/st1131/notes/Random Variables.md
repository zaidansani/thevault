---
publish: true
title: Random Variables
---



> [!info] Random variable
> Numerical measurement of outcome of an experiment.

> [!info] Probability distribution
> Specifies possible values and their probabilities.

| Z    | 0   | ... | ... | ... | ... | Total |
| ---- | --- | --- | --- | --- | --- | ----- |
| P(Z) | ... | ... | ... | ... | ... | 1     |

---

# Discrete Random Variable

> [!info] Discrete random variable
> Takes on a set of separate value {0, 1, 2, 3, ...}. 
> Probability distribution assigns a probability $p_x$ to each possible value of $X$.

- Sum of the probabilities for all the possible values equals $1$.

## Mean of discrete variable

**Mean** of discrete random variable $X$ is denoted by $u$:
$$
\mu = E(X) = \sum\limits_{x}xP_X
$$
Properties of the mean:
- **Linear transformation** 
  $E(X) = \mu$. Let $Y = bX + a$, where $b, a$ are known constants:
	- $E(Y) = bE(X) + a = b\mu + a$
- If $X_{1}, X_{2}, ....$ are $n$ random variables with means $\mu_{1}, \mu{2}, ...$ and $a_1,a_2,...$ are known constants
	- $E(a_1X_{1} + a_2X_{2} + ...) = a_1\mu_{1} + a_2\mu_{2} + ...$
- If $X_{1}, X_{2}, ....$ denote $n$ random variables identically distributed
	- Same probability distribution
	- Same mean $\mu$
	- $E(\bar{X})=\frac{1}{n}\sum\limits^{n}_{i=1}E(X_i)=\mu$

## Variance of discrete variable

**Variance** of a discrete random variable $X$ is denoted by $\sigma^2$:
$$
\sigma^{2}=\sum\limits_{x}(x-\mu)^2p_X
$$
Properties of the variance:
- **Linear transformation** 
  $X$ is a random variable with variance $\sigma^2$. Let $Y = bX + a$, where $b, a$ are known constants:
	- $Var(Y) = b^{2}Var(X) = b^2\sigma^2$
- If $X_{1}, X_{2}, ....$ are $n$ random variables with means $\mu_{1}, \mu{2}, ...$ and $a_1,a_2,...$ are known constants
	- $Var(a_1X_{1} + a_2X_{2} + ...) = a_1\sigma_{1}^{2} + a_2\sigma_{2}^{2} + ...$
- If $X_{1}, X_{2}, ....$ denote $n$ random variables identically distributed
	- Same probability distribution
	- Same variance $\sigma^2$
	- $Var(\bar{X})=\frac{1}{n^2}\sum\limits^{n}_{i=1}\sigma^2=\frac{\sigma^2}{n}$
	
---
# Continuous Random Variable

> [!info] Continuous random variable
> Has possible values that form an interval

> [!info] Probability density function (pdf)
> The curve that determines the probabilities of intervals. Specifies the probability distribution.

## Mean of continuous variable

Mean of a continuous random variable $X$ which has *pdf* $f(x)$ is denoted by Greek letter $\mu$
$$
\mu = \int xf(x)dx
$$
## Variance of continuous variable

Variance of continuous random variable $X$ which has *pdf* $f(x)$ is denoted by Greek letter $\sigma^2$
$$
\sigma^{2} = \int (x-\mu)^2f(x)dx
$$
## Quantile or percentile

For a continuous random variable $X$, the $100p-$th quantile, $q_p$ is a value such that
$$P(X \leq q_{P})= p$$
