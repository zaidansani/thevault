---
title: Confidence Intervals
tags:
  - statistics
  - ST1131
---
> [!note] Statistical inference
> Making statistical inference about the population using sample data.
> Two main types of inference:
> - estimation
> - testing hypothesis

# Estimates

> [!note] Point and Interval Estimates
> **Point estimates** is a single number that is our best guess for the population parameter.
> **Interval estimates** are an interval of numbers within which the parameter value is believed to fall.

## Point Estimates

| Sample quantity | Population parameter                |
| --------------- | ----------------------------------- |
| $\bar X$        | $E(X)$ or equivalently $\mu$        |
| $s^2$           | $Var(X)$ or equivalently $\sigma^2$ |
| $s$             | $SD(X)$ or equivalently $\sigma$    |
| $X_{(0.5)}$     | $q_{0.5}$                           |

A point estimate does not provide identical estimates from different samples as
- the mean of the entire population is not considered
- a random sample is used
Thus, it does not provide an idea of how close it is to the value it estimates.

---
## Interval Estimates

> [!info] Confidence interval
> An interval containing the most believable values for a parameter. Probability that this method produces an interval that contains the parameter is the **confidence level**. 

$$ \text{point estimate } \pm \text{ margin of error}$$

> [!note] Margin of error
> Measures how accurate point estimate is likely to be in estimating the parameter. 
> A multiple of the standard deviation of the sampling distribution of the point estimate.

---
# Confidence Intervals
## Proportion

### Procedure

Let $x$ be confidence level. To find a $100x\%$ CI,
1. Find $\hat{p}$ from given sample
2. Ensure $n\hat{p}(1 - \hat{p})\geq 5$
3. Find $\alpha = 1 -x$
4. Find quantile $q_{1 - \alpha/2}$ from $N(0, 1)$.
   (also denoted as $Z_{\alpha/2}$)

$$
\begin{align}
MoE = & \; q_\frac{1-\alpha}{2}\times \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} \\
CI = & \; \hat{p} + MoE
\end{align}
$$

Factors affecting length of CI for $p$
- If confidence level is increased, interval becomes **wider**
- If sample size reduced, length of the confidence interval **increases**
- Mean $\mu$ of population distribution

### Determining $n$

If a $(1-\alpha)100\%$ CI with length is $\leq D$, then solving for $n$ gets:
$$
n \geq (\frac{2 \times q_{1-\alpha/2}}{D})^2p(1-p)
$$
If $p$ unknown, use $p = 0.5$, corresponding to the largest possible value of margin of error for a given $\alpha$.

---
## Mean
### t-distribution


From $\bar{X} \sim N(\mu, \frac{\sigma^2}{n})$, estimating $\sigma$ by $s$,
$$\frac{\bar{X}-\mu}{s/\sqrt{n}}\sim t_{n-1}$$
$t_{n-1}$ denotes a $t-$distribution with $(n-1)$ degrees of freedom.


The $t-$distribution has properties:
- symmetric about $0$
- the probabilities under the distribution depends on degrees of freedom $df$
- has thicker tails and more variability than $N(0,1)$
- larger the $df$, the closer $t-$distribution gets to $N(0,1)$
- when $df \geq 30$, $t_{df}$ is nearly identical to $N(0,1)$

### Procedure

Let $x$ be confidence level. To find a $100x\%$ CI,
1. Find $\bar{X}$ from given sample
2. Check assumptions
	1. Sample obtained by randomisation
	2. Distribution of data is approximately normal or symmetric
3. Find $\alpha = 1 -x$
4. Derive $t_{df, conflevel} = t_{n-1, 1 - \alpha/2}$

$$
\begin{align}
MoE = & \; t_{n-1, \frac{1-\alpha}{2}}\times \frac{s}{\sqrt{n}} \\
CI = & \; \hat{p} + MoE
\end{align}
$$

**Note:** if $n$ is large enough, and $\sigma$ is known, 
$$
\begin{align}
MoE = & \; z_{\alpha / 2}(\sigma/\sqrt{n})
\end{align}
$$
> [!note] Robustness of assumptions
> If a statistical method performs adequately, even when an assumption is modestly violated, it is said to be robust with respect to aforementioned assumption.

This method is
- not robust to randomisation
- robust to normality/symmetric
	- if sample is large enough, ensure no outlier

Factors affecting length of CI for $\mu$
- If confidence level is increased, interval becomes **wider**
- If sample size reduced, length of the confidence interval **increases**
- Variance $\sigma^2$ of population distribution

### Determining $n$

If a $(1-\alpha)100\%$ CI with length is $\leq D$, then solving for $n$ gets:
$$
n \geq (\frac{2 \times q_{1-\alpha/2}s}{D})^2
$$

- If $t-$distribution unknown
	- replace with $q_{1-\alpha/2}$ from $N(0,1)$ distribution. The impact of this should be reduced by ensuring $n \geq 30$
- If $s$ unknown
	- estimate using $s$ from a similar study, or conduct a pilot study.