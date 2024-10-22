---
title: Design Principles
tags: [CS2103/T, software_engineering]
---
# SOLID Principles

- SRP
- OCP
- LSP
- ISP
- DIP
# Separation of Concerns (SoC)

> [!definition] Separation of concerns
> To achieve better modularity, separate the code into distinct sections, such that each section addresses a separate concern.

This principle allows for higher cohesion and lower coupling.

# Single Responsibility Principle (SRP)

> [!definition] Single responsibility principle
> A class should have one, and only one, reason to change.

The class should only change when there is a change to its singular responsibility.

# Liskov Substition Principle (LSP)

> [!definition] Liskov Substitution Principle
> Derived class must be substitutable for base classes.

LSP implies that a subclass should not be more restrictive than the behaviour specified by superclass.

# Open-Closed Principle (OCP)

> [!definition] Open-closed principle
> A module should be open for extension but closed for modification. Modules should be written so that they can be extended without requiring them to be modified.

Aim: make code entity easy to adapt and reuse without modifying it itself.

> [!example] Can be done by separating specification (interface) of a module from implementation

# Law of Demeter (LoD)

> [!definition] Law of Demeter
> Object should have limited knowledge of another, and should only interact with objects that are closely related to it.
# Interface Segregation Principle (ISP)

> [!definition] Interface segregation principle
> No client should be forced to depend on methods it does not use.

# Dependency Inversion Principle (DIP)

> [!definition] Dependency inversion principle
> High level modules should not depend on low level modules.
> Abstractions should not depend on details. Details should depend on abstractions.

# YAGNI principle

> [!definition] You Aren't Gonna Need It Principle
> Do not add code simply because it might be needed in the future.

# DRY principle

> [!definition] Don't Repeat Yourself principle
> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

# Brooks' law

> [!definition] Brooks' law
> Adding people to a late project will make it later: additional communication overhead outweighs the benefit of adding extra manpower, especially if done near a deadline.

