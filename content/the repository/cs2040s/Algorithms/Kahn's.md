---
title: "Kahn's"
tags: [algorithms, CS2040S]
---
1. Add all nodes with in-degree $0$ to queue.
2. For each outgoing edge from removed node, decrement in-degree of destination node by $1$.
3. If in-degree of destination node becomes $0$, add to queue.

> [!example] Worked example

![[../Problems/diagrams/topological ordering.svg]]
%%[[../Problems/diagrams/topological ordering|🖋 Edit in Excalidraw]]%%


| Node      | A   | B   | C   | D   | E   |
| --------- | --- | --- | --- | --- | --- |
| In-degree | 0   | 0   | 2   | 1   | 2   |

As `A` and `B` have an in-degree of `0`, they are added to the queue.

---
`Queue: [A,B]`

Processing `A`:
- find vertices of outgoing edges, and decrement its in-degree: `C, E`
- add `A` to the list

| Node      | A   | B   | C   | D   | E   |
| --------- | --- | --- | --- | --- | --- |
| In-degree | 0   | 0   | 1   | 1   | 1   |
`Queue: [B]`
`result: [A]`

---

Processing `B`:
- find vertices of outgoing edges, and decrement its in-degree: `C
	- note that `C` now has a `0` in-degree, add it to the queue.
- add `B` to the list

| Node      | A   | B   | C   | D   | E   |
| --------- | --- | --- | --- | --- | --- |
| In-degree | 0   | 0   | 0   | 1   | 1   |
`Queue: [C]`
`result: [A, B]`

---

Processing `C`:
- find vertices of outgoing edges, and decrement its in-degree: `D,E`
	- note that `D,E` now has a `0` in-degree, add it to the queue.
- add `C` to the list


| Node      | A   | B   | C   | D   | E   |
| --------- | --- | --- | --- | --- | --- |
| In-degree | 0   | 0   | 0   | 0   | 0   |
`Queue: [D, E]`
`result: [A, B, C]`

---

Trivially, the program runs here and processes it for `D` and `E`, and adds them to the list without finding any outgoing edges.

Thus, we get a (non-unique) topological sort `A, B, C, D, E`.