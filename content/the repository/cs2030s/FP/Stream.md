---
title: Stream
tags:
  - functional_programming
  - CS2030S
  - java_programming
---
> [!summary] A `Stream` is a [[Monads|monad]] that is lazy, in which it could have a infinite list of elements. 

A stream is useful as it can be used to truncate repeated similar computations on a list of elements.
# Stateful and Bounded Operations

Stateful operations are **operations that need to keep track of states to operate.**
Bounded operations are **operations that should only be called on finite streams.**

> [!example] `sorted`, `distinct`

# `stream` methods

## Factory

- `iterate` Takes in a seed, and a `Supplier` that repetitively runs on the seed to get the next element.
- `generate` Takes in a `Supplier` that generates the next element.
## Truncation

- `limit` takes in an integer `n` and returns a stream of the first `n` elements.
- `takeWhile` takes in a predicate and returns a stream containing elements of a stream (might not actually return a finite stream if predicate is always false.)
## Reduction

- `reduce` It applies a function repeatedly on the elements of the stream, reducing it to a singular value.
## Element Matching
- `noneMatch`, `allMatch`, `anyMatch`