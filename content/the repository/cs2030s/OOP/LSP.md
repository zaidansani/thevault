---
title: LSP
tags: [CS2030S, object_oriented_programming]
---
>[!summary] 
>Let $\phi(x)$ be a property provable of objects $x$ of type $T$.
>Then $\phi(y)$ should be true for objects $y$ of type $S$ where $S <: T$.

Polymorphism needs to be done carefully as overriding a method can cause the code to fail without implementer changing anything in their code. This cannot be checked by the compiler.

Effectively, a subclass should **not break the expectations set by the superclass**. If a class $B$ is substitutable for a parent class $A$, it should be able to pass all test cases of the parent class $A$.

> [!example] 
> 
> Given a `Restaurant` class and a `LunchRestaurant` subclass, and a `canMakeReservation` method.
> 
> If the `canMakeReservation` method returns true at all times, but the overridden method in `LunchRestaurant` does not at certain times: we get the case where a test case fails.
> 
> ```
> Restaurant r = new Restaurant();
> Restaurant lr = new LunchRestaurant();
> 
> r.canMakeReservation(1200) == true // expected behaviour
> lr.canMakeReservation(1200) == true // fails
> ```
# Prevent inheritance

To prevent inheritance and/or overriding, consider using the `final` [modifier](../Java%20Concepts/Modifiers.md).
- Adding a `final` modifier to the class to prevent it from being inherited.
- Adding a `final` modifier to the methods to prevent it from being overridden.