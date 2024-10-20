---
title: Inheritance
tags:
  - CS2030S
  - object_oriented_programming
---
>[!summary] Modeling the _IS-A_ relationship

If a class is a sub-type of another, code that operates on the superclass should operate similarly on its subtypes. This models the **IS-A** relationship.

> [!example] Consider a ColouredCircle, which allows a circle to contain a colour. It is a type of circle, so anything that a circle can do, it must be able to do.

> [!caution] Inheritance needs to preserve the meaning of subtyping.

## Run-Time Type

In Java, a variable of type $T$ can hold a value of type $S$ if $S <: T$.

Thus, given the following:
```Java
T var = new S();
```
The compile-time type of ``var`` is $T$, but the run-time type is $S$.
