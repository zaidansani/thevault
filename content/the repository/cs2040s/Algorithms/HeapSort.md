---
title: HeapSort
tags:
  - algorithms
  - CS2040S
---
1. Heapify the unsorted list
2. Run ``extractMax`` $n$ times on the heap, and put them in the right order.

$$ O(nlogn) $$
# Heapify

> [!summary] Converts an unsorted array into a heap

## v1
1. Insert ($O(logn)$) every element into the heap.
$$ O(nlogn)$$
## v2
1. Consider recursive idea: each leaf is a heap (base case).
2. The left and right child are then heaps (recursively).
3. If the parent is larger than either, bubble down.
$$ O(n) $$

![[diagrams/heapify.svg]]
%%[[diagrams/heapify|🖋 Edit in Excalidraw]]%%

