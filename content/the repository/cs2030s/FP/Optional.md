---
title: Optional
tags: [CS2030S, functional_programming, java_programming]
---
>[!summary] A [[Monads|monad]] that allows for a class to hold a non-existing value without using the `null` value, which may be valid.

> [!info] The Java implementation is the generic type `Optional<T>`.

This class internalises all the checks for `null` on the client behalf, by ensuring if `null` represents a missing value, the semantics of this missing value is preserved throughout the operation.

This is better than using the non-wrapper to represent this as a `null` could possibly be a valid value (instead of a missing item).