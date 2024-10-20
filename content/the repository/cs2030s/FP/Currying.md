---
title: Currying
tags:
  - CS2030S
  - java_programming
  - functional_programming
---
> [!summary] The conversion of multi-variable functions into multiple chained unary functions.

> [!example] Consider the binary function $add(y, z)$.
```java
(x, y) -> x + y \\ non-curried
x -> y -> x + y \\ curried
```

This is useful in cases where some arguments are unavailable until later on in the computation process - allowing for the partial application of a function first.

