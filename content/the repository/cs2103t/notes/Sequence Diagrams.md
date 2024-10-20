---
tags:
  - software_engineering
  - UML
  - CS2103/T
title: Sequence Diagrams
---
> [!info] Sequence diagrams
> Used to model interactions between entities in a system in a specific scenario

![](media/Pasted%20image%2020240913182125.png)
> [!note] Method calls, and method returns
> Arrows representing method calls should be **solid** arrows.
> Arrows representing method returns should be **dashed** arrows.

> [!note] Type of method calls
> Synchronous method calls should have **filled** arrowheads
> Asynchronous method calls should have **lined** arrowheads. (out of scope for 2103T)

> [!note] Notation specifications for activation bar
> Activation bar should start at the arrow pointing to it, and end at the line pointing away from it.
> An activation bar should also be unbroken until method returns.

> [!info] Object creation
> ![](media/Pasted%20image%2020240913182430.png)

> [!info] Object creation
> ![](media/Pasted%20image%2020240913182528.png)

> [!info] Object deletion
> ![](media/Pasted%20image%2020240913182606.png)
> 
> For Java, it can be used to indicate when the point ceases to be referenced (garbage-collected).

> [!info] Self-invocation (of methods)
> ![](media/Pasted%20image%2020240913182736.png)

> [!info] Alternative paths
> ![](media/Pasted%20image%2020240913182814.png)

> [!info] Optional paths
> ![](media/Pasted%20image%2020240913182841.png)

> [!info] Calls to static methods
> ![](media/Pasted%20image%2020240913182908.png)

> [!info] Parallel paths
> ![](media/Pasted%20image%2020240913182927.png)

> [!info] Reference frames
> 
> Allows a segment of the interaction to be omitted and shown as a separate sequence diagram
> 
> ![](media/Pasted%20image%2020240913182940.png)
> 
> > [!example]
> > ![](media/Pasted%20image%2020240913183108.png)

