---
title: Information Hiding
tags:
  - CS2030S
  - object_oriented_programming
---
>[!summary] There should be an abstraction barrier between the client and the implementation.

## Data hiding

Using modifiers such as ``private`` and ``public`` explicitly specify if a field or method can be accessed from outside the abstraction barrier. In general, class fields should be ``private``.

To initialise these fields, a constructor should be used instead.

## Accessor and mutators

An accessor `getX()` or mutator `setX(...)` is still better than setting the field ``public``. This is as it still adds a layer of abstraction, such as the ability to rename the field internally without affecting the clients.

These methods can also implement validation checks, which could be bypassed with ``public`` instance/class variables.

The use of accessor and mutators are not recommended in general.