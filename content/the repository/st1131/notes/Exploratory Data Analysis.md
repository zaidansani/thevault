---
title: Exploratory Data Analysis
tags:
  - statistics
  - ST1131
---
> [!note] **Exploratory data analysis** refers to the analysis of the variables (descriptive statistics) in a study.

# Variables

![[media/variables.svg]]
%%[[media/variables|🖋 Edit in Excalidraw]]%%

A **quantitative** variable is a variable where the values of the observations are **numerical**.
- **discrete** variables are quantitative variables where they are countable
	- *population*
	- *number of pets*
- **continuous** variables are quantitative variables which have a continuum of infinitely many possible values.
	- *temperature*

A **categorical** variable is a variable where the values of the observations are **a set of categories**.
- **nominal** variables are categorical variables that cannot be ordered.
	- *gender*
	- *race*
- **ordinal** variables are readings that can be ordered
	- *ratings (good to bad)*

---
## Single-Variable Exploration

### Numerical Summaries

#### Frequency Table

**Modal category** is the category with the highest frequency.
**Frequency table** is the listing of possible values, with the frequency of each value.
**Proportion** refers to the count of observations in category divided by total number of observations.
Proportions and percentages are **relative frequencies**.

|            | A       | B       | C       | D       | E       | total |
| ---------- | ------- | ------- | ------- | ------- | ------- | ----- |
| frequency  | $n_A$   | $n_B$   | $n_C$   | $n_D$   | $n_E$   | $n$   |
| proportion | $n_A/n$ | $n_B/n$ | $n_C/n$ | $n_D/n$ | $n_E/n$ | $1$   |
> [!note] 
> When summarising a frequency table, mention
> - modal category
> - proportion or percentage for model category

To use a frequency table for a **categorical** variable, categorise the quantitative variables into ranges and set them as categories.

---
#### Center

Two common measures to summarise center are:
- mean
- median

The **sample mean** $\bar x$ is the formula:

$$ \bar{X} = \frac{1}{n} \sum^{n}_{i = 1} X_i$$


> [!info] Median
> The middle value of the ordered observations:
> - if $n$ odd: $(\frac{n+1}{2})$
> - if $n$ even: average of $(\frac{n}{2})$-th and $(\frac{n}{2}+1)$-th largest observation

> [!note] 
> Mean is **sensitive** to extreme observations, unlike median.
> 
> If dataset is:
> - highly skewed: report **median**
> - symmetric and bell-shaped: report **mean**

---
#### Variability

The common measurements of variability:
- **range**
	- always
- **variance** and standard deviation
	- used in conjunction with the mean if distribution is approximately bell-shaped
- interquartile range (**IQR**)
	- used in conjunction with the median to summarise sample if distribution not bell-shaped

> [!info] Range
> the difference between the largest and smallest observations in a dataset.
> - easy to compute
> - sensitive

---
> [!info] Variance & standard deviation
> Defined to be the average of the squared deviations of the values from the mean.
> 
> The **standard deviation** is defined to be the square root of the variance.

$$ s^{2}= \frac{1}{n-1} \sum\limits^{n}_{i=1}(X_{i}- \bar{X})^{2}$$
The **standard deviation**, $s$ tells us how close the values are to the mean
- larger $s$ - the values are more spread out from the mean

**Linear Transformations**

$$
\begin{align}
Y_i = bX_{i} + a \implies & s^2_{Y}=b^2s^2_{X}\\
\implies & s_{Y} = |b|s_X
\end{align}
$$
- $a$ does not affect variance (and standard deviation) of transformed data

**Empirical Data**

If a distribution is **bell-shaped**
- **~68%** of observations fall within **1 standard deviation**
- **~95%** of observations fall within **2 standard deviation**
- **~99%** of observations fall within **3 standard deviation**

---

> [!info] Quantile/Percentiles
> $q_p$ is a value such that $100p\%$ of the values fall below or at that value. 


| Quartile | $q_{0.25}$ / $Q_1$ | $q_{0.5}$ / $Q_2$ | $q_{0.75}$ / $Q_3$ |
| -------- | ------------------ | ----------------- | ------------------ |
|          | lower quartile     | median            | upper quartile     |

> [!info] Interquartile range
> Difference between upper and lower quartile.

---
### Graphical Summaries

#### Histogram

A **histogram** uses bars to portray (relative) frequencies of possible outcomes for a quantitative variables. 

> [!note] 
> When analysing a histogram, mention
> - overall pattern (is there **clustering**)
> - modality (is the distribution **unimodal, bimodal or multimodal**)
> - skew (is the distribution **symmetric, right skew, or left skew**)

![[media/graphical summaries.svg]]
%%[[media/graphical summaries|🖋 Edit in Excalidraw]]%%

---

## Two-Variable Exploration

> [!info] Association
> exists if a particular value for one variable is **more likely** to occur with certain values of other variable.

**Response variable** is the variable of which comparisons are made.
**Explanatory variable** is variable of which the response is (believed to be) depending on.

### Numerical Summaries

#### Contingency Table

> [!tip] Used for **two categorical variables**

> [!info] Contingency table
> Rows list the categories for one variable, and columns list the categories of other variable.
> Each entry in the table is the number of observations in the sample at particular combination of categories of the two variables.

|       | `y1` | `y2` | `y3` | `...` |
| ----- | ---- | ---- | ---- | ----- |
| `x1`  |      |      |      |       |
| `x2`  |      |      |      |       |
| `...` |      |      |      |       |

Using relative frequencies like **percentage**, the contingency table is: 

|         | `y1`  | `y2`  | `y3`  | `...` |
| ------- | ----- | ----- | ----- | ----- |
| `x1`    |       |       |       |       |
| `x2`    |       |       |       |       |
| `...`   |       |       |       |       |
| `Total` | `100` | `100` | `100` | `100` |
#### Bar Plots

![[media/bar plots.svg]]
%%[[media/bar plots|🖋 Edit in Excalidraw]]%%

#### Boxplot

> [!tip] Used for **one categorical, one quantitative**

![[media/box plots.svg]]
%%[[media/box plots|🖋 Edit in Excalidraw]]%%

We can look for:
- outliers
- skew of distributions
- spread

#### Scatterplot

![[media/scatterplots.svg]]
%%[[media/scatterplots|🖋 Edit in Excalidraw]]%%

Look for
- relationship/association between two variables
	- positive, negative or no association?

#### Correlation

$$
r = \frac{1}{n-1}\sum\limits^{n}_{i = 1}(\frac{Y_{i}- \bar{Y}}{s_Y})(\frac{X_{i}- \bar{X}}{s_X})
$$

- $r$ is always between $-1$ and $1$.
- positive value indicates positive association and vice-versa