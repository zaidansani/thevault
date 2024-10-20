---
title: Sampling Distribution
tags: [ST1131, statistics]
---
# Central Limit Theorem

> [!note] Central Limit Theorem
> With $n$ independent observations with mean $\mu$ and variance $\sigma^2$, and $n >= 30$, sample mean is approximated by a normal distribution.

$$N(\mu, \frac{\sigma^2}{n})$$

# Sampling Distribution of Sample Proportion

With a random sample of size $n$ which has $\hat{p}$ calculated as:
$$
\hat{p} = \frac{X_{1} + .... +X_n}{n}
$$
if $np(1-p) \geq 5$, distribution of $\hat{p}$ is approximated by
$$
N(p, \frac{p(1-p)}{n})
$$
# Sampling Distribution of Sample Mean

When the population distribution is **normally** distributed then,
- the histogram of $\bar X$ has normal distribution
- the variability of bell-shaped gets less as $n$ increases
- bell shapes are all centered at population mean $\mu$
- sampling distribution of $\bar X$ depends on $\mu, \sigma^{2}, n$

When population distribution is **not normally** distributed then,
- if $n \geq 30$, $\bar X$ is approximately normally distributed
	- $\bar X \sim N(\mu, \frac{\sigma^2}{n})$

Note that:
- histograms of $\bar{X}$ is still close to bell-shaped
- variability of the bell-shape gets less as we increase $n$
- bell-shapes centered at population mean $\mu$
- sampling distribution of $\bar X$ depends on $\mu, \sigma^{2}, n$


