---
title: Variance of Types
tags:
  - CS2030S
  - java_programming
---
> [!summary] This refers to how the subtype relationship between **complex types** relates to the subtype relationship between its components.

A complex type is a nested data structure with primitive data types or other complex types. With regards to complex type, if:
* $S <: T \implies C(S) <: C(T)$,  it is **covariant**
* $S <: T \implies C(T) <: C(S)$,  it is **contravariant**
* otherwise,  it is **invariant**

Arrays in Java are **covariant**. 
> [!example] Given an array `S[] sArray = ...`, and $S <: T$, we can do `T[] tArray = sArray`.

However, this causes issues, as if we do this, we can then put items of `T` that may not be subtypes of `S` into the array which is still of run-time type `S[]`. Thus, type safety can be compromised. 