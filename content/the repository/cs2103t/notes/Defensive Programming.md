---
title: Defensive Programming
tags: [CS2103/T, software_engineering]
---
> [!note] Defensive programming
> "If room is left for things to go wrong, they will go wrong."

# Enforcing compulsory associations

Proactively enforcing the multiplicity constraint can ensure safety.

> [!example] Account and guarantor
> If a banking system does not proactively enforce the multiplicity constraint, an `Account` might have no `Guarantor`, which could result in dangerous consequences.

# Enforcing defensive programming

Some objects have 1-to-1 associations, which means that a defensive implementation would mean that `A` cannot exist without `B` and vice-versa, if they have 1-to-1 associations.

Thus, to defensively program, create the associated object of `B` in `A`'s constructor.

# Enforcing referential integrity

Bidirectional associations could be broken with a non-defensive implementation.

To maintain referential integrity, to break association, both associations must be broken at the same time.

> [!example] Relationships
> If James breaks up with Jean, Jean must also break up with James.
> `James.setGirlfriend(null)` must happen at same time as `Jean.setBoyfriend(null)`.

# When to defensively program?

Degree of defensiveness depends on:
- Criticality of system
- Code use by other than author?
- Level of programming language support
- Overhead of being defensive

# Design by Contract

> [!definition] DbC]\
> Designing software that requires defining formal, precise, and verifiable interface specifications for software components.

