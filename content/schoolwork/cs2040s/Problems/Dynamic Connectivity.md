---
{"publish":true,"title":"Dynamic Connectivity","tags":["algorithms","CS2040S"],"cssclasses":""}
---

> [!summary] Finding the shortest path between a pair of vertices.

Two sub-problems:
* ``find(p, q)``  checks for connectivity between two vertices
* ``union(p, q)`` connects two vertices

| Algorithm                                                              | ``find``      | ``union``     | Limitation                                                          |
| ---------------------------------------------------------------------- | ------------- | ------------- | ------------------------------------------------------------------- |
| [[schoolwork/cs2040s/Algorithms/Quick-Find\|Quick-Find]]                               | $O(1)$        | $O(n)$        | Slow when union is expensive, tree is flat                          |
| [[schoolwork/cs2040s/Algorithms/Quick-Union\|Quick-Union]]                             | $O(n)$        | $O(n)$        | Slow when trees too tall, union and find both expensive             |
| [[schoolwork/cs2040s/Algorithms/Weighted Union\|Weighted Union]]                       | $O(log(n))$   | $O(log(n))$   |                                                                     |
| [[schoolwork/cs2040s/Algorithms/Weighted Union\|Weighted Union]] with Path Compression | $\alpha(m,n)$ | $\alpha(m,n)$ | Almost linear performance per operation. Trees are effectively flat |

