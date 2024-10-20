---
tags: [ST2334, statistics]
title: Discrete Distributions
---
> [!definition] Discrete Uniform Distribution
> If a random variable $X$ assumes the values $x_1,..., x_k$ with equal probability, then $X$ follows a discrete uniform distribution.
> 
> The probability mass function for $X$ is then given
> $$ f_X(x) = \begin{cases}
> \frac{1}{k} & x = $x_{1},..., x_k$ \\
> 0 & otherwise 
> \end{cases}
> $$

Thus, if $X$ follows the discrete uniform distribution as mentioned above,
 
 > [!theorem] Theorem 2
 > Suppose $X$ follows the discrete uniform distribution with $R_{X}=  \{x_{1}, .. , x_k\}$
 > 
 > The expectation of $X$ is then given: 
 > $$
 >\mu_{X} = E(X) = \sum\limits_{i=1}^{k}x_if_{X}(X_{i}) = \frac{1}{k}\sum\limits^{k}_{i=1}x_i
 > $$
 > The variance of $X$ is then given:
 > $$
 > \sigma_{X}^{2}= V(X) = E(X^{2}) - (E(X))^{2} = \frac{1}{k}\sum\limits^{k}_{i=1}x^{2}_{i}- \mu^{2}_{X}
 > $$
# Bernoulli Trials

> [!definition] Bernoulli trial
> A random experiment with only two possible outcomes.
> 
> The outcomes are generally coded:
> - 0: failure
> - 1: success

> [!definition] Bernoulli Random Variable
> 
> Let $X$ be the number of success in a Bernoulli trial. Then $X$ has only two possible values, 1 or 0, and is called a Bernoulli random variable.
> 
> Let $p$ denote the probability of success for a Bernoulli trial.
> 
> Then, $X$ has the probability mass function:
> $$
> f_{X}(x) = P(X = x) = \begin{cases}
> p & x = 1; \\
> 1 - p & x = 0; \\
> \end{cases}
> $$
> 
> This can also be written:
> $$
> f_{X}(x) = p^{x}(1-p)^{1-x}, \text{for } x=0,1
> $$

> [!remark] Notation
> We denote a Bernoulli random variable by $X  ~ Bernoulli(p)$, and $q = 1-p$.
> Then, the probability mass function becomes:
> $$
>f_{X}(1)=p, f_{X}(0) = q
> $$

> [!theorem] Theorem 5
> For a Bernoulli random variable $X$,
> $$
> \begin{aligned}
> \mu_{X} & = E(X) = p \\
> \sigma^{2}_{X} & = V(X) = p(1-p) = pq \\ 
> \end{aligned}
> $$

In certain instances, $f_X(x)$ may rely on one or more unknown quantities - where different values of the quantities lead to different probability distributions. These quantities are called **parameters**.

Thus, for the Bernoulli distribution, the parameter is $p$. 

> [!definition] Bernoulli Process
> A sequence of repeatedly performed independent and identical Bernoulli trials. 
> 
> Generates a sequence of independent and identically distributed Bernoulli random variables.

# Binomial Distribution

> [!definition] Binomial Random Variable
> 
> A **Binomial random variable** counts the number of successes in $n$ trials of a Bernoulli Process.
> 
> Suppose we have $n$ trials where:
> - probability of success for each trial is $p$
> - trials are independent.
>   
> Then, the number of successes denoted by $X$ has a binomial distribution $X \sim Bin(n, p)$.
> 
> The probability of getting exactly $x$ successes is given as:
> $$
> P(X = x) = {n \choose x} p^{x}(1-p)^{n-x}, \text{for } x = 0, 1, .., n
> $$
> It can be shown that $E(X) = np, V(X) = np(1-p)$

> [!remark]
> When $n = 1$, probability mass function for the binomial random variable $X$ is reduced to:
> $$
> f_{X}(X) = p^{x}(1-p)^{1-x}, \text{for } x = 0,1
> $$

```R
# computing binoms in R
pbinom(x, n, p) #P(X <= x);
pbinom(x, n, p, lower.tail = F) #P(X > x);
dbinom(x, n, p) #P(X = x)
```

# Negative Binomial Distribution

Consider a Bernoulli process, where the variable of interest is the **number of trials needed** so that $k$ number of successes occur.

> [!definition] Negative Binomial Distribution
> 
> The random variable $X$ is defined as the number of independent and identically distributed Bernoulli($p$) trials needed until the $k$th success occurs.
> 
> Then, $X$ follows a Negative Binomial distribution, denoted by $X \sim NB(k, p)$.
> 
> The probability mass function of $X$ is given by:
> $$
> f_{X}(x) = P(X = x) = {x - 1 \choose k - 1} p^{k}(1-p)^{x-k}, \text{for } x = k, k + 1, ...
> $$
> 
> Then,
> $$
> E(X) = \frac{k}{p}, V(X) = \frac{(1-p)k}{p^{2}}
> $$

The derivation of the $pmf$ of $X$ can be seen as follows:

The event $\{X=x\}$ refers to the event where $x$ trials is needed to get $k$ successes.
This event can be split into when
- There are $k - 1$ successes in the first $x - 1$ trials (define this event $A$)
- There is a success on the $x_{th}$ trial. (define this event $B$)

Then,
$$
P(X = x) = P(A \cap B) = P(A)P(B)
$$

$$
\begin{aligned}
P(A) &= {x - 1 \choose k} p^{k-1}(1-p)^{x-k} \\
P(B) &= p \\
\\
P(X = x) &= P(A)P(B) \\
&= {x - 1 \choose k} p^{k}(1-p)^{x-k}
\end{aligned}
$$


```R
# computing negative binoms in R
dnbinom(x - k, k, p) #P(X = x);
pnbinom(x - k, k, p) #P(X <= x);
pnbinom(x - k, k, p) #P(X > x);
```
# Geometric Distribution

Consider a Bernoulli process where the **random variable of interest** is the amount of Bernoulli ($p$) trials needed until first success occurs.

> [!definition] Geometric distribution
> 
> Let $X$ be the number of independent and identically distributed Bernoulli($p$) trials needed until the first success occurs. Then $X$ follows a Geometric distribution, denote by $X \sim Geom(p)$
> 
> The probability mass function of $X$ is given by:
> $$f_{x}(X) = P(X = x) = (1-p)^{x-1}p$$
> It then can be shown that:
> $$
>E(X) = \frac{1}{p}, V(X) = \frac{1-p}{p^{2}} 
> $$

# Poisson Distribution

> [!definition] Poisson random variable
> 
> The Poisson random variable $X$ denotes the number of events occuring in a fixed period of time or fixed region.
> 
> $X \sim Poisson(\lambda)$ is used to denote the distribution, where $\lambda > 0$ is the expected number of occurences during given period/region.
> 
> The probability mass function is:
> $$
> f_{X}(k) = P(X = k) = \frac{e^{-\lambda}\lambda^{k}}{k!}
>  $$

> [!definition] Poisson process
> A continuous time process, where the number of occurences within a given interval of time is counted.
> 
> The defining properties with rate parameter $\alpha$
> - the expected number of occurences in an interval of length T is $\alpha T$
> - no simultaneous occurences
> - number of occurences in disjoint time intervals are independent
>   
> The number of occurences follow a $Poisson(\alpha T)$ distribution.

## Poisson Approximation to Binomial

The Poisson random variable can be used for approximation of binomial random variable under certain conditions.

> [!definition] Poisson Approximation to Binomial
> 
> $X \sim Bin(n,p)$. Suppose that $n \rightarrow \infty, p \rightarrow 0$ such that $\lambda = np$ remains a constant.
> Approximately, $X \sim Poisson(np)$.
> 
> > [!note] Good approximation:
> > $n \geq 20, p \leq 0.05$ or $n \geq 100, np \leq 10$
> 
> $$
> \lim_{p\rightarrow{0};n\rightarrow{\infty}} P(X = x) = \frac{e^{-np}(np)^{x}}{x!}
> $$
> 

```R
# computing poisson probabilities

dpois(x, lambda) # P(X = x)
ppois(x, lambda) # P(X <= x)
ppois(x, lambda, lower.tail = F) # P(X > x)
```

