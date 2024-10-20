---
tags:
  - software_engineering
title: Requirements
---
> [!definition] Brownfield project
> Develop a product to replace/update an existing software product

> [!definition] Greenfield project
> Develop a totally new system from scratch

> [!note] Stakeholder
> Individual/organisations involved or potentially affected by the software project.
# Non-functional requirements

> [!definition] Non-functional requirements
> Specifies the constraints under which the system is developed and operated.

Non-functional requirement categories could be categories such as:
- data requirements
- environment requirements
- accessibility
- capacity
- regulatory compliance
- documentation
- disaster recovery
- efficiency
- extensibility
- fault tolerance
- interoperability
- maintainability
- privacy
- portability
- quality
- reliability
- response time
- robustness
- scalability
- security
- stability
- testability

> [!important] Importance of finding NFRs early
> NFRs are easier to miss, and critical to the success of the software at times.

# Quality

A requirement should be:
- unambiguous
- testable
- clear
- correct
- understandable
- feasible
- independent
- atomic (not divisible any further)
- necessary
- implementation-free

The set of requirements itself should be consistent, non-redundant, and complete.

# Prioritizing requirements

There are multiple schemes with regards to priority categories.

> [!example] Schemes
> 
> `[!!||important:essential|var(--color-red-rgb)]` `[!!||important:typical|var(--color-orange-rgb)]` `[!!||important:novel|var(--color-green-rgb)]`
> `[!!||important:high|var(--color-red-rgb)]` `[!!||important:medium|var(--color-orange-rgb)]` `[!!||important:low|var(--color-green-rgb)]`  
> `[!!||important:must-have|var(--color-red-rgb)]` `[!!||important:nice-to-have|var(--color-orange-rgb)]` `[!!||important:unlikely-to-have|var(--color-green-rgb)]` 
> 
> 
# Gathering requirements

> [!definition] Brainstorming
> A group activity designed to generate a large number of diverse and creative ideas for the solution of a problem.

Requirements can be gathered in multiple ways.

> [!note] Product surveys
> Studying existing products can unearth shortcomings of existing solutions that can be addressed by a new product.

> [!note] User surveys
> Surveys can be used to solicit responses and opinions from a large number of stakeholders.

> [!note] Interviews
> Interviewing stakeholders and domain experts can produce useful information about project requirements.

> [!note] Focus groups
> Focus groups are a kind of informal interview within an interactive group setting.

> [!definition] Prototyping
> A mock up, scaled down version, or a partial system constructed to get users' feedback, to validate a technical concept, to give a preview of what to come, or to compare multiple alternatives on a small scale before committing fully to one alternative and for early field-testing under controlled conditions.
>
> > [!note] Can be used for both discovering and specifying requirements.

# Specifying requirements

## Prose

> [!definition] Prose
> A textual description that can be used to describe requirements.
## Feature Lists

> [!definition] Feature list
> A list of features of a product grouped according to some criteria such as aspect, priority, order of delivery

## User Stories

> [!definition] User story
> User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user of customer of the system.
> 
> > [!note] Common format
> > As a _user type/role_, I can _function_ so that _benefit_.

When specifying details, 
- the _benefit_ can be omitted if it is obvious. 
	However, it is recommended to confirm there is a concrete benefit even if it is omitted from the user story, to prevent adding feature without real benefit.
- the _user role_ can be given more characteristics to add context

User stories can be written at various levels.

> [!note] Epics
> High-level user stories, called epics/themes cover bigger functionality. This epics can be broken down to multiple user stories of normal size.

Conditions of satisfactions can be added to a user story to specify things that need to be true to accept the user story implementation.

Other details that can be added:
- priority
- size
- urgency

User stories capture user requirements in a way that is convenient for scoping, estimation and scheduling. They differ from traditional requirements specifications mainly in the level of detail. 

User stories can capture non-functional requirements.

> [!theorem] Recipe to use user stories
> 
> 1. Clear mind of preconceived product ideas
> 2. Define target user as persona
> 3. Define problem scope
> 4. List scenarios to form a narrative
> 5. List user stories to support scenarios

In addition to the recipe, 
- don't be too hasty to discard unusual user stories
- don't go into too much detail
- don't be biased by preconceived product ideas
- don't discuss implementation details/whether it is going to be implemented

## Glossary

> [!definition] Glossary
> Serves to ensure that all stakeholders have a common understanding of the noteworthy terms, abbreviations, acronyms.

## Supplementary requirements

> [!definition] Supplementary requirements
> Used to capture requirements that do not fit elsewhere (NFRs).

## Use cases

> [!definition] Use case
> A description of a set of sequences of actions including variants, that a system performs to yield an observable result of value to an actor.

### Identifying

> [!definition] Actor
> Actor is a role played by a user.
> > [!example] Guest, Student, Staff, Admin

### Details

**Main Success Scenario (MSS)** describes the most straightforward interaction for a given use case, which assumes that nothing goes wrong. 

**Extensions** are add-ons to MSS that describe exceptional/alternative flow of events.

> [!example]
> ```
> System: Online Banking System (OBS)
> Use case: UC23 - Transfer Money
> Actor: User
> MSS:
>   1. User chooses to transfer money.
>   2. OBS requests for details of the transfer.
>   3. User enters the requested details.
>   4. OBS requests for confirmation.
>   5. User confirms.
>   6. OBS transfers the money and displays the new account balance.
>   Use case ends.
> 
> Extensions:
>   3a. OBS detects an error in the entered data.
>       3a1. OBS requests for the correct data.
>       3a2. User enters new data.
>       Steps 3a1-3a2 are repeated until the data entered are correct.
>       Use case resumes from step 4.
> 
>   3b. User requests to effect the transfer in a future date.
>       3b1. OBS requests for confirmation.
>       3b2. User confirms future transfer.
>       Use case ends.
> 
>   *a. At any time, User chooses to cancel the transfer.
>       *a1. OBS requests to confirm the cancellation.
>       *a2. User confirms the cancellation.
>       Use case ends.
> ```

> [!note] Extensions
> The `*` extension means that it can happen at any time within the use case.

> [!important] The MSS should be self-contained.

A use case can include another use case, signified by underlined text.

Preconditions specify the specific state the system should be in before the use case starts.

Guarantees specify what the use case promises to give us at the end of the operation.