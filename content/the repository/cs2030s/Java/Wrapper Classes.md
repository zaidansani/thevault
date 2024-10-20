---
title: Wrapper Classes
tags: [CS2030S, java_programming]
---
>[!summary] Used to make primitive types non-primitive, allowing them to be used in generics, and other uses.


| Primitive | Wrapper   |
| --------- | --------- |
| `int`     | `Integer` |
| `double`  | `Double`  |
| `bool`    | `Boolean` |
These wrapper classes allow creation of flexible programs, but come at the cost of performance due to the cost of memory allocation and garbage collection. This is as wrapper classes are [immutable](../FP/Immutability.md) and thus every time it is "updated", a new object is created.
# Autoboxing and Unboxing

Autoboxing refers to the **conversion of a primitive value into an instance of a wrapper class.**
Unboxing refers to the opposite, **a conversion of an instance of a wrapper class into a primitive value**.

