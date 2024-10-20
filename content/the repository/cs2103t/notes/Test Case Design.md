---
title: Test Case Design
---
Exhaustive testing is not practical. 

Testing should be
- effective: finds a high percentage of existing bugs
- efficient: high rate of success

For testing to be effective and efficient (E&E), each test added should target a potential fault that is not already targeted by existing test cases.

# Introduction
## Positive and negative test cases

> [!definition] Positive test case
> Designed to produce expected/valid behaviour

> [!definition] Negative test case
> Designed to produce invalid/unexpected situations, such as error messages.
## Black box, glass box

> [!definition] Black-box
> Specification/responsibility-based approach
> 
> Test cases are designed exclusively based on SUT's specified external behaviour.

> [!definition] White-box
> Glass-box/structured/implementation-based
> 
> Designed based on what is known about SUT's implementation

> [!definition] Gray-box
> 
> Uses some important infromation about implementation.
## Testing based on use cases

To increase E&E of testing
- high priority use cases are given more attention

# Equivalence Partitions

> [!definition] Equivalence partitioning (EP)
> A group of test inputs that are likely to be processed by SUT in the same way.

Most SUTs do not each input in a unique way - instead processing all possible inputs in a small numbers of distinct ways. 

By dividing possible inputs into EPs,
- avoid testing too many inputs from one partition
- ensure all partitions are tested.

> [!example] Possible EPs
> for a valid month:
> `[MIN_INT, 0]` below range producing `true`
> `[1, 12]` range producing `true`
> `[13, MAX_INT]` above range producing `true`

To decide EPs of OOP methods, identify EPs of all data participants that can potentially influence behaviour of the method, such as:
- target object of method call
- input parameters
- other data/objects accessed by method such as global variables (might not be applicable for black-box)
# Boundary Value Analysis

Typically, three values around the boundary should be tested:
1. one value from boundary
2. one value from just below
3. one value from just above