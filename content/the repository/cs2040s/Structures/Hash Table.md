---
title: Hash Table
tags:
  - CS2040S
  - data_structures
---
> [!summary] A hash table utilises a hash function to assign an index to a value, allowing for constant search time.

# Hash Function

> [!info] A hash function is the function used to determine the *bucket* in which a value is stored. 

However, there is an infinitely large amount of possible keys $U$ and a smaller number $n$ of actual buckets or keys that can be held. Thus, collisions (two distinct values mapped to the same bucket) is inevitable. This can be proven by the **Pigeonhole Principle.**

> [!info] Two distinct keys $k_1,k_2$ collide if $h(k_1) = h(k_2)$.

## Double Hashing

Double hashing is the practice of using two hash functions to minimise collisions.
# Collisions

> [!info] Generally, the cost of a hash function is considered as $O(1)$.


| Chaining                                        | Open Addressing                             |
| ----------------------------------------------- | ------------------------------------------- |
| Utilises the Simple Uniform Hashing Assumption. | Utilises the Uniform Hashing Assumption.    |
| Can store infinite amount of elements.          | Can only store up to the size of the table. |

## Chaining

This approach stores a list of elements in one bucket, instead of one.

`insert(key, value)` $O(1 + cost(h)) = O(1)$

1. The hash of the key is computed.
2. The node is added to the linked list.

`search(key)` $O(n + cost(h)) = O(n)$

1. The hash of the key is computed
2. Search through the linked list to find the key.

> [!info] Given a hash function that satisfies the [[#Simple Uniform Hashing Assumption]], the expected maximum chain length is $O(logn)$ or $O(loglogn)$.
## Open-Addressing

For this approach, instead of storing a list of elements in one bucket, the hash function is redefined such that the key is mapped to a permutation, and goes through the permutation until it is able to find an empty bucket.

> [!example] Linear probing uses a singular hash function to find the first value of the hash, then increments by 1 until it finds a bucket that is empty.

However, for this approach, if the table is full, there is no way to store more elements, other than to resize it, unlike chaining. Thus, the table has to be **resized** from time to time.

The resizing needs to be factored in when considering time complexity of the insertion of elements. The **amortized cost** needs to be considered.

> [!info] An operation has **amortized cost** $T(n)$ if for every integer $k$, the cost of $k$ operations is $\leq kT(n)$.
> >[!note] Amortized is not average. Another way to look at it is: At $k$ operations,  $T(n)$ is the value where the total running time should be lesser than  $kT(n)$ for all $k$.

# Hashing Assumptions

## Simple Uniform Hashing Assumption
- every key is equally likely to be mapped to every bucket
- keys are mapped independently

## Uniform Hashing Assumption
- every key is equally likely to be mapped to every permutation independent of every other key.