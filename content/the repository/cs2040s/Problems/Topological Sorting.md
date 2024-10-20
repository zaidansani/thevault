---
title: Topological Sorting
tags:
  - algorithms
  - CS2040S
---
The topological sort is a linear ordering of vertices such that for every directed edge `u<->v`, vertex `u` comes before `v` in the ordering. The topological sort can only be done on **directed, acyclic graphs.**
# Algorithms
## Post-Order Depth-First Search

Running a post-order depth-first search, the node is processed when it is **last visited**.
When the node is processed, add it to the list.

> [!example] Worked example:

![[diagrams/topological ordering.svg]]
%%[[diagrams/topological ordering|🖋 Edit in Excalidraw]]%%

Consider the graph above. The post-order DFS (from `A`) goes through

- `A`
- `C`
- `D` - there is no more nodes to traverse to, so `D` gets added to the list.

| LIST |     |     |     |     | D   |
| ---- | --- | --- | --- | --- | --- |

---

Backtracking, we traverse to `E`
- `E` - there is no more nodes to traverse to, so `E` gets added to the list.

| LIST |     |     |     | E   | D   |
| ---- | --- | --- | --- | --- | --- |

---

Backtracking, we process `C`
- `C` - there is no more nodes traverse to, so `C` gets added to the list.

| LIST |     |     | C    | E   | D   |
| ---- | --- | --- | --- | --- | --- |

---

Backtracking, we process `A`
- `A` - there is no more nodes traverse to, so `A` gets added to the list.

| LIST |     | A   | C   | E   | D   |
| ---- | --- | --- | --- | --- | --- |

---

Then, we just add `B` to the list.

| LIST | B   | A   | C   | E   | D   |
| ---- | --- | --- | --- | --- | --- |

## Kahn's Algorithm

Similarly, the [Kahn's](../Algorithms/Kahn's.md) algorithms work for this.

# Invariants

The topological order is not necessarily unique.

>[!example]

![[diagrams/topological ordering.svg]]
%%[[diagrams/topological ordering|🖋 Edit in Excalidraw]]%%

Consider the same graph as given above. There can be multiple topological orderings for the given graph.
- `A, B, C, D, E`
- `B, A, C, D, E`