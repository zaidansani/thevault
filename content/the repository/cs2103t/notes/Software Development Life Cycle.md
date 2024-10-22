---
tags: [CS2103/T, software_engineering]
title: Software Development Life Cycle
---
# Fundamental Approaches

## Sequential

> [!info] Sequential (Waterfall)
> 
> In this model, software development is viewed as a linear process. 
> 
> Generally it can be seen as five phases:
> - specifiying requirements
> - designing product
> - implementing
> - testing
> - deploying

A strict model only moves in the forward direction - there is no provision to change artifacts from previous stages. 

> [!success] Possible uses
> The model works well for projects that are already **well-understood**, as the requirements are stable, and the effort can be estimated accurately.

> [!danger] Possible cons
> There is a higher risk of **overrunning deadlines** as if the effort is not estimated well, or the requirements change, this results in a big issue.
> 

## Iterative

> [!info] Iterative
> 
> In this model, software development is viewed as an iterative process. Each iteration produces a **new version** of the product, factoring in feedback from each iteration into subsequent iterations.

This can be done in two approaches:
- **Breadth-first** refers to an approach where an iteration changes ==all major components, and all functionality areas== _eg: skateboard -> scooter -> car_
- **Depth-first** refers to an approach where an iteration focuses on a singular component _eg: wheels -> bottom part of car -> ..._ In this approach, a working product may not be produced early.

> [!success] Possible uses
> The model works well for projects that are already **well-understood**, as the requirements are stable, and the effort can be estimated accurately.

> [!danger] Possible cons
> There is a higher risk of **overrunning deadlines** as if the effort is not estimated well, or the requirements change, this results in a big issue.

> [!example] Real world examples
> A sequential approach to building a car could come up with finding the requirements for the car, designing the car, making the car, and fixing the issues with the car
> 
> An iterative (breadth-first) approach to building a car, could be building a skateboard first, then after feedback building a scooter, and iteratively until a car is met (making a usable product from iteration)
> 
> An iterative (depth-first) approach to building a car is building it part by part - each iteration builds a component fully.

## Agile

Key features of agile approaches:
- Requirements prioritized based on need of user
	- clarified regularly 
	- factored into development schedule as appropriate
- Work based on a rough project plan and a high level design that evolves as project goes on
- Complete transparency and responsibility sharing

### Scrum

> [!definition] Scrum
> A process skeleton that contains sets of practices and predefined roles.

Roles:
- Scrum master (maintains processes)
- Product owner (represents stakeholders and business)
- Team (cross-functional group who do analysis, design, ..)

Scrums are divided into iterations called sprints, which are preceded by a planning meeting, and succeeded by a review or retrospective meeting.

For each sprint, the team creates a potentially deliverable product increment.

- Encourages co-location of all team members
- Requirements churn - empirical approach accepts that problem cannot be fully understood or defined.

### XP

eXtreme Programming (XP) stresses **customer satisfaction**.

Emphasises
- responding to changing customer requirements
- teamwork
- improvement through communication, simplicity, feedback, respect and courage

### Unified Process

1. Inception
	- Understand problem, communicate with customer, plan development
2. Elaboration
	- Refine and expand requirements, determine high-level design
3. Construction
	- Major implementation effort, refine design models, test all level, multiple releases
4. Transition
	- Ready system for production, familarise end users

### CMMI

> [!definition] Capability Maturity Model Integration
> Defines five maturity levels for a process, and provides criteria to determine if the process is at a certain maturity level.

1. Initial
2. Managed
3. Defined
4. Quantitatively Managed
5. Optimising
# Revision control

> [!abstract] Revision control
> The process of managing multiple versions of a piece of information. 
> - tracks history and evolution of a product
> - makes it easier to collaborate
> - helps to recover from mistakes (reverting)
> - allows for simultaneous work on multiple versions of project

> [!example] RCS (Revision control software)
> Git, Mercurial, Subversion, Perforce

