---
title: Boolean Algebra
tags:
  - computer_architecture
  - digital_logic
  - CS2100
---
# Digital Circuits

![[media/Boolean Algebra 2024-10-01 22.31.50.excalidraw.svg]]
> [!note] Advantages of digital circuits
> - More reliable
> - Specified accuracy
> - Abstraction can be applied using simple mathematical model
> - Ease design, analysis and simplification of digital circuit

> [!important] Combinational
> No memory, output depends solely on the input

- Gates
- Decoders, multiplexers
- Adders, multipliers

> [!important] Sequential
> With memory, output depends on both input and current state

- Counters, registers, memories

# Boolean Values

`true`: 1
`false`: 0


![[media/Boolean Algebra 2024-10-01 22.38.06.excalidraw.svg]]

Conjunction `AND`: $A \cdot B, A \wedge B$
Disjunction `OR`: $A + B, A \vee B$
Negation `NOT`: $A', \bar{A}, \neg A$

## Precedence of Operators

1. Parenthesis
2. `NOT`
3. `AND`
4. `OR`

## Laws of Boolean Algebra

> [!theorem] Identity laws
> $$
> \begin{aligned}
> A + 0  = 0 + A & = A \\
> A \cdot 1  = 1 \cdot A & = A \\
> \end{aligned}
> $$

> [!theorem] Inverse/complement laws
> $$
> \begin{aligned}
> A + A'  = A' + A & = 1 \\
> A \cdot A'  = A' \cdot A & = 0 \\
> \end{aligned}
> $$

> [!theorem] Commutative laws
> $$
> \begin{aligned}
> A + B & =  B + A\\
> A \cdot B  &= B \cdot A \\
> \end{aligned}
> $$

> [!theorem] Associative laws
> $$
> \begin{aligned}
> A + (B + C) & =  (A + B) + C\\
> A \cdot (B \cdot C)  &= (A \cdot B) \cdot C \\
> \end{aligned}
> $$

> [!theorem] Distributive laws
> $$
> \begin{aligned}
> A \cdot (B + C) & =  (A \cdot B) + (A \cdot C)\\
> A + (B \cdot C)  & = (A + B) \cdot (A + C)\\
> \end{aligned}
> $$

> [!important] Duality
> If the `AND/OR` operations and identity elements `0/1` in a Boolean equation are interchanged, the equation remains valid.
> 
> > [!example] $(x + y + z)' = x' \cdot y' \cdot z' \text{ is valid } \implies (x \cdot y \cdot z)' = x' + y'+ z' \text{ is valid }$

> [!theorem] Idempotency
> $$
> \begin{aligned}
> X + X & = X\\
> X \cdot X &= X\\
> \end{aligned}
> $$

> [!theorem] One element/zero element
> $$
> \begin{aligned}
> X + 1 = 1 + X & = X\\
> X \cdot 0 = 0 \cdot X &= X\\
> \end{aligned}
> $$

> [!theorem] Involution
> $$
> (X')' = X
> $$

> [!theorem] Absorption
> $$
> \begin{aligned}
> X + X \cdot Y &= X \\
> X \cdot (X + Y) &= X\\
> \end{aligned}
> $$

> [!theorem] Absorption
> $$
> \begin{aligned}
> X + X' \cdot Y &= X + Y \\
> X \cdot (X' + Y) &= X \cdot Y \\
> \end{aligned}
> $$

> [!theorem] DeMorgan's
> $$
> \begin{aligned}
> (X + Y)' & = X' \cdot Y' \\
> (X \cdot Y)' & = X' + Y'
> \end{aligned}
> $$

> [!theorem] Consensus
> $$
> \begin{aligned}
> X \cdot Y + X' \cdot Z + Y \cdot Z  & = X \cdot Y + X' \cdot Z \\
> (X \cdot Y) + (X' \cdot Z) + (Y \cdot Z)  & = (X + Y) + (X' + Z)
> \end{aligned}
> $$

> [!note] Complement
> Obtained by interchanging 1 with 0 in the function's output values

## Standard Forms

1. Sum-Of-Products (SOP)
2. Product-of-Sums (POS)

> [!definition] Literal
> Boolean variable on its own
> > [!example] $x$, $x'$

> [!definition] Product term
> Single literal or logical product `AND` of several literals
> > [!example] $x$, $x \cdot y$

> [!important] Sum-of-products (SOP)  expression
> A product term or a logical sum `OR` of several product terms
> > [!example] $x$, $(x \cdot y) + (x' \cdot y')$

> [!definition] Sum term
> Single literal or a logical sum `OR` of several literals
> > [!example] $x$, $x + y$

> [!important] Product-of-sums (POS)  expression
> A sum term or a logical product `AND` of several sum terms
> > [!example] $x$, $(x+y) \cdot (x'+y')$

## Minterms and Maxterms

> [!definition] Minterm
> A product term that contains $n$ literals from all the variables.
> 
> > [!example] for $x, y$, minterms: $x' \cdot y', x' \cdot y, x \cdot y', x \cdot y$
> 

> [!definition] Maxterm
> A sum term that contains $n$ literals from all the variables.
> 
> > [!example] for $x, y$, minterms: $x' + y', x' + y, x + y', x + y$

> [!important] For $n$ variables, there is up to $2^{n}$ maxterms/minterms.

| x   | y   | Minterms      | Maxterms  | Notation |
| --- | --- | ------------- | --------- | -------- |
| $0$ | $0$ | $x' \cdot y'$ | $x + y$   | m/M0     |
| $0$ | $1$ | $x' \cdot y$  | $x + y'$  | m/M1     |
| $1$ | $0$ | $x \cdot y'$  | $x' + y$  | m/M2     |
| $1$ | $1$ | $x \cdot y$   | $x' + y'$ | m/M3     |
> [!important] Each minterm is the complement of the corresponding maxterm and vice versa.

> [!definition] Canonical forms
> - Sum-of-minterms = Canonical sum-of-products
> - Product-of-maxterms = Canonical product-of-sums

> [!definition] Sum-of-minterms
> Obtain sum-of-minterms expression by gathering minterms of the function, where output is 1.

![[media/Boolean Algebra 2024-10-02 01.03.06.excalidraw.svg]]

> [!definition] Product-of-maxterms
> Obtain product-of-maxterms expression by gathering the maxterms of the function (where output is 0)

![[media/Boolean Algebra 2024-10-02 01.10.32.excalidraw.svg]]

### Conversion of Standard Forms

The conversion is just the opposite of the current result.

For example, given the example:
![[media/Boolean Algebra 2024-10-02 01.03.06.excalidraw.svg]]


We can then also, derive $F'$:
$$
\begin{aligned}
F' & = m1 + m3 & \\
F & = (m1 + m3)' & \\
& = m1' \cdot m3' & \text{De Morgan's Law} \\
& = M1 \cdot M3 & mx' = Mx
\end{aligned}
$$

Similarly from the product-of-maxterms:
![[media/Boolean Algebra 2024-10-02 01.10.32.excalidraw.svg]]

$$
\begin{aligned}
F' & = M0 \cdot M2 & \\
F & = (M0 \cdot M2)' & \\
& = M0' + M2' & \text{De Morgan's Law} \\
& = m0 + m2 & mx' = Mx
\end{aligned}
$$
