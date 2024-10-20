---
title: Common Distributions
tags: [ST1131, statistics]
---

# Binomial Distribution

> [!note] Binomial distribution
> Suppose:
> - $n$ trials - each of which have two possible outcomes
> - Each trial has same probability of success
> - $n$ trials are independent
>   
> The total number of successes in $n$ trials in a binomial random variable.

Probability of $x$ successes:
$$
P(X = x) = C^n_xp^x(1-p)^{n-x}
$$
$X \sim Bin(n,p)$
- Mean of $X$ is $E(x) = np$.
- Variance of $X$ is $Var(X) = np(1-p)$ 

---

# Poisson Distribution

> [!info] Poisson distribution
> Random variable $X$ follows Poisson distribution with parameter $\lambda$ if:

$$
P(X = k) = \frac{e^{-\mu}\mu^k}{k!}
$$ 

where 
- $e$ is approximately $2.71828$
- $\lambda$ is the expected no. of events per time unit
- $\mu = \lambda t$ is the expected no. of events over time period $t$

A binomial distribution with large $n$, small $p$ can be accurately approximated by a Poisson distribution with parameter $\mu = np$.
$$
X \sim B(n,p) \implies X \sim P(np)
$$

---

# Normal Distribution

> [!note] Normal distribution
> - symmetric
> - bell-shaped
> - characterized by mean $\mu$, variance $\sigma^2$

$$X \sim N(\mu, \sigma^2)$$

**Addition of normal variables**
If $X \sim N(\mu_{X}, \sigma^2_{X}), Y \sim N(\mu_{Y}, \sigma^2_Y)$
- $X + a \sim N(a + \mu_X,\sigma^2_X)$
- $X + Y \sim N(\mu_{X} + \mu_{Y},\sigma^2_{X} + \sigma^2_{Y})$

**Multiplying a constant to normal variables**
If $X \sim N(\mu_{X}, \sigma^2_{X}), Y \sim N(\mu_{Y}, \sigma^2_Y)$
- $aX \sim N(a\mu_{X,}a\sigma^2_X)$
- $aX + bY \sim N(a\mu_{X} + b\mu_{Y},a\sigma^2_{X} + b\sigma^2_{Y})$

**Standardisation of normal variables**
If $X \sim N(\mu, \sigma^2)$
- $Z = \frac{X - \mu}{\sigma} \sim N(0,1)$
- if $Z$-score is $<-3$ or $>3$, it is an outlier

## Normal Approximation to the Binomial Distribution

If the following conditions are satisfied, $B(n,p)$ tends to be symmetric and is well approximated by a normal distribution $N(np, np(1-p))$.
- $n$ is moderately large
- $p$ not too close to 0 or 1

Condition for approximation to be good:
$$
np(1-p) \geq 5
$$

