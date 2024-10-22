---
title: Heap
tags: [CS2040S, data_structures]
---
> [!info] Used to implement a max priority queue

Used for [HeapSort](../Algorithms/HeapSort.md)
# Properties

## Heap Ordering
* depending on maximum/minimum, $parent > child$ or $parent < child$
# Complete Binary Tree
* filled up from left to right
* results in a height of $O(log(n))$
# Operations

``insert`` $O(logn)$
* add as leaf, bubble up until not required.
``increaseKey`` $O(logn)$
* bubble up key
``decreaseKey`` $O(logn)$
* bubble down key (leftwards)
``delete`` $O(logn)$
* swap last element with element to be deleted
* delete last element
* bubble down element at position of element to be deleted
``extractMax/Min`` $O(logn)$
* run a `delete` operation on the root node