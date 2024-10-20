---
title: Logic Circuit
tags: [computer_architecture, CS2100, digital_logic]
---
# Logic Gates

%% [logic gate image](media/Pasted%20image%2020241002014122.png) %%
%%[and/or gates](media/Pasted%20image%2020241002014138.png) %%
%%[nand/nor gates](media/Pasted%20image%2020241002014153.png) %%
%% [xor/xnor](media/Pasted%20image%2020241002014214.png) %%

![[media/Logic Circuit 2024-10-02 01.45.16.excalidraw.svg]]
# Logic Circuits

> [!definition] `fan-in`
> Number of inputs of a gate

## Universal Gates

> [!note] `AND`, `OR`, `NOT` gates are sufficient for building any boolean function. 
> This is called a complete set of logic.

Other gates may still be used due to
- usefulness (`XOR`: parity bit generation)
- economical
- self-sufficient (`NAND/NOR` gates)
### `NAND` as a universal gate
![](media/Pasted%20image%2020241002021112.png)

### `NOR` as a universal gate
![](media/Pasted%20image%2020241002021139.png)

## Implementing SOP and POS

### SOP expressions

> [!note] Sum-of-product expression implementation
> Can be implemented using:
> 1. 2 level AND-OR circuit (first level: AND, second level: OR)
> 2. 2 level NAND circuit 

![[media/Logic Circuit 2024-10-02 02.14.22.excalidraw.svg]]
### POS expressions

> [!note] Product-of-sums expression implementation
> Can be implemented using:
> 1. 2 level OR-AND circuit (first level: OR, second level: AND)
> 2. 2 level NOR circuit 

![[media/Logic Circuit 2024-10-02 02.24.14.excalidraw.svg]]
# Programming Logic Array

> [!definition] Programming logic array
> Programmable integrated circuit implements sum-of-products circuits (to allow multiple outputs)

![[media/Drawing 2024-10-02 02.28.36.excalidraw.svg]]
