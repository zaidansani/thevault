---
tags:
  - statistics
  - ST2334
title: Random Variables
---
> [!info] Random variable
> Let $S$ be the sample space of an experiment. A function $X$, which assigns a real number to every $s \in S$ is called a random variable.

> [!info] Range space
> $$
> R_X = \{x | x = X(s), s \in S\}
> $$
> Each possible value $x$ of $X$ corresponds to an event that is a subset or element of the sample space $S$.

> [!note] Notation
> - upper case letters to denote random variables
> - lower case letters to denote observed values
# Probability Distribution

For this course, there are two main types of random variables.
1. Discrete random variables (number of values in $R_X$ is finite)
2. Continuous random variable (number of values in $R_X$ is infinite)
## Discrete random variables

> [!definition] Probability mass function for discrete variables
> For a discrete random variable $X$, define the probability mass function $f(x)$
> $$
> f(x) = \begin{cases}
> P(X = x) & \text{for } x \in R_X\\
> 0 &\text{for } x \notin R_X
> \end{cases}
> $$

![[media/discrete_random_variables.svg]]

Properties:
1. $f(x_i) \geq 0$ for all $x_i \in R_X$
2. $f(x) = 0$ for all $x \notin R_X$
3. $\sum^{\infty}_{i=1} f(x_i) = 1$ or  $\sum_{x_i \in R_X} f(x_i) = 1$

## Continuous random variables

> [!definition] Probability density function for continuous variables
> For a continuous random variable $X$, $f(x)$ is a probability density function that satisfies
> 1.  **Non-negativity** $f(x) \geq 0$ for all $x \in R_X$, $f(x) = 0$ for $x \notin R_X$
> 2. **Sum of all probabilities add up to 1** $\int_{R_X} f(x)dx=1$.
>    This particular condition can be represented as $\int^{\infty}_{-\infty} f(x)dx = 1$
> 3. For any $a, b$ where $a \leq b$ 
> $$
> P(a \leq X \leq b) = \int^b_a f(x)dx
> $$

The probability density function $f(x)$ describes the shape of the distribution.

> [!important] Checking probability density function
> It suffices to check conditions 1 and 2.
> 1. $f(x) \geq 0$ for all $x \in R_X$, $f(x) = 0$ for $x \notin R_X$
> 2. $\int_{R_X} f(x)dx=1$

Note that for any specific value of $x, x_0$, we have
$$
P(X = x_0) = \int^{x_0}_{x_0} f(x)dx = 0
$$
This is an example of: $P(A) = 0$, but $A$ is not necessarily $\emptyset$.

> [!remark] Inequalities
> 
> As $\int_a^b f(x)dx$ represents the area under the graph, it can be represented as
> 1. $P(a < X < b)$
> 2. $P(a \leq X < b)$
> 3. $P(a < X \leq b)$
> 4. $P(a \leq X \leq b$)
## Cumulative Distribution Function

> [!definition] Cumulative distribution function
> For any random variable $X$, the cumulative distribution function is defined by
> $$
> F(x) = P(X\leq x)
> $$
> 
> > [!important] Definition is applicable regardless of type of random variable (discrete or continuous)

> [!definition] Discrete random variables
> If $X$ is a discrete random variable,
> $$
> \begin{aligned}
>	F(x) & =  \sum_{t \in R_X; t \leq X} f(t) \\
>	& = \sum_{_t \in R_X; t \leq X} P(X = t)
> \end{aligned}
> $$
> For any two numbers $a < b$,
> $$
> P(a \leq X \leq b) = P(X \leq b) - P(X < a) = F(b) - F(a-)
> $$
> where $a-$ represents the largest value in $R_X$ smaller than $a$:
> $$
> F(a-) = \lim_{x \to a} F(x)
> $$

> [!definition] Continuous random variable
> If $X$ is a continuous random variable,
> $$
> F(x) = \int^x_\infty f(t)dt,
> $$
> and
> $$
> f(x)= \frac{dF(x)}{dx}
> $$
> 
> Further, 
> $$
> P(a \leq X \leq b) = P(a < X < b) = F(b) - F(a)
> $$

1. Regardless of type, $F(x)$ is non-decreasing.
$$
x_1 < x_2 \implies F(x_1) \leq F(x_2)
$$
2. Probability function and cumulative distribution are one-to-one correspondence. That is, for any probability function given, the cumulative distribution function is uniquely determined.
3. The ranges of $F(x)$ and $f(x)$ satisfy:
	1. $0 \leq F(x) \leq 1$
	2. for discrete distributions, $0 \leq F(x) \leq 1$
	3. for continuous, $f(x) \geq 0$ but not necessarily $f(x) \leq 1$.

> [!info] Properties
> 
> **Right-continuous**
> Cumulative distribution function is continuous except possibly for having some jumps.
> When there is a jump, the cumulative distribution function is continuous from the right.
> $$
> F(a) = \lim_{x \to a^+} F(x)
> $$
> 
> **Convergence to 0 and 1 in limits**
> $$
> \begin{aligned}
> \lim_{x \to -\infty} F(x) & = 0 \\
> \lim_{x \to \infty} F(x) & = 1
> \end{aligned}
> $$

> [!note] Title
> 
> Mention
# Probability Distribution

For this course, there are two main types of random variables.
1. Discrete random variables (number of values in $R_X$ is finite)
2. Continuous random variable (number of values in $R_X$ is infinite)
## Discrete random variables

> [!definition] Probability mass function for discrete variables
> For a discrete random variable $X$, define the probability mass function $f(x)$
> $$
> f(x) = \begin{cases}
> P(X = x) & \text{for } x \in R_X\\
> 0 &\text{for } x \notin R_X
> \end{cases}
> $$

![[media/discrete_random_variables.svg]]
%%[[media/discrete_random_variables.md|🖋 Edit in Excalidraw]]%%

Properties:
1. $f(x_i) \geq 0$ for all $x_i \in R_X$
2. $f(x) = 0$ for all $x \notin R_X$
3. $\sum^{\infty}_{i=1} f(x_i) = 1$ or  $\sum_{x_i \in R_X} f(x_i) = 1$

## Continuous random variables

> [!definition] Probability density function for continuous variables
> For a continuous random variable $X$, $f(x)$ is a probability density function that satisfies
> 1. $f(x) \geq 0$ for all $x \in R_X$, $f(x) = 0$ for $x \notin R_X$
> 2. $\int_{R_X} f(x)dx=1$
> 3. For any $a, b$ where $a \leq b$ 
> $$
> P(a \leq X \leq b) = \int^b_a f(x)dx
> $$

> [!important] Checking probability density function
> It suffices to check conditions 1 and 2.
> 1. $f(x) \geq 0$ for all $x \in R_X$, $f(x) = 0$ for $x \notin R_X$
> 2. $\int_{R_X} f(x)dx=1$

Note that for any specific value of $x, x_0$, we have
$$
P(X = x_0) = \int^{x_0}_{x_0} f(x)dx = 0
$$
This is an example of: $P(A) = 0$, but $A$ is not necessarily $\emptyset$.
## Cumulative Distribution Function

> [!definition] Cumulative distribution function
> For any random variable $X$, the cumulative distribution function is defined by
> $$
> F(x) = P(X\leq x)
> $$
> 
> > [!important] Remark
> > Definition is applicable regardless of type of random variable (discrete or continuous)

> [!definition] Discrete random variables
> If $X$ is a discrete random variable,
> $$
> \begin{aligned}
>	F(x) & =  \sum_{t \in R_X; t \leq X} f(t) \\
>	& = \sum_{_t \in R_X; t \leq X} P(X = t)
> \end{aligned}
> $$
> For any two numbers $a < b$,
> $$
> P(a \leq X \leq b) = P(X \leq b) - P(X < a) = F(b) - F(a-)
> $$
> where $a-$ represents the largest value in $R_X$ smaller than $a$:
> $$
> F(a-) = \lim_{x \to a} F(x)
> $$

> [!definition] Continuous random variable
> If $X$ is a continuous random variable,
> $$
> F(x) = \int^x_\infty f(t)dt,
> $$
> and
> $$
> f(x)= \frac{dF(x)}{dx}
> $$
> 
> Further, 
> $$
> P(a \leq X \leq b) = P(a < X < b) = F(b) - F(a)
> $$

1. Regardless of type, $F(x)$ is non-decreasing.
$$
x_1 < x_2 \implies F(x_1) \leq F(x_2)
$$
2. Probability function and cumulative distribution are one-to-one correspondence. That is, for any probability function given, the cumulative distribution function is uniquely determined.
3. The ranges of $F(x)$ and $f(x)$ satisfy:
	1. $0 \leq F(x) \leq 1$
	2. for discrete distributions, $0 \leq F(x) \leq 1$
	3. for continuous, $f(x) \geq 0$ but not necessarily $f(x) \leq 1$.

> [!info] Properties
> 
> **Right-continuous**
> Cumulative distribution function is continuous except possibly for having some jumps.
> When there is a jump, the cumulative distribution function is continuous from the right.
> $$
> F(a) = \lim_{x \to a^+} F(x)
> $$
> 
> **Convergence to 0 and 1 in limits**
> $$
> \begin{aligned}
> \lim_{x \to -\infty} F(x) & = 0 \\
> \lim_{x \to \infty} F(x) & = 0
> \end{aligned}
> $$

# Expectation

The expectation of a random variable $X$ (denoted either $\mu_X$ or $E(X)$)is the ==average value of it== if the corresponding experiment is repeated many times.

> [!definition] Expectation: Discrete random variable
> 
> Let $X$ be a discrete random variable with $R_X = \{x_1, x_2, ...\}$ and a probability function $f(x)$. The expectation or mean is then defined:
> $$
> \mu_X = E(X) = \sum_{x_i \in R_X} x_if(x_i)
> $$

> [!definition# Expectation

The expectation of a random variable $X$ (denoted either $\mu_X$ or $E(X)$)is the ==average value of it== if the corresponding experiment is repeated many times.

> [!definition] Expectation: Discrete random variable
> 
> Let $X$ be a discrete random variable with $R_X = \{x_1, x_2, ...\}$ and a probability function $f(x)$. The expectation or mean is then defined:
> $$
> \mu_X = E(X) = \sum_{x_i \in R_X} x_if(x_i)
> $$

> [!definition] Expectation: Continuous random variable
> 
> Let $X$ be a continuous random variable with a probability function $f(x)$. The expectation or mean is then defined:
> $$
> \mu_X = E(X) = \int^\infty_{-\infty} xf(x)dx = \int_{x \in R^X}xf(x)dx
> $$

Note that the mean of $X$ is not necessarily a **possible** value of the random variable $X$:
- the expectation of rolling a dice may not be any of the values {1, 2, 3, 4, 5, 6}

> [!info] Properties
> 1. Let $X$ be a random variable, and let $a, b$ be any real numbers ($a, b \in \mathbb{R}$).
> $$
> E(aX + b) = aE(X) + b
> $$
> 2. Let $X, Y$ be two random variables. We have:
> $$
> E(X + Y) = E(X) + E (Y)
> $$
> 3. Let $g(\cdot)$ be an arbitrary function.
> 	- if $X$ is a discrete random variable with probability mass function $f(x)$ & range $R_X$,
> 	$$
> 	E[g(X)] = \sum_{x \in R_X} g(x)f(x)
> 	$$
> 	- if $X$ is a continuous random variable with probability density function $f(x)$ & range $R_X$,
> 	$$
> 	E[g(X)] = \int_{R_X} g(x)f(x)
> 	$$

We can then derive the following from properties (1) and (2): for constants $a_1,... a_k$, and random variables $X_1,...,X_k$:
$$
E(a_1X_1 + .. + a_kX_k) = a_1E(X_1) + ... + a_kE(X_k)
$$
# Variance

> [!info] Variance
> The variance of a random variable $X$ is defined:
> $$
> \sigma^2_x = V(X) = E(X - \mu_X)^2
> $$
> An alternative formula also can be used:
> $$
> V(X) = E(X^2) - [E(X)]^2
> $$

This definition applies regardless of the type of variable (whether $X$ is discrete, or continuous).

If $X$ is a discrete random variable with probability mass function $f(x)$ and range $R_X$:
$$
V(X) = \sum_{x \in R_X}(x - \mu_X)^2f(x)
$$

If $X$ is a continuous random variable with probability density function $f(x)$:
$$
V(X) = \int^{\infty}_{-\infty}(x - \mu_X)^2f(x)dx
$$

The variance of a variable is non-negative:
$$
V(X) \geq 0 \; \forall \; X
$$

Equality holds if & only $P(X = E(X)) = 1$, that is when $X$ is a constant.

Let $a, b$ be any real numbers, then:
$$
V(aX + b) = a^2V(X)
$$

The positive square root of the variance is defined as the **standard deviation** of $X$:
$$
\sigma_X = \sqrt{V(X)}
$$
