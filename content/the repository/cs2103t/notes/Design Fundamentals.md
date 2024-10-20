---
title: Design Fundamentals
tags:
  - software_engineering
  - CS2103/T
---
# Abstraction
> [!definition] Abstraction
> A technique for dealing with complexity. Works by establishing a level of complexity, and suppressing more complex details below aforementioned level.
> 
> > [!important] Only relevant details need be considered.

Types of abstraction:
- data abstraction (abstracting away lower level data items, thinking in terms of bigger entities)
- control abstraction (abstracting away details of actual control flow)

# Coupling
> [!definition] Coupling
> A measure of degree of dependence between components, classes, methods.

High coupling is **discouraged** due to:
- higher complexity of maintenance
- higher complexity of integration
- higher complexity of testing/reuse

> [!note] X is coupled to Y if a change to Y potentially requires a change in X.

Types of coupling:
- Content coupling (one module modifies, or relies on the internal workings of another module)
- Common/Global coupling (two modules share the same global data)
- Control coupling (One module controls flow of another)
- Data coupling (One module sharing data with another)
- External coupling (Two modules share externally imposed convention)
- Subclass coupling (Class inherits from another class)
- Temporal coupling (Two actions are bundled together just because they happen to occur at same time)

# Cohesion
> [!definition] Cohesion
> Cohesion is a measure of how strongly-related and focused the various responsibilities of a component are.

Higher cohesion is better. Low cohesion
- lowers understandability of modules - harder to express at a higher level
- lowers maintability because module can be modified due to unrelated causes
- lowers reusability of modules because they do not represent logical units of functionality

> [!example] Cohesion
> - Code related to single concept is kept together
> - Code invoked close together in time is kept togehter
> - Code manipulating same structure is kept together

