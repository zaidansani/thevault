---
{"publish":true,"tags":["C","S","3","2","1","3","s","o","f","t","w","a","r","e","_","e","n","g","i","n","e","e","r","i","n","g","m","o","d","e","l","l","i","n","g"],"cssclasses":""}
---

> [!warning] In progress.
# Modelling

> [!note] System modelling
> Developing abstract models.

Formal models refer to **mathematical models** of a system which can be automatically verified.

System models are developed as part of both 
- requirements engineering: to help derive detailed requirements
- system design: to describe system for implemnetation.

> [!definition] Abstraction
> Leaving out details to make system easier to understand

> [!definition] Representation
> Maintains all information of system being represented

> [!example] Modelling Languages
> - UML
> - C4
> - Business Process Model and Notation (BPMN)
> - Systems Modelling Language (SysML)
> - Entity Relationship Diagram (ERD)

For UML diagrams, refer to [Modelling](../../cs2103t/notes/Modelling.md) for further explanation.

## C4

Hierarchical diagrams:
- system context: how software system in scope fits into the world around it
- containers: zooms into software system in scope
- components: zooms into individual components
- code: (UML)

System context diagram shows the big picture of the system landscape, focusing on **people**, and **software systems**. The container refers to a **separate runnable app** - web application. The components are the decomposed containers, identifying major structural blocks.

# System Architecture

> [!note] Architectural design
> Understanding how a software system should be organised and designing the overall structure of said system

Architecture reprsents significant decisions - from which significance is measured by cost of change.

Architecture, simplified is generally
- how system is organised
- how developers explain system at a high level
- often considered significant at a higher level

> [!definition] Architecturally Significant Requirements
> Requirements that have a measurable impact on the architecture

Functionality does not affect architecture - any architecture is able to implement the functionality. Architecture is mostly important for non-functional requirements.

Modifiability can be shown in three categories
- Local change
- Non-local change
- Behavioural change

> [!definition] Conway's Law
> Organisation which design systems are constrained to produce designs which are copies of the 
> communication structures of these organizations.
## Attribute-Driven Design

1. Get ASRs
2. Establish iteration goal
3. Choose existing structure to improve within architecture
4. Select multiple designs that might support ASR
5. Instantiate patterns and tactics to the context
6. Record design decisions
7. Analyse partial design
8. Iterate until satisfied

## Architecture Patterns

> [!definition] Architectural pattern
> An established architectural solution that might comprise multiple architectural tactics
### Layered Architecture

> [!definition] Layered architecture
> Structures the software system into individual grouping of modules that offer a cohesive set of  services

> [!note] Layer bridging
> Using a upper layer using a module in a nonadjacent lower layer

> [!pros]
> - Portability (layers can be general/specific)
> - Reusability (lower-level layers can be reused across applications)
> - Modifiability

> [!cons]
> - Might get in the way by not providing all required lower-level abstractions
> - Performance penalties

### Pipe-and-Filter Architecture

> [!definition] Pipe-and-filter-architecture
> Consists of filters - processing components that take input, and produce output, and pipes - that connect filters together.

> [!pros]
> - Modifiability: filters are independent
> - Reconfigurability: filters can be combined in differnet ways
> - Evolution: adding transformations is straightforward

> [!cons]
> - Fixed format for data transfer
> - Performance: data must be output in specific format

### Model-centered Architecture

> [!definition] Model-centered architecture
> Components interact with a central model instead of each other

> [!pros]
> - Components can be independent
> - Data can be managed consistently

> [!cons]
> - Single point of failure (the model)
> - Distribution of repository may be difficult

> [!example] MVC
> - Model
> - View
> - Controller
>  
> > [!pros]
> > - Highly modifiable
> > - State can be managed and persisted
> > - Concurrency
>   
> > [!cons]
> > - Upfront significant complexity
> > - Burdensome for complex UIs

> [!example] Plug-in architecture
> Microkernel architecture is divided into a base system, and a set of plugin components, where plugins as a central concept form structure of subsystems.
> 
> > [!pros]
> > - Modifiability
> > - Extensibility (can be developed by different teams to extend a core product)
> > - Testability
> 
> > [!cons]
> > - Security concerns

### Client-server Architecture

> [!definition] Client-server architecture
> Server provides services to clients simultaneously.

> [!pros]
> - Low coupling among server
> - No coupling among clients
> - Scalability
> - Evolvability
### Monolith

> [!definition] Monolith
> Single deployable unit
### Service-oriented Architecture

> [!definition] Service-oriented architecture
> Focus on independent (domain) services that are separately deployed

> [!pros]
> - Deployability
> - Testability
> - Reliability
### Microservice Architecture

> [!definition] Microservice
> Collection of independently deployable services that communicate only via messages through service interfaces, that are typially stateless from small teams and code bases

> [!pros]
> - Quick time to market/deploy
> - Independence
> - Scalability

> [!cons]
> - Network communication overhead
> - Complex transactions
> - Different technologies with maintenance cost
> - Designing and maintaining multiple microservices can be challenging

## Architectural Tactics

> [!definition] Architectural tactics
> Assign decisions that influences a quality attribute

An architectural pattern might not solve the problem completely.

### Availability Tactics

- Detect faults
	- Monitoring
	- Ping/echo
	- Heartbeat: periodic message exchange between a system monitor and a process being monitored
	- Timestamp
	- Sanity checking: checks validity of specific operations on output based on knowledge of their internal structure
	- Voting
	- Exception detection
	- Self-test
- Recover from faults
	- Preparation and repair
		- Redundant space: one or more duplicate components can step in if component fails
		- Rollback: revert to a previous, known good state
		- Exception handling
		- Software upgrade: in-service upgrade in a non-service affecting manner
		- Retry
		- Ignore faulty behaviours
		- Graceful degradation
		- Reconfiguration
	- Reintroduce system
		- Shadow: operate a component in a shadow mdoe
		- State resynchronisation
		- Escalating restart: automatic restart at different granularities
		- Nonstop forwarding
- Prevent faults
	- Removal from service: temporarily place system component in an out-of-service state to mitigate
	- Transactions: provide ACID properties
	- Predictive models
	- Exception preventions
	- Increase competence set: set of states designed to operate correctly (even in the presence of out-of-memory-error situations, I/O errors, crashes)

### Performance Tactics

- Control resource demand
	- Manage work requests
	- Limit event response: queue or process items with delay
	- Prioritise events
	- Reduce computational overhead
	- Bound execution time
	- Increase efficiency
- Manage resources
	- Increase resources
	- Introduce concurrency
	- Maintain multiple copies of computations
	- Maintain multiple copies of data: keeping separate copies of data to reduce contention
	- Bound queue sizes
	- Schedule resources: FIFO/fixed-priority/round-robin