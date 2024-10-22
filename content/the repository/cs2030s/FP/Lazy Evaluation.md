---
title: Lazy Evaluation
tags: [CS2030S, functional_programming, java_programming]
---
>[!summary] A type of [[Monads|monad]] allowing for the delay of an execution of a computation.

Lazy evaluation allows for:
- the delay of an execution of a computation
- memoisation to prevent repeated computation.

# Lambda as Delayed Data

The lambda does not invoke the function, thus storing the lambda in a wrapper class, with the ability to store its value, allows us to delay the execution of the lambda and store the computed result. 