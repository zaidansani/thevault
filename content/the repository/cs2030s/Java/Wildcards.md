---
title: Wildcards
tags: [CS2030S, java_programming]
---
>[!summary] 
> Wildcards allow the bounding of the type parameters.

# Upper-Bounded Wildcards

Upper-bounded wildcards are **covariant**.

This means that if $S <: T$, then `A<? extends S>` $<:$ `A<? extends T>`.
Similarly, for any type $S$, then `A<S>` $<:$ `A<? extends S>`

# Lower-Bounded Wildcards

Lower-bounded wildcards are **contravariant**.

This means that if $S <: T$, then `A<? super T>` $<:$ `A<? super S>`.
Similarly, for any type $S$, then `A<S>` $<:$ `A<? super S>`

# Unbounded Wildcards

The complex type `A<?>` is the supertype of all possible `A<T>`.

Differences between:
- `A<?>`: Complex type of some specific but unknown type
- `A<Object>`: Complex type of `Object` instances with type checking
- `A`: Complex type of `Object` instances without type checking.
# PECS
> [!important] Producer Extends, Consumer Super

- If the variable is a **producer** (it returns a variable of type $T$) it should be declared `<? extends T>`.
- If the variable is a **consumer** (it accepts a variable of type $T$) it should be declared `<? super T>`.