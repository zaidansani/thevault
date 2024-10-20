---
tags:
  - software_engineering
  - git
title: Revision Control
---

# Branching

> [!definition] Branching
> The process of evolving multiple versions of software in parallel.

Branching allows for the creation of new branches for experimental features, while team works on another branch. 

A **merge conflict** is when two branches have changed the same code, and the RCS cannot decide which changes to keep. In those cases, the conflicts will have to be resolved manually.

> [!remark] Syncing branches
> 
> To sync branches, a merge between the branches can be used. 
> 
> > [!example] 
> > Given two branches, `master` and `feature1`, `master` can be merged into `feature1`
> 
> However, rebasing can also be done, but is **not recommended in this course** as it involves modifying past commits.


# Pull Requests

> [!remark] Pull requests
> Pull requests are a function in **GitHub** that allows contributors to propose a function, and get the code reviewed and added into the repository.

The **PR lifecycle** includes:
- the creation of the pull request
- the review of the pull-request
	- changes can be merged if changes are approved by code reviewers
	- request can be closed, if changes are rejected
	- comments can be added to suggest further changes.

## Reviewing PRs

On GitHub:
1. Locate PR
2. Read PR description
3. Click on $\pm$ Files to see `diff` view
	- Used to see changes in code
4. Add review comments
5. Submit review with overall comment

# Workflows
> [!example] Bug-fixing
> 1. Create separate branch in local repo
> 2. Push the branch to fork
> 3. Creates a pull request from that branch in her fork
> 4. Pull-request review
> 5. Merge PR
> 6. Sync forks

# RCS
> [!definition] Centralised RCS
> Uses a central remote repo that is shared by team.

> [!definition] Distributed RCS
> Allows multiple remote/local repos working together.

# Feature branch flow
Better p