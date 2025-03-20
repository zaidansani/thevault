---
{"publish":true,"tags":["CS3213","software_engineering","software_testing"],"title":"Software Development Practices","PassFrontmatter":true}
---

> [!warning] In progress.

# Source Control

> [!important] Source control $\neq$ git

The importance in is how things are implemented.

Consideration for SCM tools
- centralised vs decentralised
	- git can be both, depending on the situation
	- centralised - a central location that dictates where the code is
		- single point of failure
	- decentralised - multiple locations
- dependency management
- scalability
- dev. tool support
- expertise

Good practices:
- Single source of truth
- Consistency
- Small focused changes, ideally idempotent/orthogonal
- Clarity
- Use branches and tags appropriately
- Use toolset for managing dependencies
# Coding Styles

Code style importance
- unnecessary changes in SCM
- inconsistency makes code harder to read
- always differences in style

Key elements
- consistency >> optimality
- focus on making code clearer and unsurprising
- practicality >> prettyness
- not just formatting
- USE AN **AUTOFORMATTER**
# Versioning & Releases

Deployment strategy
- web services
- app stores
- sending binaries
- embedded in devices

> [!definition] Versioning
> Assigning identifiers to bundles of software

Semantic versioning:

$$
MAJOR.MINOR.PATCH
$$
Major
- incompatible API changes
Minor
- add functionality in a backward compatible manner
Patch


> [!note] Hyrum's Law
> With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviours of system will be depended on by somebody.

Commits
- unique hash of commit
- automatic and internally track guilds
- no further information, not all commits are releases

Assigned Identifiers
- code names, or version increments
- easier to remember
- help with branding
- can be used to infer

Depends on
- needs
- deployment strategy
- frequency of release
- needs of users/marketing dept.

> [!important] Avoid long-lived branch

- depends on your organisation, deployment strategy
- **single source of truth**
- consistency
# Dependencies

> [!note] Availability at run-time/compile-time
> 
> User libraries generally found at compile-time, APIs at run-time

- Libraries
- Build tools
- External services

> [!question] How to handle dependencies when they introduce a change that breaks code, has critical bug that can't/don't fix, rely on out-of-date dependency?

> [!important] Dependencies need to be managed to maintain project.

Some possible suggestions:

- small/critical library (keep in same library)
- medium (keep own repo)
- large/well-established (submodule)
- runtime: lockfile, containers, package managers
# Deprecation

Systems can become obsolete.

> [!question] How to remove obsolete code?

Code becomes liability as not useful.

> [!definition] Deprecation
> Process of orderly migration away from and eventual removal of obsolete systems

Compulsory deprecation:
- comes with deadline for removal
- Single team of expert responsible for migration
# Code Review

- Just get someone else to look through your code
# Quality Assurance

> [!note] Anything that is done to ensure product quality before it gets to customers.

> [!important] QA $\neq$ Testing

Best practices
- simulate cusstomer as much as possible
- must be done by someone other than the developer
# Development

Methods
- `.zip` files
- web apps
- app stores
- physical media
- pre-installed on devices

Considerations
- speed/friction
- scalability
- risks
- costs