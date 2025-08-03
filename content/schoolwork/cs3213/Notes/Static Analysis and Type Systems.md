---
{"publish":true,"title":"Static Analysis and Type Systems","tags":["CS3213","software_engineering","software_testing"],"cssclasses":""}
---

# Static Analysis

> [!definition] Static analysis
> Examination of code without executing it

Static analysis aims to 
- identify potential errors
- ensure adherence to coding standards
- optimise performance
using
- early bug detection

Possible tools
- linters & style checkers (check formatting/practices)
- data flow analysis (reasoning about the set of values at different points in execution)
- control-flow analysis (reasoning about potential order of execution)
- type checking (verify variables are used consistently for their types)

> [!example] Python
> Python will attempt to execute unsafe programs, and fails mostly at runtime. Shows type error when it happens.

Language system puts burden of writing safe programs (with relevance to type safety) on programmers.
Thus, a type system detecting type errors can act as a **static analyzer**.

> [!definition] Type system
> Mechanism for distinguishing good programs from bad.
> 
> > [!quote] A tractable syntactic method for proving the absence of certain program behaviors by classifying phrases according to the kinds of values they compute.

Good programs are **well-typed** (where the types are appropriate) while bad programs are **ill-typed** or not **type-able**.

# $\lambda$ Lambda Calculus

> [!motivation] 
> - Foundation for functional programming
> - Language theory

## Syntax

$$
M, N ::= x \; | \;  \lambda x. M \; | \; M N
$$


An anonymous function is replaced by a **lambda abstraction**.

```C
int f (int x) { return x; }
```

would be replaced by

$$
\lambda x. x
$$

Similarly, the function call would be replaced by a **lambda application**:

```
int f (int x) { return x; }
f (3);
```

would be represented as

$$
(\lambda x.x)3
$$
### Conventions

> [!example] Body of $\lambda$ extends as far to right as possible
> 
> $$
> \lambda x. \bbox[yellow, 2pt]{(} M N \bbox[yellow, 2pt]{)}
> $$

> [!example] Functions are left-associative
> 
> $$
> \bbox[yellow, 2pt]{(} M N \bbox[yellow, 2pt]{)} P
> $$

> [!note] Higher order functions
> Functions can be returned as return values, and passed in as arguments

### Free and Bound Variables


> [!definition] $\alpha-$ equivalence
> Bound variable can be renamed, as it is a placeholder.
> $$
> \lambda x.(x+y) = \lambda z.(z+y)
> $$
> 
> In this scenario, $(x+y)$ is the scope of the $\lambda x$

However, note that the names of **free variables** matter, and cannot be renamed.

Variables can be both free and bound.

Let $fv(M)$ be the set of free variables in $M$.
- $x \in fv(M)$ means $x$ is a free variable in M

Given that 

$$
M, N ::= x \; | \; \lambda x. M \; | \; M \; N
$$

The set of free variables are defined as:

$$
\begin{aligned}
fv(x) & \overset{def}{=} \{x\} \\
fv(\lambda x.M) & \overset{def}{=} fv(M) \backslash \{x\} \\
fv(M N) & \overset{def}{=} fv(M) \cup fv(N)
\end{aligned}
$$

These statements can be understood as:
- the free variable in $x$ is just $x$ itself
- the free variables in $\lambda x.M$ are the free variables in $M$, except for $x$
- the free variables in $M N$ are the free variables in M and the free variables in N

## Semantics

$\beta-$ reduction:

$$
(\lambda x.M) N \rightarrow M[N/x] (\beta)
$$

effectively means everything $x$ represents inside the function $M$ is substituted with $N$.
### Substitution

Given that 

$$
M, N ::= x \; | \; \lambda x. M \; | \; M \; N
$$


Substitution of free variables happen as such:

$$
\begin{aligned}
x[N/x] & \overset{def}{=} N \\
y[N/x] & \overset{def}{=} y \\
\end{aligned}
$$


The statements can be interpreted as:
- doing the substitution of $x$ replaces it with $N$
- replacing a variable that does not exist in the expression keeps it constant


$$
(M P) [N/x]\overset{def}{=} (M[n/x])(P[n/x])
$$


Effectively, to substitute across a function application, substitution needs to be done within its terms.

$$
(\lambda x. M)[N/x]\overset{def}{=} \lambda x. M
$$

Effectively, as substitution only affects the free variables, note that since $x$ here is a bounded variable, no substitution occurs.

#### Name Capture

For substitution, avoid name capture:

$$
(\lambda x. x-y)[x/y]
$$

becomes

$$
(\lambda x. x - x)
$$

which is incorrect, as the free variable $y$ becomes a bounded variable $x$. Thus, to avoid this, rename bound variables before substitution (rename bound variable to $z$ first).

### Reduction Rules

$$
\begin{aligned}
\frac{M \rightarrow M'}{M N \rightarrow M'N} \\[1ex]
\frac{N \rightarrow N'}{M N \rightarrow M N'} \\[1ex]
\frac{M \rightarrow M'}{\lambda x.M \rightarrow \lambda x.M'}
\end{aligned}
$$

### Normal form

$\beta-$redex: a term of form $(\lambda x.M) N$

$\beta-$normal form: a term containing no $\beta-$redex

> [!note] Confluence
>Terms can be evaluated in any order.

Effectively, the final result is the same, regardless of which terms are evaluated, and in which order.

The theorem is as such:

Given that $M \rightarrow *M'$,

$$
\begin{aligned}
M &\rightarrow^{0}M' & \text{ if } M =M'\\
M &\rightarrow^{(k+1)}M' & \text{ if } \exists M''. M \rightarrow M'' \land M'' \rightarrow^{k}M' \\
M &\rightarrow^{*}M' & \text{ if } \exists k.M\rightarrow^{k}M'
\end{aligned}
$$

Effectively, for all $M, M_1, M_2$, if $M \rightarrow^{*}M_{1}$ and $M \rightarrow^{*}M_{2}$, then there exists $M'$ such that $M_{1}\rightarrow^{*}M'$ and $M_{2}\rightarrow^{*}M'$.  This can be interpreted as: If there are steps to go from the original form to any intermediary form, there are steps to go from the intermediary form to the final form.

### Non-Terminating Reduction

Some terms have no normal forms, and thus, some terms may have both terminating and non-terminating reduction sequences.

### Reduction Strategies

> [!definition] Normal-order
> The left-most, **outer**-most redex is reduced first.
> 
> > [!theorem] If normal form exists, normal-order reduction finds normal form.

Given the term,

$$
(\lambda x.x \; x) (( \lambda y. y) (\lambda z. z))
$$

normal order reduces in this order:

$$
\begin{aligned}
& \bbox[yellow, 5pt]{\color{black}(\lambda x.x \; x) (( \lambda y. y) (\lambda z. z))} \\
\rightarrow & \bbox[yellow, 5pt]{\color{black}(( \lambda y. y) (\lambda z. z))} (( \lambda y. y) (\lambda z. z)) \\
\rightarrow & \bbox[yellow, 5pt]{\color{black}((\lambda z. z)} (( \lambda y. y) (\lambda z. z)) \\
\rightarrow & \bbox[yellow, 5pt]{\color{black}( \lambda y. y) (\lambda z. z)} \\
\rightarrow & \lambda z. z
\end{aligned}
$$

> [!definition] Applicative-order
> Left-most, **inner**-most redex is reduced first.

Given the term 

$$
(\lambda x.x \; x) (( \lambda y. y) (\lambda z. z))
$$ 

$$
\begin{aligned}
& (\lambda x.x \; x) \bbox[yellow, 5pt]{\color{black}(( \lambda y. y) (\lambda z. z))} \\
\rightarrow & \bbox[yellow, 5pt]{\color{black}(\lambda x.x \; x) (\lambda z. z)} \\
\rightarrow & \bbox[yellow, 5pt]{\color{black}(\lambda z. z) (\lambda z. z)} \\
\rightarrow & \lambda z. z \\
\end{aligned}
$$

> [!note] Applicative order may not be as efficient as normal order when argument is not used.

## Programming

### Encoding Boolean values/operator

$$
\begin{aligned}
True & \overset{def}{=} \lambda x. \lambda y . x \\
False & \overset{def}{=} \lambda x. \lambda y . y \\
not & \overset{def}{=} \lambda b. b \; False \; True \\
and & \overset{def}{=} \lambda b. b' \; b \; b' \; False \\
or & \overset{def}{=} \lambda b. b' \; b \; True \; b' \\
\text {if b then M else N} & \overset{def}{=} b \; M \; N
\end{aligned}
$$

### Church numerals

$$
\begin{aligned}
0 & \overset{def}{=} \lambda f. \lambda x.x \\
1 & \overset{def}{=} \lambda f. \lambda x.f x \\
2 & \overset{def}{=} \lambda f. \lambda x.f (f x) \\
n & \overset{def}{=} \lambda f. \lambda x.f^{n} x \\
succ & \overset{def}{=} \lambda n. \lambda f. \lambda x. f (n f x) \\
iszero & \overset{def}{=} \lambda n. \lambda x. \lambda y. n (\lambda z. y)x
\end{aligned}
$$

### Pairs/Tuples

$$
(M, N) \overset{def}{=} \lambda f. f M N
$$

Effectively, a pair is defined 

```
f -> x -> y -> f(x, y)
```

$$
\begin{aligned}
\pi_{0} & \overset{def}{=} \lambda p.p(\lambda x. \lambda y. x) \\
\pi_{1} & \overset{def}{=} \lambda p.p(\lambda x. \lambda y. y) \\
\end{aligned}
$$

Then to get the equivalent values back:

```
head = p -> p(x -> y -> x)
tail = p -> p(x -> y -> y)
```

This definition then can be extended to work for tuples.

# Formal Type Systems

Formal type systems are precise specification of the type checker that allows formal proofs of type safety.

Type system
- typing rules: assigns types to terms
- type safety: well-typed terms cannot go wrong

## Adding Types to $\lambda-$Calculus

$$
(Types) \; \tau, \sigma ::= T \; | \; \sigma \rightarrow \tau
$$

With these types, a term can be given a type:

$$
x\bbox[yellow, 2pt]{\color{black} : \tau}
$$

The typing context refers to a set of typing assumptions:

$$
\Gamma \vdash M: \tau
$$

$$
\Gamma ::= \cdot \; | \; \Gamma, x : \tau
$$

If the context is empty, it is indicated with $\cdot$, and otherwise includes the types of all the free variables in $M$.

### STLC Typing Rules

$$
\Gamma, x:\tau \vdash x:\tau \; \text{ (variable) }
$$

$$
\begin{aligned}
\Gamma \vdash M: \sigma \rightarrow \tau & \\
\Gamma \vdash N: \sigma & \\
\hline \
\Gamma \vdash M N: \tau & \text{ (application) }
\end{aligned}
$$

$$
\begin{aligned}
\Gamma, x : \sigma \vdash M : \tau & \\
\hline \
\Gamma \vdash (\lambda x: \sigma.M): & \text{ (abstraction) }
\end{aligned}
$$

## Soundness and Completeness

> [!definition] Sound
> Sound type systems never accept programs that can go wrong.



> [!definition] Complete
> Complete type systems never rejects a program that can't go wrong.


For any Turing-complete PL, the set of programs that may go wrong is undecidable, meaning that a type system cannot be both **sound** and **complete**.

> [!note] Soundness is preferred.

### STLC

Well-typed terms in STLC are **sound**.

> [!theorem] Type safety in STLC
> For any $M, M'$ and $\tau$, if $\cdot \vdash M:\tau$ and $M \rightarrow^{*}M'$, then $\cdot \vdash M':\tau$, and either $M' \in values$ or $\exists M''.M' \rightarrow m''$.
> 
> The reduction of a well-typed term either diverges, or terminates in a value of the expected type.
> 
> > [!theorem] Lemma: Preservation
> > For any $M, M', \tau$, if $\cdot \vdash M: \tau$ and $M \rightarrow M'$, then $\cdot M': \tau$
> > 
> > Well-typed terms reduce only to well-typed terms of the same type.
> 
> > [!theorem] Lemma: Progress
> > For any $M, \tau$, if $\cdot \vdash M: \tau$, then either $M \in values$ or $\exists M'.M\rightarrow M'$.
> > 
> > A well-typed term is either a value or can be reduced.

STLC is **not complete**. The type system may reject terms that do not go wrong.

> [!theorem] Well-typed terms in STLC always terminate
> Strong normalisation theorem.



$$
\begin{aligned}
(\lambda x. \lambda y. ( \lambda z. y)(x x))((\lambda w. w w) (\lambda a. a a)) \\
\lambda y. ( \lambda z. y)((\lambda w. w w) (\lambda a. a a) (\lambda w. w w) (\lambda a. a a))) \\
\lambda y.(\lambda z.y)
\end{aligned}
$$