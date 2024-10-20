---
title: Monads
tags: [CS2030S, functional_programming, java_programming]
---
> [!summary] A monad is a type of programming paradigm, that is usually fulfilled by a `flatMap` or equivalent operation.

# Laws

> [!info] 
> Left-Identity Law: `Monad.of(x).flatMap(x -> f(x))` must be the same as `f(x)`
> Right-Identity Law: `monad.flatMap(x -> Monad.of(x))` must be the same as `monad`
> Associative Law: `monad.flatMap(x -> f(x)).flatMap(x -> g(x))` must be the same as `monad.flatMap(x -> f(x).flatMap(y -> g(y)))`

# Functor

A\functor is another programming paradigm. As the `map` operation can be implemented through a `flatMap`, a monad is a functor.

> [!example] `return monad.flatMap(x -> Monad.of(mapper))`

The `map` operation needs to fulfill as such:
> [!info]
> - preserving identity: `functor.map(x -> x)` is the same as `functor`
> - preserving composition: `functor.map(x -> f(x)).map(x -> g(x))` is the same as `functor.map(x -> g(f(x))`.



