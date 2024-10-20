---
title: Immutability
tags:
  - CS2030S
  - java_programming
  - functional_programming
---
>[!summary] If an object is immutable, once it has been initialised, it cannot be changed.

# Advantages

> [!tip] Ease of understanding

Even after running multiple methods on an immutable variable, it remains the same, allowing ease of reading, understanding and debugging.

> [!tip] Enabling safe sharing of objects

Making a class immutable allows us to safely share instances of the class, reducing the need to create multiple copies of the same object. If the class is not immutable, it is possible to change the object that is referred to by many objects, resulting in possible unseen effects.

> [!tip] Enabling safe sharing of internals

Immutable instances can also share their internals freely.

> [!tip] Enabling safe concurrent execution

Concurrent programming allows multiple threads of code to run in an interleaved fashion. If the code is hard to debug, it is harder to ensure correctness when it interleaves.

# Making a class immutable

> [!caution] The `final` keyword does not automatically make a class immutable.

Using `final` helps to prevent accidental re-assignment, but it does not block mutability.
- Consider when the internal fields are retrievable - if they are mutable, they can then be accessed and changed. This makes the class mutable.
