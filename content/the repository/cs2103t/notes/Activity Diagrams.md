---
title: Activity Diagrams
---
> [!definition] Activity diagrams
> UML diagrams to model workflows.

An activity diagram captures an activity through the actions and control flows that make up the activity.

![activity-diagram](media/activity-diagram-linear-paths.svg)

---

Alternative paths are shown through branch nodes and merge nodes.

![activity-diagrams-alternate-paths](media/activity-diagrams-alternate-paths.svg)
Acceptable simplifications:
- Omitting merge node
- Multiple arrows can start from same corner
- Omitting `else` condition

---

To model parallel paths, fork nodes indicate start of concurrent flows of control, and join nodes indicate the end of parallel paths.

![activity-diagrams-alternate-paths](media/activity-diagrams-alternate-paths.svg)

---

To indicate a part of the activity is given in a separate diagram, use the rake notation.

![activity-diagrams-rakes](media/activity-diagrams-rakes.svg)
Partitions can also be used to indicate who is doing the specific activity.

![activity-diagrams-swimlanes](media/activity-diagrams-swimlanes.svg)
