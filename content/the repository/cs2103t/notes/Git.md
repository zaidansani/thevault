---
tags: [CS2103/T, git, software_engineering]
title: Git
---
# Setup

To initialise a Git repository (on CLI):
1. ``cd folder`` navigate to the folder where the repository is to be made
2. ``git init`` initalise an empty Git repository
3. ``git status`` checks the status of the newly-created repository

# Saving

> [!note] Committing
> Saves a snapshot of the current state of the tracked files in the revision control history

>[!note] Staging
> When ready to commit, add the specific changes to be committed to a staging area.

> [!note] Tracking and ignoring
> Files can be added to be tracked, or ignored.
> 
> General files that should be ignored:
> - Binary files generated
> - Temporary files
> - Local files
> - Sensitive content

**Adding files**
Using CLI:
1. `git add file` adds the file to be staged
2. `git status` here should show the changes to be committed
3. `git commit -m "..."` commits the changes with the message said
4. `git log` shows commit history

**Deleting previous commits**
To undo the last commit, but keep changes in staging area: ``git reset --soft HEAD~1``
To undo last commit, and remove changes from staging area: ``git reset --mixed HEAD~1``
To delete last commit entirely (discard changes): `git reset --hard HEAD~1`
To undo/delete $n$ commits, change the parameter `n` in `HEAD~n`.

**Ignoring files**
1. Create a `.gitignore` file. 
2. Add the files to be ignored.

**History**
- each commit is identified by a unique **hash**
- each commit can be **tagged** with a easily identifiable name
	- ``git tag TAGNAME``
	- to tag a previous commit, `git tag TAGNAME CHECKSUM` where checksum is the hash (or part of it) of the previous commit to be tagged
	- to use annotated tags, use the option `-a` and `-m` which specifies the tagging message
- to show what changed, use `git show CHECKSUM`
- to see changes between two points, use **diff**
	- `git diff` shows uncommitted changes since last commit
	- `git diff CHECKSUM1 CHECKSUM2` shows changes between the points indicated
- to restore the state of the working directory, **checkout** the commit in concern.
	- `git checkout TAG` loads state as at commit tagged
	- `git checkout CHECKSUM` loads state at commit with matching checksum
	- `git checkout HEAD~n` kiads state that is $n$ commits behind most recent commit.
- to **stash** changes means to temporarily shelve changes made currently so that something else can be worked on
	- `git stash` stashes all uncommitted changes (both staged and unstaged) and saves them away for later use
	- `git stash pop` reapplies previously stashed changes
	- `git stash apply` reapplies previously stashed changes, but keeps them in the stash, which is useful for applying same changes to multiple branches
	- `-u` indicates to stash untracked files
	- `-a` indicates to include ignored files
	- `git stash save MESSAGE` saves the stash with a message
	- `git stash list` shows the list of stashes.
- for **branching**
	- `git status` shows what branch currently on (should show `on branch BRANCHNAME`)
	- `git branch NEWBRANCHNAME` creates a new branch with the name `NEWBRANCHNAME`
	- `git switch BRANCHNAME` switches to the branch with the name `BRANCHNAME`
		- `git checkout BRANCHNAME` does the equivalent
	- `git switch -c NEWBRANCHNAME` creates a new branch and switches to it
		- `git checkout -b NEWBRANCHNAME` does the equivalent.
	- `git merge BRANCH` merges the branch `BRANCH` into the current branch.
	- to push a remote branch, `git push -u origin BRANCHNAME`
		- `-u` specifies local branch should track remote branch created as a result of the push
	- to pull a remote branch, 
		- `git fetch REMOTE` and `git branch -a` to see the details of the branches
		- `git switch -c BRANCH REMOTE/BRANCH` to create a matching local branch and switch to it
	- to push new changes in local, omit the `-u` flag: `git push origin BRANCHNAME`
	- to pull new changes to local, `git switch BRANCH`, then `git pull origin BRANCH`.
# Remote repositories

**Cloning** creates a copy of the repo in another location on computer. The original repo cloned from is then referred to as an upstream repo for the repo cloned on the computer.
- `git clone URL`

A repo can be **pulled/fetched** from to receive new commits in the second repo if the repos have a shared history.
- `git pull origin` gets missing commits in the local repo from the upstream repo
- `git fetch origin` gets the missing commits but does not move the current state to the latest downloaded commit
- To communicate with another remote repo, `git remote add REMOTE_NAME REMOTE_URL` which adds a remote repo. This can then be pulled/fetch from by specifying `git fetch upstream master; git merge upstream1/master` or `git pull upstream1 master`

New commits can also be **pushed** to another repo if repos have a shared-history, and write access is had.
- `git push origin TAG` pushes a specific tag
- `git push origin --tags` pushes all tags

A **fork** is a remote copy of a remote repo.
- not a Git feature, but a Github feature

A **pull request** is a mechanism for contributing code - it is a request to pull the changes made by someone to someone else's repo.

