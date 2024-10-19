---
publish: true
title: Linear Regression
---

> [!summary]
> - [ ]  test for significance of regressor, overall model
> - [ ]  fitted regression equation
> - [ ]  check assumptions using residual plots
> - [ ]  identify outliers and influential points
> - [ ]  interpret coefficients, R-squared
> - [ ]  compare fit of models for same response using adjusted R-squared
> 

---

> [!note] Regression
> A regression of the response variable $Y$ on the regressor $X$ is a mathematical relationship between the mean of $Y$ and different values of $X$.

>[!note] Linear regression
>The regression is linear, and of the form $Y = \beta_{0} + \beta_{1}X + \epsilon$

Linear refers to the **linearity** of the parameters:
- $Y = \beta_{0}+ \beta_{1}sin(X) + \epsilon$ is still linear
- $Y = \beta_{0}sin(\beta_{1}X) + \epsilon$ is **not** linear

**Simple** refers to the use of only one regressor.
- If there are multiple regressors, it is called a **multiple** linear regression.

# Simple Linear Regression

## Assumptions

For $Y \sim X$:
1. Data obtained by **randomisation**
2. **Linearity** of the relationship
3. Error term $\epsilon$ is normal
4. Constant variance

Note: assumptions can only be checked **after** model is fitted.

## Estimation

**Ordinary Least Squares**
- considers all possible "best-fit lines"
- compute sum of squared residuals $e_i$
- line minimising this quantity is the line of best-fit

## Understanding R Output

![[media/linear regression r output.svg]]
%%[[media/linear regression r output.md|🖋 Edit in Excalidraw]]%%

Interpreting this:
$$
\hat{Y} =  beta0 + beta1(X)
$$
However, confidence intervals for $\beta_{0},  \beta_{1}$ can be determined, which would be preferable in some instances:
```
confint(M1, level)
```

## Hypothesis Testing

- $t-$test: tests significance of **one regressor**
- $F-$test: tests significance of **whole model**

Note: In a Simple Linear Regression model, the $t-$test is equivalent to the $F-$test.

### t-test

1. Assumption remains the same
2. State null hypothesis (and alternative)
	- $H_{0}:\beta_1=0$ or $H_0:$ regressor $X$ not significant
3. Find test-statistic
4. Derive $p-value$
5. Conclude if slope $\beta_1$ is significantly different from $0$ at a prespecified $\alpha$

### f-test

1. Assumption remains the same
2. State null hypothesis (and alternative)
	- $H_{0}:\beta_{i}=0 \; \forall i$ or $H_0:$ all regressors not significant
3. Find test-statistic
4. Derive $p-value$
5. Conclude if model is significant

If the $f-$test does not reject $H_0$, it suggests the model does not have significant regressors, and suggests a new model without regressors.

$$
\hat{Y} = \beta_{0}
$$

This is called the **intercept** model.

## Diagnostics

1. **Randomisation** - determined during data collection
2. **Linearity** - checking scatterplot between response $Y$ and regressor $X$ and residual plot.
3. **Normality** - checked using residuals of built model
4. **Constant variance** - checked using residuals of built model
### Scatterplot

![[media/linear regression scatterplots.svg]]
%%[[media/linear regression scatterplots.md|🖋 Edit in Excalidraw]]%%

If **linearity violated**
- add higher order terms $X^2$
If **not constant variance**
- transform response ($ln(Y), \sqrt(Y), 1/Y$) (will change coefficient)

### Residuals

$$e_{i}= Y_{i} - \hat{Y}_i$$
Using the standard residuals $SR$:
$$
SR = \frac{Y-\hat{Y}}{SE(Y-\hat{Y})}
$$

Plotting the residuals:
- Plot $SR$ against $\hat{Y}$ or $X$:
	- Expected: points scatter randomly about $0$, with interval $(-3,3)$.
	- If there is a funnel shape, constant variance is **violated**.
- Plotting $\hat{Y}$ against $X$
	- Expected: linearity
	- If not linear, linearity is **violated**.
- QQ-plot of $SR$
	- Expected: normal
	- If not, linearity is **violated**.

### Outliers, Influential Points

> [!note] Outlier
> A point with standard residuals $> 3$ or $< -3$

> [!note] Influential points
> Affects parameter estimates greatly.
> (An outlier may or may not be influential).
> 
> Measured using Cook's distance (which measures the effect of deleting a given observation) (using $1$ as the threshold).

## $R^2$ Statistic

> [!note] R-squared statistic
> The proportion of total variation of the response (about the sample mean $\hat{Y}$) explained by the model.

In a simple model, $R = \sqrt{R^{2}}= |Cor(X,Y)|$

# Multiple Linear Regression


| MLR                                                                          | SLR                                           |
| ---------------------------------------------------------------------------- | --------------------------------------------- |
| Regression function is linear                                                | Same                                          |
| Check assumptions using residuals                                            | Same                                          |
| t-tests for individual coefficients                                          | Same                                          |
| F-test for overall regression                                                | Same                                          |
| Test significance of a categorical variable which has more than 2 categories | Different                                     |
| Using adjusted R-squared to compare models                                   | Use non-adjusted R-squared to compare models. |
## Indicator Variables, Interaction Terms

> [!note] Indicator variable
> Takes on value 1 if category observed, and 0 otherwise.

$$
Y = \beta_{0} + \beta_1X_{1} + \beta_2I(X_2=...)+\epsilon
$$


> [!note] Interaction terms
> If there is an interaction between two variables, they are considered interaction terms.

$$
Y = \beta_{0} + \beta_1X_{1} + \beta_2I(X_{2}=...) + \beta_3X_{1}\times I(X_{2}= ...) + \epsilon
$$

Note that there is a new coefficient here, used to signify the coefficient of the interaction term.
When dropping insignificant terms - if the interaction term is highly significant, to keep the interaction term, all the main terms of the interaction **must be kept**.

