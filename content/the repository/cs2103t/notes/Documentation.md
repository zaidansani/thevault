---
title: Documentation
tags: [CS2103/T, software_engineering]
---
Developer-to-developer documentation can be in two forms.

> [!note] Documentation for developer-as-user
> 
> Software components are written by developers and reused by other developers, and documentation is needed for these other developers to use them.
> 
> > [!example] API documentation, tutorial-style instructional documentation

> [!note] Documentation for developer-as-maintainer
> 
> Software components need to be able to be maintained by other developers. 
> 
> > [!example] Developer guide

Software documentation is best kept in a text format for ease of version tracking.

# Guidelines

## Aim for comprehensibility

> [!definition] Aim for comprehensibility
> Not enough for documentation to be accurate and comprehensive, must be comprehensible.

- Use plenty of diagrams
- Use plenty of examples
- Use simple and direct explanations
- Get rid of statements that do not add value
- Not a good idea to have separate sections for each type of artifact

## Describe top-down

> [!definition] Describe top-down
> Top-down breadth-first explanation is easier to understand than a bottom-up one.

Advantage is that reader can travel down a path interested in until it reaches component interested to learn in-depth without having to read the entire document.

## Minimal but sufficient

> [!definition] Minimal but sufficient
> Aim for 'just enough' developer documentation

Focus on providing higher level information not readily visible in code or comments.
- Refrain from duplicating chunks of text
- Describe similarities in one place, and emphasize only differences in other places