---
title: "Tell-Don't-Ask"
tags: [CS2030S, object_oriented_programming]
---
> [!summary] The client should tell an object to do the computation, instead of retrieving its attributes and doing the computation themselves.

If the internal methods need to be known in order to do something with it, the **abstraction barrier** is broken. Thus, in order to prevent this, the preferred approach is to **implement a method within the class** that does the extra computation.

> [!example] Instead of retrieving the radius of a circle and calculating the circumference from it, there should be a method in the class object that calculates the circumference internally.

