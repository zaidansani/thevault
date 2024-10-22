---
title: Midterms Cheatsheet
---
> [!quote] ST2334 Cheatsheet
> for AY24/25 Semester 1
> by zaidan sani

---

> [!info] Basic Concepts of Probability

**Multiplication Principle**
If $r$ different experiments are to be performed sequentially with $n$ outcomes, there are $n_1n_2...n_r$ number of possible outcomes.

**Addition Principles**
If an experiment can be done in $k$ different procedures that **do not overlap**, there are $k_1 + k_2....$ 

**Permutation**
The selection and arrangement of $r$ objects out of $n$. Order **is taken into consideration**
$P^n_r =  \frac{n!}{(n-r)!} = n(n-1)(n-2)..(n-(r-1))$

**Combination**
The selection of $r$ objects out of $n$ where order is **not taken into consideration**
${n \choose r} = \frac{P^n_r}{P^r_r} = \frac{n!}{r!(n-r)!}$

> [!important] Inclusion Exclusion Principle
> 
> $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

Conditional probability of $B$ given $A$: $P(B|A) = \frac{P(A \cap B)}{P(A)}$
Independence:  $A \perp B \Leftrightarrow (P(A \cap B) = P(A)P(B)))$
Law of Total Probability: $P(B) = \sum^{n}_{i=1}P(B \cap A_i) = \sum^{n}_{i=1}P(A_i)P(B|A_i)$
Bayes Theorem: $P(A_k | B) = \frac{P(A_k)P(B|A_k)}{\sum^n_{i=1}P(A_i)P(B|A_k)}$

---
> [!info] Event operations

- $A \cap A' = \emptyset$
- $A \cap \emptyset = \emptyset$
- $A \cup A' = S$
- $(A')' = A$
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ (Distributive)
- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ (Distributive)
- $A \cup B = A \cup (B \cap A')$
- $A = (A \cap B) \cup (A \cap B')$ (special case of Law of Total Probability)

DeMorgan's law: For any $n$ events $A_{1},...,A_{n}$:
- $\bigcup A_{i}= (\bigcap A'_i)'$
	- $A \cup B = (A' \cap B')'$
- $\bigcap A_{i}= (\bigcup A'_i)'$
	- $A /cap B = (A' \cup B')'$

---

> [!info] Probability functions

**Discrete Random Variables**
Properties:
1. $f(x_i) \geq 0$ for all $x_i \in R_X$
2. $f(x) = 0$ for all $x \notin R_X$
3. $\sum^{\infty}_{i=1} f(x_i) = 1$ or  $\sum_{x_i \in R_X} f(x_i) = 1$

**Continuous Random Variables**
Properties:
 1.  **Non-negativity** $f(x) \geq 0$ for all $x \in R_X$, $f(x) = 0$ for $x \notin R_X$
 2. **Sum of all probabilities add up to 1** $\int_{R_X} f(x)dx=1$.
	This particular condition can be represented as $\int^{\infty}_{-\infty} f(x)dx = 1$
3. For any $a, b$ where $a \leq b$, $P(a \leq X \leq b) = \int^b_a f(x)dx$

---

> [!info] Cumulative distribution function (cdf)

**Properties**
Non-decreasing: $x_1 < x_2 \implies F(x_1) \leq F(x_2)$
Right-continuous:  $F(a) = \lim_{x \to a^+} F(x)$
Convergence to 0 and 1 in limits: $\lim_{x \to -\infty} F(x) = 0, \lim_{x \to \infty} F(x) = 1$

Discrete random variables: $\sum_{_t \in R_X; t \leq X} P(X = t)$
Continuous random variables: $F(x) = \int^x_\infty f(t)dt$

---

> [!info] Expectation

$$\mu_X = E(X) = \int^\infty_{-\infty} xf(x)dx = \int_{x \in R^X}xf(x)dx$$

**Properties**
1. $E(aX + b) = aE(X) + b$
2. $E(X + Y) = E(X) + E (Y)$
3. $E[g(X)] = \sum_{x \in R_X} g(x)f(x)$ if $X$ is discrete, $E[g(X)] = \int_{R_X} g(x)f(x)$ if $X$ continuous
---

> [!info] Variance

$$\sigma^2_x = V(X) = E(X - \mu_X)^2$$
$$V(X) = E(X^2) - [E(X)]^2$$
- $E(X^{2})= V(X) + E(X)^{2}$


With $f(x)$,
- $V(X) = \int^{\infty}_{-\infty}(x - \mu_X)^2f(x)dx$ (continuous)
- $V(X) = \sum_{x \in R_X}(x - \mu_X)^2f(x)$ (discrete)

---

> [!info] Discrete Uniform Distribution
> $$f_X(x) = \begin{cases}
>\frac{1}{k} & x = x_{1},..., x_k \\
>0 & otherwise   \\
> \end{cases}$$

$$\mu_{X} = E(X) = \sum\limits_{i=1}^{k}x_if_{X}(X_{i}) = \frac{1}{k}\sum\limits^{k}_{i=1}x_i$$
$$\sigma_{X}^{2}= V(X) = E(X^{2}) - (E(X))^{2} = \frac{1}{k}\sum\limits^{k}_{i=1}x^{2}_{i}- \mu^{2}_{X}$$
---

> [!info] Bernoulli Random Variable
> $$
> f_{X}(x) = P(X = x) = \begin{cases}
> p & x = 1; \\
> 1 - p & x = 0; \\
> \end{cases}
> $$

$$\mu_{X}=E(X) = p$$
$$\sigma^{2}_{X}=V(X)=p(1-p)$$

> [!info] Binomial Distribution
> $X \sim Bin(n,p)$
> $$
> P(X = x) = {n \choose x} p^{x}(1-p)^{n-x}, \text{for } x = 0, 1, .., n
> $$

$$E(X) = np$$
$$V(X) = np(1-p)$$

$$
F_{X}(x) = P(X \leq x) = \sum\limits_{i=0}^{n}p^{i}(1-p)^{n-i}
$$
> [!info] Negative Binomial Distribution
> Number of trials needed until $k^{th}$ success occurs.
>  $X \sim NB(n, p)$
>   $$
> f_{X}(x) = P(X = x) = {x - 1 \choose k - 1} p^{k}(1-p)^{x-k}, \text{for } x = k, k + 1, ...
> $$

$$E(X) = \frac{k}{p}$$
$$V(X) = \frac{(1-p)k}{p^{2}}$$

> [!info] Geometric Distribution
> Number of trials needed until first success occurs.
> $X \sim Geom(p)$
> $$f_{x}(X) = P(X = x) = (1-p)^{x-1}p$$

$$E(X) = \frac{1}{p}$$$$V(X) = \frac{1-p}{p^{2}}$$

---

> [!info] Poisson random variable
> Denotes number of events occuring in a fixed period of time
> $X \sim Poisson(\lambda)$
> $$
> f_{X}(k) = P(X = k) = \frac{e^{-\lambda}\lambda^{k}}{k!}
>  $$

$$
F_{X}(k) = P(X \leq k) = e^{-\lambda}\sum\limits_{i=0}^{k} \frac{\lambda^i}{i!}
$$
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

---

> [!info] Continuous Uniform Distribution
> $X \sim U(a, b)$. 
> $$
>f_{X}(x) = \begin{cases} \\
>\frac{1}{b-a} & a \leq x \leq b \\ \\
> 0& otherwise \\
> \end{cases}
> $$

$$E(X) = \frac{a+b}{2}$$
$$V(X) = \frac{(b-a)^{2}}{12}$$

$$
F_{X}(x) = P(X \leq x) = \frac{1}{b-a}x
$$

---

> [!definition] Exponential Distribution
> $X \sim Exp(\lambda)$
> $$
> f_{X}(x) = \begin{cases}
> \lambda e^{-\lambda x} & x \geq 0 \\
> 0 & x \leq 0
> \end{cases} 	
> $$
> > [!note] Alternative form
> > $$
> > f_{X}(x) = \begin{cases}
> > \frac{1}{\mu}e^{\frac{-x}{\mu}} & x \geq 0 \\
> > 0 & x \leq 0 \\
> > \end{cases} 
>  >$$
> > where $E(X) = \mu$

$$E(X) = \frac{1}{\lambda}$$
$$V(X) = \frac{1}{\lambda^{2}}$$

$$F(X) = P(X \leq x) = 1 - e^{-\lambda x}$$

> [!theorem] Theorem 15: Memoryless property
> 
> Suppose that $X$ has an exponential distribution with $\lambda > 0$.
> 
> For any two positive numbers $s, t$, 
> $$
> \begin{aligned}
> P(X > s + t | X > s) = P(X > t)
> \end{aligned}
> $$

---

> [!note] Useful summations
> 
> $$
>\begin{aligned}
>\text{if } |r| < 1, & & \\
>\sum\limits_{k=0}^{n}r^{n} & = \frac{1-r^{n}}{1-r}	
>\end{aligned} 
> $$

> [!example] Finding total number of permutations given combinations
> 
> > [!question] There are 6 people, A, B, C, D, E, F. Find the total number of ways to arrange them, if C must come after A and B, and F must come after E.
> 
> Total number of ways: $6! = 720$
> 
> Total number of ways, if C comes after A and B, is equal to total number of ways where A > B > C, and B > A > C (and the rest can be anywhere) - 2 combinations out of the possible $3! = 6$.
> $\therefore$ C comes after A and B = $\frac{720}{3!} \times 2 = 240$
> 
> Total number of ways, if F must come after E = F > E, 1 combination out of the possible $2! = 2$
> $\therefore$ F comes after E = $\frac{240}{3} \times 1 = 120$
> 
> Final answer = $120$.

