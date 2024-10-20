---
title: Hypothesis Testing
tags:
  - statistics
  - ST1131
---

# Quick Links

- [General Procedure (5 Steps)](#General%20Procedure%20(5%20Steps))
- [Errors](#Errors)
- [Relation to Confidence Intervals](#Relation%20to%20Confidence%20Intervals)
- Hypothesis Tests
	- [Hypothesis Testing for Population](#Hypothesis%20Testing%20for%20Population)
	- [Hypothesis Testing for Mean](#Hypothesis%20Testing%20for%20Mean)
	- [Hypothesis Testing for Two Independent Samples with Equal Variance](#Hypothesis%20Testing%20for%20Two%20Independent%20Samples%20with%20Equal%20Variance)
	- [Hypothesis Testing for Two Independent Samples with Unequal Variance](#Hypothesis%20Testing%20for%20Two%20Independent%20Samples%20with%20Unequal%20Variance)
	- [Hypothesis Testing for Two Dependent Samples](#Hypothesis%20Testing%20for%20Two%20Dependent%20Samples)

---


> [!note] Statistical inference
> Making statistical inference about the population using sample data.
> Two main types of inference:
> - estimation
> - testing hypothesis

> [!note] Hypothesis
> A statement about a population, claiming that a parameter takes a particular numerical value or falls in a certain range of values.

---
# General Procedure (5 Steps)

1. Look at assumptions
2. State the hypothesis
3. Find the test statistic, and its null distribution
4. Find the $p$-value and interpret it
5. Make a conclusion

## 1. Assumptions

> [!caution] If assumptions do not hold, test does not have the properties needed.

Generally, the most important assumption is **randomisation** but there might be other assumptions, such as *sample size* and *distribution shape*.

## 2. Stating Hypotheses

>[!note] Null hypothesis
> A statement that the parameter takes a particular value, denoted $H_0$

 > [!note] Alternative hypothesis
 > A statement that the parameter falls in some alternative range of values, denoted $H_1$

The alternative hypothesis determines the **side** of the test:
- $H_1$: parameter **not equal**
	- two-sided test
- $H_1$: parameter larger than value under $H_0$
	- right-sided test
- $H_1$: parameter smaller than value under $H_0$
	- left-sided test

## 3. Test Statistic and Null Distribution

The value of test statistic requires
- the value of the point estimate, and its sampling distribution
- the parameter value specified under $H_0$

The distribution of a test statistic under $H_0$ is **null distribution**.

## 4. p-value

The test begins with the assumption that $H_0$ is **true**.

If the test statistic calculated above in step 3 is far out in the tail of the null distribution, it is too far from what $H_0$ predicts. The $p-$value can be calculated of the test statistic, to which a threshold can be specified if $H_0$ can be rejected.

## 5. Conclude

If significance level $\alpha$ is specified, decision on the validity of the $H_0$ can be made:
- if $p-$value $\leq \alpha$, reject $H_0$
- otherwise, do NOT reject $H_0$

# Errors

> [!note] Type I
> When $H_0$ is rejected but it is true.
> 
> Probability of error is denoted $\alpha$.

> [!note] Type II
> When $H_0$ is not rejected but it is false.
> 
> Probability of error is denoted $\beta$.

> [!note] Power
> The power of the test is defined to be $1  - \beta$, which is the probability of correctly rejecting $H_{0}$, when it is false.

The two errors cannot be reduced simultaneously.
- If $\alpha$ is smaller, $H_0$ is rejected less often. 
- When $H_{0}$ is retained more often, the probability to retain it when it is not correct increases.
- Probability of Type II error increases (while probability of type I error decreases).

# Relation to Confidence Intervals

There is a consistency between a **confidence interval** and a **significance test**
- when the confidence level of the confidence interval $x$, the significance level $\alpha$, and $\alpha \times 100 = x$
- the test is two-sided
- both CI and test have the same standard error

When these hold, if the point estimate found in the significance test is within the point estimate, we do not reject $H_0$, and vice versa.

> [!example] 
> 
> If the confidence interval is $(45, 50)$:
> - when the value calculated in the point estimate is $(47.5)$, we retain $H_0$
> - when the value calculated in the point estimate is $(42.5)$, we reject $H_0$.
> 

---
# Hypothesis Testing for Population

## 1. Assumptions

1. Variable is **categorical**
2. Data is obtained using **randomisation**
3. Sample size $n$ is sufficiently large that the sampling distribution of the sample proportion $\hat{p}$ is **approximately normal** when the null is true. Checked using $np_0(1-p_0) \geq 5$ - $p_0$ value specified in $H_0$.

## 2. Hypothesis

$$
H_{0}: p=p_0
$$
$$H_{1}: p \neq p_{0} \text{ or } H_{1}: p < p_{0} \text{ or } H_{1}: p > p_{0} $$
## 3. Test Statistic

With the statistics $\hat{p}, p_{0}, n$:u d
$$
Z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}
$$
Note that $Z \sim N(0,1)$
## 4. Calculate p-value

![[media/pvalue.svg]]
%%[[media/pvalue|🖋 Edit in Excalidraw]]%%

Compute $p-$value using `R` - `pnorm(Z)`

## 5. Interpret

Reject or retain $H_0$ given the $p-$value.
- If it is small (lesser than $\alpha$), reject $H_0$
- Otherwise, do not reject $H_0$

---
# Hypothesis Testing for Mean

## 1. Assumptions

1. Variable is **quantitative**
2. Data is obtained using **randomisation**
3. Population is approximately **normal**.
	- Crucial when $n$ small.

## 2. Hypothesis

$$
H_{0}: \mu=\mu_0
$$
$$H_{1}: \mu = \mu_{0} \text{ or } H_{1}: \mu < \mu_{0} \text{ or } H_{1}: \mu > \mu_{0} $$
## 3. Test Statistic

With the statistics $\bar{X}, \mu_{0}, n$:
$$
T = \frac{\bar{X} - \mu_0}{s/\sqrt{n}}
$$
Note that if $H_0$ is true: $T$ follows $t-$distribution with $n-1$ degrees of freedom.
## 4. Calculate p-value

![[media/pvalue.svg]]
%%[[media/pvalue|🖋 Edit in Excalidraw]]%%

Compute $p-$value.

## 5. Interpret

Reject or retain $H_0$ given the $p-$value.
- If it is small (lesser than $\alpha$), reject $H_0$
- Otherwise, do not reject $H_0$

---
# Hypothesis Testing for Two Independent Samples with Equal Variance

## 1. Assumptions

1. Variable is **quantitative**
2. Samples are **independent**
3. Population distribution of each group is **approximately normal**
4. Variances are the same

The variance test can be checked using the equal variance test.

## 2. Hypothesis

$$
H_{0}: \mu_{x}- \mu_{y} =0
$$
$$H_{1}: \mu_{x}- \mu_{y} \neq 0 \text{ or } H_{1}: \mu_{x} - \mu_{y} < 0 \text{ or } H_{1}: \mu_{x}- \mu_{y} > 0 $$
## 3. Test Statistic

With the statistics $n_{1}, n_{2}, \bar{X}, \bar{Y}, s^{2}_{X}, s^{2}_Y$:

$$
\begin{align*}
s^{2}_{p} &=  \; \frac{(n_{1}-1)s^{2}_{X} + (n_{2}-1)s^{2}_Y}{n_{1}+n_{2} - 2} \\\\
SE &=  \; s_{p}\sqrt{\frac{1}{n_{1}}+\frac{1}{n_{2}}} \\\\
T &= \; \frac{\bar{X} - \bar{Y} - 0}{SE}
\end{align*}
$$

In this formula:
- $s^2_p$ refers to the pooled estimate of the common variance
- $SE$ is the standard error.

Note that if $H_0$ is true: $T$ follows $t-$distribution with $(n_{1}+ n_{2} -2)$ degrees of freedom.
## 4. Calculate p-value

![[media/pvalue.svg]]
%%[[media/pvalue|🖋 Edit in Excalidraw]]%%

Compute $p-$value.

## 5. Interpret

Reject or retain $H_0$ given the $p-$value.
- If it is small (lesser than $\alpha$), reject $H_0$
- Otherwise, do not reject $H_0$

---

# Hypothesis Testing for Two Independent Samples with Unequal Variance

## 1. Assumptions

1. Variable is **quantitative**
2. Samples are **independent**
3. Population distribution of each group is **approximately normal**

The variance test can be checked using the equal variance test.

## 2. Hypothesis

$$
H_{0}: \mu_{x}- \mu_{y} =0
$$
$$H_{1}: \mu_{x}- \mu_{y} \neq 0 \text{ or } H_{1}: \mu_{x} - \mu_{y} < 0 \text{ or } H_{1}: \mu_{x}- \mu_{y} > 0 $$
## 3. Test Statistic

With the statistics $n_{1}, n_{2}, \bar{X}, \bar{Y}, s^{2}_{X}, s^{2}_Y$:

$$
\begin{align*}
SE &=  \; \sqrt{\frac{s^2_X}{n_1} + \frac{s^2_Y}{n_{2}}}\\
T &= \; \frac{\bar{X} - \bar{Y} - 0}{SE}
\end{align*}
$$

In this formula:
- $SE$ is the standard error.

Note that if $H_0$ is true: $T$ follows $t-$distribution with a $df$ degrees of freedom, where $df$ is complex (and may not be an integer).
## 4. Calculate p-value

![[media/pvalue.svg]]
%%[[media/pvalue|🖋 Edit in Excalidraw]]%%

Compute $p-$value.

## 5. Interpret

Reject or retain $H_0$ given the $p-$value.
- If it is small (lesser than $\alpha$), reject $H_0$
- Otherwise, do not reject $H_0$

---

# Hypothesis Testing for Two Dependent Samples

Also known as the **paired t-test**

## 1. Assumptions

1. Variable is **quantitative**
2. Samples are **dependent**
	- every observation has a matched value in other sample
3. Population distribution of each group is **approximately normal**


## 2. Hypothesis

Let the $\mu$ be the mean of the differences of the matched subjects.

$$
H_{0}: \mu = 0
$$
$$
H_{1}: \mu \neq 0 \text{ or } H_{1}: \mu < 0 \text{ or } H_{1} : \mu > 0
$$
With the given hypothesis, the [Hypothesis Testing for Mean](#Hypothesis%20Testing%20for%20Mean) can be done here.

---
