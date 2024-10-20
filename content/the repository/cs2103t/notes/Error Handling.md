---
tags:
  - software_engineering
title: Error Handling
---
# Assertions

> [!definition] Assertion
> Used to define assumptions about program state so that runtime can verify them.

If an assertion failure, it typically takes some drastic action such as terminating the execution with an error message.

## How

Using the `assert` keyword:
```
assert ....
```

> [!note] To disable assertions:
> `java -enableassertions ....`

## When

Assertions can be used liberally, as the impact on performance is low, and worth the additional safety.

> [!important] Do not use assertions to do work because they can be disabled.

Assertions can be used to verify assumptions about:
- internal invariants
- control-flow invariants
- preconditions 
- postconditions
- class invariants