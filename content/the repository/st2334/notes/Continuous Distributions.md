---
tags: [ST2334, statistics]
title: Continuous Distributions
---
Natural random variables have sets of uncountable possible values.

# Continuous Uniform Distribution

> [!definition] Continuous Uniform Distribution
> 
> A random variable $X$ is said to follow a uniform distribution over the interval $(a,b)$ if the probability density function is given by:
>$$
>f_{X}(x) = \begin{cases} \\
>\frac{1}{b-a} & a \leq x \leq b \\ \\
> 0& otherwise \\
> \end{cases}
> $$
> Then, $X$ is denoted $X \sim U(a, b)$. 

It can be shown then, that 
$$
E(X) = \frac{a+b}{2}, V(X) = \frac{(b-a)^{2}}{12}
$$
![](media/Pasted%20image%2020240905162657.png)

The probability density function looks like the above graph, where every point $x \in [a, b]$  has the same probability $P(x) = \frac{1}{b-a}$.

# Exponential Distribution

> [!definition] Exponential Distribution
> A continuous random variable $X$ is said to follow an exponential distribution with parameter $\lambda > 0$ if probability density function is given by:
> $$
> f_{X}(x) = \begin{cases}
> \lambda e^{-\lambda x} & x \geq 0 \\
> 0 & x \leq 0
> \end{cases} 	
> $$
> 
> $X \sim Exp(\lambda)$

It can then be shown that 
$$
E(X) = \frac{1}{\lambda}, V(X) = \frac{1}{\lambda^{2}}
$$
> [!note] Alternative form
> $$
> f_{X}(x) = \begin{cases}
> \frac{1}{\mu}e^{\frac{-x}{\mu}} & x \geq 0 \\
> 0 & x \leq 0 \\
> \end{cases} 
> $$
> where $E(X) = \mu$

The cumulative distribution function can be derived using the integration of the probability density function:
$$
\begin{aligned}
F_{X}(x) & = P(X \leq x) \\
& = \int^{x}_{0}\lambda e^{-\lambda t}dt \\
& = [-e^{-\lambda t}]^{x}_{0} \\
& = 1 - e^{-\lambda x}
\end{aligned}
$$
for $x \geq 0$.

```R
# calculating exponential probability

dexp(x, lambda) # f(x)
pexp(x, lambda) # P(X <= x)
pexp(x, lambda, lower.tail = F) # P(X > x)
```

> [!theorem] Theorem 15
> 
> Suppose that $X$ has an exponential distribution with $\lambda > 0$.
> 
> For any two positive numbers $s, t$, 
> $$
> \begin{aligned}
> P(X > s + t | X > s) = P(X > t)
> \end{aligned}
> $$

The interpretation of the above theorem is that the exponential distribution is "memoryless".
It means that given two values $t > s$, $P(X > t)$ is the same as the conditional probability of a conditional probability with the same offset $P(X > s + t | X > s)$.

![](media/Pasted%20image%2020240905170749.png)

> [!example] 
> Assume the life length of a bulb follows the exponential distribution; $X \sim Exp(\lambda)$,
> 
> If the bulb has lasted for $2$ hours, the probability that it will last for another $1$ hour (given the previous information) $P(X > 3|X > 2)$ is the same as the probability it will last for $1$ hour $P(X > 1)$ given it is brand new.
# Normal Distribution

> [!definition] Normal distribution
> 
> A random variable $X$ is said to follow a normal distribution with parameters $\mu, \sigma^2$ if its probability density function is given by:
> 
> $$
> f_{X}(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{\frac{-(x-\mu)^{2}}{2 \sigma^{2}}}, -\infty < x < \infty
> $$
> 
> It is then denoted $X \sim N(\mu, \sigma^{2})$

It can be then shown that:
$$
E(X) = \mu, V(X) = \sigma^{2}
$$

The probably density function of the normal distribution is
- positive over the whole real line
- symmetrical about $x = \mu$
- bell-shaped

![[media/Drawing 2024-09-08 21.11.49.excalidraw.svg]]
%%[[media/Drawing 2024-09-08 21.11.49.excalidraw.md|🖋 Edit in Excalidraw]]%%

## Properties

1. The total area under the curve above the horizontal axis is equal to $1$.
$$
	\int^{\infty}_{-\infty}f_{X}(x)dx = {\int^{\infty}_{-\infty}}\frac{1}{\sigma\sqrt{2\pi}}e^{[\frac{-(x-\mu)^{2}}{2\sigma^{2}}]}dx= 1
$$
- This validates that $f_X$ is a probability density function.
2. Normal curves are identical in shape if the $\sigma^{2}$ is the same, but are centered at different points if the $\mu$ is different.
3. As $\sigma$ increases, the curve flattens. (and vice versa)
4. Given that $X \sim N(\mu, \sigma^{2})$,
$$
	Z = \frac{X -\mu}{\sigma}
$$
then $Z$ follows the $N(0, 1)$ distribution.
$$
	E(Z) = 0, V(Z) = 1
$$
Z has a standard normal distribution, and the probability density function is given:
$$
	f_{Z(z)}= \frac{1}{\sqrt{2\pi}}e^{(\frac{-z^{2}}{2})}
$$

> [!note] Calculating normal probabilities
> Difficult as there is no close formula, and computation relies on numerical integration (since it is a continuous variable).
> 
> Thus to calculate probabilities:
> 1. Transform the distribution into a standard normal distribution  (i.e., Property 4)
> 2. Use the standard normal to calculate the probability

```R
dnorm(x, mu, sigma) #f(x);
pnorm(x, mu, sigma) #F(x) = P(X <= x)
pnorm(x, mu, sigma, lower.tail = F) # P(X > x)
```

> [!definition] Quantile
> The $\alpha^{\text{th}}$ quantile where $0 < \alpha < 1$ of a random variable $X$ is the number $x_{\alpha}$ that satisfies
> $$
> P(X \geq x_{\alpha}) = \alpha
> $$

 > [!note] $Z$ upper quantile
 > 
 > $z_\alpha$ denotes the $\alpha^{th}$ upper quantile of $Z \sim N(0, 1)$.
 > 
 > Common values include:
 > $$
 > z_{0.05} = 1.645,
 > z_{0.01} = 2.326 
> $$
> As the PDF of $z$ is symmetrical about $0$,
> $$
> P(Z \geq z_{\alpha)}= P(Z \leq -z_{\alpha)}= \alpha 
> $$

```R
# computing normal quantiles
qnorm(alpha, mu, sigma, lower.tail = F) # x_(alpha)
qnorm(alpha, mu, sigma) # x_(1-alpha)
qnorm(alpha, lower.tail = F) #z_-_alpha
qnorm(alpha) #z_(1-alpha)
``` 

## Approximation of Binomial

> [!important] Rule of thumb
> $$
> np > 5, n(1 - p) > 5
> $$

The normal approximation can be done as follows:
given $X \sim Bin(n, p), E(X) = np, V(X) = npq = np(1-p)$, as $n \rightarrow \infty$,
$$
	\begin{aligned}
	Z & = \frac{X-E(X)}{\sqrt{V(X)}} \\
	& = \frac{X-np}{\sqrt{np(1-p)}} \\ 
	Z & \sim N(0,1) \text{ (approximately)}
	\end{aligned}
$$


> [!note] Continuity correction
> 
> The continuity correction factor accounts for the fact that a normal distribution is continuous, and a binomial is not.
> Generally, it just subtracts or adds $0.5$ to the $x$ value.

$$
\begin{aligned}
P(x = k) & \approx P\left(k - \frac{1}{2} < X < k + \frac{1}{2}\right)\\
P(a \leq X \leq b) & \approx P\left(a - \frac{1}{2} < X < b + \frac{1}{2}\right)\\
P(a < X \leq b) & \approx P\left(a + \frac{1}{2} < X < b + \frac{1}{2}\right)\\
P(a \leq X < b) & \approx P\left(a - \frac{1}{2} < X < b - \frac{1}{2}\right)\\
P(a < X < b) & \approx P\left(a + \frac{1}{2} < X < b - \frac{1}{2}\right)\\
\text{generally, } \\
P(x \leq c) & \approx P(0 \leq X \leq c) \approx P\left(\frac{-1}{2} <X < c + \frac{1}{2}\right)\\
P(x > c) & \approx P(c \leq X \leq n) \approx P\left(c + \frac{1}{2} <X < n + \frac{1}{2}\right)\\
\end{aligned}
$$


