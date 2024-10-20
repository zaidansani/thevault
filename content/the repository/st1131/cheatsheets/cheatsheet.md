---
title: ST1131 cheatsheet
tags:
  - ST1131
---

💤 Midterm cheatsheet, compiled by *m.zaidan*

Contains R code snippets for ST1131.

---
# R Fundamentals

## Clearing Workspace History

```r
rm(list = ls())
```

## Vector Creation

```r
c(.....) # concatenation function

numeric(n) # creates a vector of size n with all elements being 0

rep(item, n) # replicates the item n times

seq(from = a, to = b, by = c) # creates a sequence of numbers evenly spread by a distance of c from a to b
```

## Matrix Creation

```r
matrix(v, r, c) # takes values from vector v to create a r x c matrix
# filled by column

rbind(m, b) # binds rows b onto matrix m

cbind(m, b) # binds columns b onto matrix m
```

## Reading Data

```r
scan(...) # reads data into vector/list from console or file

read.table(file, header, sep, ...) # reads a table
read.csv(....) # reads a CSV file
# file: name of file 
# header: TRUE or FALSE if file contains names of variables
# sep: separator character
# row.names: vector of row names
# col.names: vector of column names

categorical <- ...
df <- df %>%
  mutate(across(all_of(categorical), as.factor))
```

## Accessing Data

```r
attach(data) # attaches the data columns to the environment

data[columns, rows] # selects specified columns or rows
# examples: 
# cols only: [,3], [,1:3]
# rows only: [1,], [1:4,]
# conditions: [variable == desired]
```

## Common Commands

```r
max(x) # maximum value

min(x) # min value

sum(x) # total of values in x

mean(x) # arithmetic average values in x

range(x) # min(x) and max(x)

cor(x,y) # correlation value between x, y

sort(x) # sorts x

names(x) # names of columns

colMeans(x) # get means of every column

which(condition) # get index of all rows where condition fulfilled

nrow(x) # number of rows

ncol(x) # number of columns
```

## Functions/Loops

```r
# while
while (...) {
	...
}

# for loop
for (...) {
	...
}

# function
function_name <- function(parameters) {
	...
	return ...
}
```

---

# Single Variable Exploration

💡 For categorical variables: 

**Numerical summaries**
Frequency table

**Graphic summaries**
Bar plot, pie chart

## Frequency Table

```r
table(....) # frequency table

prop.table(...) # proportion table
# takes in a table (table(..))

# replacing values with actual names
boolean_vars <- ifelse(variable == "0", "...", "...") # for every observation
table(boolean_vars)
```

## Barplots & Pie Charts

```r
# creates a barplot
barplot(table(...)) 
# ylab = label for y-axis
# xlab = label for x-axis
# col = vector of colours
# main = title

# creates a pie chart
pie(....)
# ylab = label for y-axis
# xlab = label for x-axis
# col = vector of colours
# main = title
```

💡 For continuous variables: 

**Numerical summaries**
Min, max, mean, median, 3 quartiles, IRQ, range, variance, standard deviation

**Graphic summaries**
Histogram, boxplot

## Continuous Variable Numerical Summaries

```r
max(x) # maximum value

min(x) # min value

sum(x) # total of values in x

mean(x) # arithmetic average values in x

range(x) # min(x) and max(x)

summary(x) # min, q1, median (q2), mean, q3, max

summaries = c(min(x),max(x),mean(x), median(x), IQR(x), range(x), var(x), sd(x)) 
# min, max, mean, median, IQR, range, var, sd
```

## Histogram & Boxplot

```r
# creates a histogram
histogram(...) 
# ylab = label for y-axis
# xlab = label for x-axis
# col = colour
# main = title

# ggplot
library(ggplot2)
ggplot(data=df, aes(x= ..., y=...)) +
  geom_hist()+
  geom_text(aes(label=count), vjust=-0.3, size=3.5)+
  theme_minimal()

# creates a boxplot
boxplot(....)
# ylab = label for y-axis
# xlab = label for x-axis
# col = vector of colours
# main = title
boxplot.stats(x) # basic information for boxplot sketching
abline(h = ....) # adds line at value 

# ggplot
library(ggplot2)
ggplot(data=df, aes(x= ..., y=...)) +
  geom_bar(stat="", ...)+
  geom_text(aes(label=count), vjust=-0.3, size=3.5)+
  theme_minimal()
# vjust to let the count numbers appear above the bars
# size to specify the text size of the numbers

```

---

# Multiple Variable Exploration

💡 For two categorical variables: 

**Numerical summaries**
Contingency table

**Graphic summaries**
Clustered bar plot, stacked bar plot

## Contingency Table

```r
tab = table(rows, column)
prop.table(tab) * 100 # joint probs
prop.table(tab, rowname) * 100 # conditional probs, condition on row
prop.table(tab, colname) * 100 # conditional probs, condition on col
```

## Clustered Bar Plot

```r
tab = table(rows, column)
proptab = prop.table(tab) * 100 # joint probs

barplot(proptab, beside = TRUE)

# ggplot
library(ggplot2)
ggplot(data, aes(x = category, y = value, fill = group)) +
  geom_bar(stat = ... position = "dodge") +
  labs(title = ...,
       x = ..,
       y = ..,
       fill = ..)
```

## Stacked Bar Plot

```r
barplot(data, 
        col = ...,
        legend = ..., 
        ylim = ..., 
        xlab = ... 
        ylab = ...)
        
# ggplot
library(ggplot2)
ggplot(..., aes(x = ..., y = ...)) +
  geom_bar(stat = "identity") +
  labs(title = ...,
       x = ...,
       y = ...)
```

💡 For one categorical, one continuous variable: 

**Graphic summaries**
Box plot

## Box Plot

```r
boxplot(y ~ x, col = ..., ylab = ..., xlab = ...)

# ggplot
library(ggplot2)
ggplot(..., aes(x = ..., y = ...)) +
  geom_boxplot() +
  labs(title = ...,
       x = ...,
       y = ...)
```

### Outliers

```r
boxplot$out
```

💡 For two continuous variable: 

**Numerical summaries**
Correlation

**Graphic summaries**
Scatterplot

## Correlation

```r
cor(x, y)
# |cor| > 0.8: strong correlation
# |cor| < 0.2: weak correlation
```

## Scatterplot

```r
plot(x, y, 
     main = ..., 
     xlab = .., 
     ylab = ...)

# ggplot

library(ggplot2)
ggplot(data, aes(x = x, y = y)) +
  geom_point() +
  labs(title = ...,
       x = ...,
       y = ...)
```

# Conditional Probability

| -             | Positive       | Negative       |
| ------------- | -------------- | -------------- |
| Has           | True Positive  | False Negative |
| Does not have | False Positive | True Negative  |
Sensitivity (TPR) = $\frac{TP}{TP + FN}$
Specificity (TNR) = $\frac{TN}{TN + FP}$ 

```r
library(dplyr)
summary <- data %>%
  summarise(
    sensitivity = sum(test_result == "positive" & true_status == "positive") / sum(true_status == "positive"),
    specificity = sum(test_result == "negative" & true_status == "negative") / sum(true_status == "negative")
  )
```

```R

# finding confusion matrix from sensitivity, specificity, and total cases
sensitivity <- ..
specificity <- ..
total_positive <- ..
total_negative <- 

TP <- sensitivity * total_positive
FN <- total_positive - TP
TN <- specificity * total_negative
FP <- total_negative - TN

matrix(c(TP,FP,TN, FN), 2, 2)

# finding sensitivity and specificity from confusion matrix

sensitivity <- TP/(TP + FN)
specificity <- TN/(TN + FP)
```
# Distribution
## Normal Distribution
```r
# Distributions

## Normal Distribution

# PDF of the normal distribution at given value(s) of x
dnorm(x, mean = ..., sd = ..., log = ...)
# x = value OR values
# mean = mean of normal distribution
# sd = sd of normal distribution
# log = if TRUE, returns log of density values (by default FALSE)

# computes cumulative probability of normal distribution up to given quantile q
pnorm(q, mean = ..., sd = ..., lower.tail = ..., log.p = ...)
# q = quantile(s)
# mean = mean of normal distribution
# sd = sd of normal distribution
# lower.tail: TRUE(default): P[X <= x] | FALSE: P[X >= x]
# log.p = if TRUE, returns log of cumulative probability values (by default FALSE)

# compute quantile of normal distribution based on probability
qnorm(p, mean = ..., sd = ..., lower.tail = ..., log.p = ...)
# p = probability(ies)
# mean = mean of normal distribution
# sd = sd of normal distribution
# lower.tail: TRUE(default): P[X <= x] | FALSE: P[X >= x]
# log.p = if TRUE, p given as log(p) (by default FALSE)

# generates random data with given normal distribution parameters
rnorm(n, mean = ..., sd = ..):
# n = size of data
# mean = mean of normal distribution
# sd = sd of normal distribution
```

## Binomial Distribution

```r
# P(X = x)
dbinom(x, size, prob)
# x = value(s)
# size = amount of events
# prob = probability of success

# P(X <= x) or P(X > x)
pbinom(x, size, prob, lower.tail = ...)
# x = value(s)
# size = amount of events
# prob = probability of success
# lower.tail: TRUE(default): P[X <= x] | FALSE: P[X >= x]

# finding the quantile of given probability(s)
qbinom(p, size, prob, lower.tail = ...)
# p = probability(s)
# size = amount of events
# prob = probability of success
# lower.tail: TRUE(default): P[X <= x] | FALSE: P[X >= x]

# generates random data with given binomial distribution parameters
rbinom(n, size, prob):
# n = size of data
# size = amouunt of events
# prob = probabiity of success
```

# Confidence Interval

## Confidence Interval for Mean

```r
x_bar <- mean(data) # Calculate sample mean
s <- sd(data) # Calculate sample standard deviation
df <- nrow(data) - 1 # Determine degrees of freedom

confidence_level <- 0.95 # Choose confidence level 
t_critical <- qt(1 - (1 - confidence_level)/2, df) # Find critical value

SE <- t_critical * (s / sqrt(nrow(data))) # Calculate margin of error

# Calculate confidence interval
lower_bound <- x_bar - SE
upper_bound <- x_bar + SE
```

```r
t.test(data, conf.level = ..)$conf.int
```

## Confidence Interval for Population

```r
p_hat <- successes / trials # Calculate sample proportion
SE <- sqrt((p_hat * (1 - p_hat)) / trials) # Calculate standard error

confidence_level <- 0.95 # Choose confidence level 
t_critical <- qt(1 - (1 - confidence_level)/2, df) # Find critical value

E <- z_critical * SE # Calculate margin of error

# Calculate confidence interval
lower_bound <- p_hat - E
upper_bound <- p_hat + E
```

```r
binom.test(successes, trials)$conf.int
```

# Hypothesis Test

## H-Test for Population

```r
t.test(data, 
	mu = ..., 
	alternative =  ..., # "greater" OR "two.sided" (DEFAULT) OR "less"
	conf.level = ..,
	var.equal = ... # FALSE (default) Assume equal variances?
)
```

### Checking for Normality

```r
# Histogram and normal density
# Look for: unimodal, symmetry

hist(data, breaks = ..., freq = FALSE, 
	main = ..., xlab = "Data")
curve(dnorm(x, mean = mean(data), sd = sd(data)), add = TRUE, col = "blue")

# ggplot
library(ggplot2)
df <- data.frame(x = data)
ggplot(df, aes(x = x)) +
  geom_histogram(binwidth = 1, fill = "lightblue", color = "black", aes(y = after_stat(density))) +
  geom_density(color = "blue") +
  labs(title = ..., x = "Data", y = "Density")

## QQ-plot
## Look at tails.

qqnorm(data)
qqline(data, col = "red")

# ggplot
library(ggplot
ggplot(df, aes(sample = data)) +
  stat_qq() +
  stat_qq_line()

# Shapiro Test
shapiro.test(data)
```

![[media/Pasted image 20240416073212.png]]
![[media/Pasted image 20240416073226.png]]
### Non-Parametric Test

💡 For when the sample does not satisfy requirements for t-test.

```r
wilcox.test(data, mu = ..., alternative="two.sided")
```

## H-Test for Mean

```r
t.test(data, 
	mu = .., 
	alternative =  # "greater" OR "two.sided" (DEFAULT) OR "less"
	conf.level = ..,
)
```

## H-Test for Two Independent Samples with Equal Variance

```r
t.test(group1, group2, 
	mu = .., # null hypothesis
	alternative =  # "greater" OR "two.sided" (DEFAULT) OR "less"
	conf.level = ..,
	var.equal = TRUE
)
```

## H-Test for Two Independent Samples with Unequal Variance

```r
t.test(data, 
	mu = .., # null hypothesis
	alternative = ..., # "greater" OR "two.sided" (DEFAULT) OR "less"
	conf.level = ..,
	var.equal = FALSE
)
```

## H-Test for Dependent Samples

```r
t.test(data, 
	mu = .., # null hypothesis
	alternative = ..., # "greater" OR "two.sided" (DEFAULT) OR "less"
	conf.level = ..,
	paired = TRUE
)
```

# Linear Regression

## Creating Linear Model

```r
lm(y ~ x, data = ...)
# formula can follow multiple ways
# y ~ x1 + x2 + x3 (multiple regressors)
# y ~ x1 * x2 + x3 (interaction term)
```

## Summary Statistics for Linear Model

```r
summary(model)
# residuals: summary stats (min, max, ..)
# coefficients: coefficients of model
# estimate, std. error, t-value, Pr(>|t|) (indicates significance of coef)
# residual standard error
# r-squared stats (explains amount of variability in response explainable by model)
# f-stat and p-value (significance of entire model) 

anova(model) # F-test
```

## Confidence Interval

```r
confint(model, coef, level = ...)
# gets confidence interval for coefficients
```

## Predictions

```r
newdata <- data.frame(col1 = c(...), ...)

predict(M1, newdata = ...) # returns predicted y values for a dataset
predict(M1, newdata = ..., 
	interval = "confidence",
	level = ...) # returns predicted confidence interval of mean
```

## Residual Plots

```r
# residuals

model$res # raw residuals
rstandard(model) # standardized residuals
```

### Checking Normality

```r
sr <- rstandard(model)

# Histogram and normal density
hist(sr, prob = TRUE)
curve(dnorm(x, mean = mean(data), sd = sd(data)), 
	add = TRUE, 
	col = "blue")

# ggplot
library(ggplot2)
df <- data.frame(sr = sr)
ggplot(df, aes(x = sr)) +
  geom_histogram(binwidth = 1, fill = "lightblue", color = "black", aes(y = after_stat(density))) +
  geom_density(color = "blue") +
  labs(title = ..., x = "Data", y = "Density")

## QQ-plot

qqnorm(sr)
qqline(sr, col = "red")

# ggplot
library(ggplot2)
df <- data.frame(sr = sr)
ggplot(df, aes(sample = sr)) +
  stat_qq() +
  stat_qq_line()

# Shapiro Test
shapiro.test(sr)
```

## Outliers (Standard Residuals)
```R
SR <- rstandard(model)

which(SR>3 | SR<(-3))

## dplyr
library(dplyr)
srdf = data.frame(sr)
srdf <- srdf %>%
  mutate(index = row_number()) %>%
  filter(sr < -3 | sr > 3)
```
## Cooks Distance (Influential Points)

```r

threshold <- 1 # as given in slides

cooksd <- cooks.distance(model) # Calculate Cook's distance
influential_points <- which(cooksd > threshold) # Identify influential points based on Cook's distance
df_clean <- df[-influential_points, ] # Remove influential points from the dataset

# dplyr

library(dplyr)
df <- df %>%
  mutate(cooksd = cooks.distance(model)) 
influential_points <- df %>%
  filter(cooksd > threshold) # Identify influential points based on Cook's distance 
df_clean <- df %>%
  anti_join(influential_points) # Remove influential points from the dataset
```

# Useful Libraries

## dplyr

💡 dplyr is used for data manipulation

```r
library(dplyr)

data -> data %>% # chain operator
	filter(condition) %>% # filter (e.g, age > 1)
	select(col1,...) %>% # select columns (e.g col1, col2)
	mutate(newcol = ...) %>% # mutate/add columns (e.g newage = age + 1)
	arrange(...) %>% # sort (e.g asc(age), desc(age)
	summarise(summary = ...) %>% # summarise data (e.g meanage = mean(age))
	group_by(...) %>% # groups data by values in specified column (e.g age)
	ungroup() # ungroups grouped data
```

## ggplot2

💡 ggplot2 is used for plotting graphs.


```r
library(ggplot2)

# recommended to put data in dataframe before using it

ggplot(..., aes = ...)  + # dataframe
	geom_*... +
	labs(...) + # labels
	xlim(lowerx, upperx) + # limits
	ylim(lowery, uppery)
	
# aes examples
aes(x = ...,
	y = ...,
	group = ...)

# geom layers
geom_histogram() # histogram
geom_density() # density
geom_point() # scatterplot
geom_boxplot() # box plot
geom_barplot() # bar plot
geom_line() # line plot

# labs
labs(
	title = ...,
	x = ...,
	y = ...,
	caption = ...,,
)
```