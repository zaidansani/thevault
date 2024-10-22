---
title: Simplification
tags: [computer_architecture, CS2100, digital_logic]
---
> [!note] Purpose of simplification
> Simpler expression leads to circuit with lesser logic gates, resulting in cheaper, low-power-requirement, and sometimes faster.

# Techniques

## Algebraic Simplification

Aims to minimise number of literals and number of terms.

![](media/Pasted%20image%2020241002141314.png)
## Half-Adder

> [!definition] Half adder
> A circuit that adds 2 single bits (X, Y) to produce a result of 2 bits (C, S).

![[media/Simplification 2024-10-02 14.18.16.excalidraw.svg]]

$$
\begin{aligned}
C & = X \cdot Y \\
S & = X' \cdot Y + X \cdot Y' \\
& = X \oplus Y
\end{aligned}
$$

## Gray Code

- Unweighted (not an arithmetic code)
- Only a single bit change

![](media/Pasted%20image%2020241002144104.png)

## K-Maps

> [!definition] Karnaugh-map
> Abstract form of Venn diagram, organised as a matrix of squares, where each square represents a minterm, and two adjacent squares represent minterms that differ by exactly one literal.

Objective: Fewest possible product terms and literals.
Advantage: Easy to use
Disadvantage: Limited to 5 or 6 variables

![[media/Simplification 2024-10-02 14.49.50.excalidraw.svg]]

> [!note] Filling the K-map
> Put a `1` to correspond to a minterm in the function, and `
` otherwise.

![[media/Simplification 2024-10-02 14.55.35.excalidraw.svg]]
## Variable K-maps

![[media/Simplification 2024-10-03 16.11.51.excalidraw.svg]]Each cell in a $n-$ variable K-map has $n$ adjacent neighbours. The K-map allows for this with a wrap-around.

![[media/Simplification 2024-10-03 16.27.30.excalidraw.svg]]

As the number of variables increase, it is harder to draw out. For $5-$variable K-maps, where there will be an expected $2^{5}= 32$ amount of squares, it can be organised as two $4-$ variable K-maps, where, one K-map is on top of the other.

## Using K-maps

$$ A + A' = 1$$
The unifying theorem (complement law) allows us to use
- each valid grouping of adjacent cells to correspond to a simpler product term of $F$

![[media/Simplification 2024-10-03 16.43.26.excalidraw.svg]]

Assume that the green squares are the minterms with output `1` for function $F$.

We currently have:
$$
\begin{aligned}
F &= m0 + m1 \\
&= a' \cdot b' \cdot c' + a' \cdot b' \cdot c
\end{aligned}
$$

Since $m0, m1$ are adjacent, we can group them together, meaning we eliminate the variable $c$ from the product term.

$$
\begin{aligned}
F &= (a' \cdot b') (c' + c) & \text{Complement law}\\
&= a' \cdot b'
\end{aligned}
$$

> [!important] To use effectively:
> 1. Group as many cells as possible
> 	- The larger the group, the fewer the number of literals in product term.
> 2. Select as few groups as possible (the lesser the groups, the fewer the number of product terms)

## Implicants


> [!definition] Implicants
> A product term that could be used to cover minterms of a function

> [!definition] Prime implicants
> A product term obtained by combining the maximum possible number of minterms from adjacent squares in the map.


![[media/Simplification 2024-10-03 17.17.44.excalidraw.svg]]


> [!definition] Essential prime implicants
> A prime implicant that includes at least one minterm that is not covered by any other prime implicant

![[media/Simplification 2024-10-03 17.24.20.excalidraw.svg]]

> [!important] Algorithm
> 1. Circle all prime-implicants
> 2. Identify and select all essential prime-implicants
> 3. Select a minimum subset

![[media/Simplification 2024-10-03 17.33.15.excalidraw.svg]]
> [!note] Simplified POS expression
> The Simplified POS expression can be found using two methods:
> - the K-map of the maxterms, and grouping 0s together
> - complement of the SOP expression

## Don't Care conditions

> [!definition] Don't care conditions
> In some cases, outputs are not specified or are invalid. These outputs can then be either `1` or `0`. These conditions are denoted `X` or `d`.

![[media/Simplification 2024-10-03 19.48.20.excalidraw.svg]]

This changes the eventual SOP/POS expressions.

![[media/Simplification 2024-10-03 19.53.11.excalidraw.svg]]

