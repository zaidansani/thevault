---
tags:
  - software_engineering
title: Integration
---
# Build Automation

> [!important] Build automation tools
> Build automation tools automate the steps of the build process by means of build scripts.

In non-trivial projects, building a product from source code can be a complex multi-step process. Thus, build tools can be used to simplify this process.

> [!example] Examples of build tools
> Gradle, Maven, GNU Make, Apache ANT for Java

Build tools serve as dependency management tools, helping developers maintain the correct version of the required libraries.

# CI/CD

> [!definition] Continuous integration (CI)
> Integration, building and testing happens automatically after each code change.

> [!definition] Continuous deployment (CD)
> A natural extension of CI, but with deployment.

> [!example] Examples of CI/CD
> GitHub Actions, Travis, Jenkins, Appveyor, CircleCI

# Approaches
## Timing and frequency

> [!definition] Late and one-time
> Wait till all components are completed and integrate all finished components near the end of the project.

> [!definition] Early and frequent
> Integrate early and evolve each part in parallel in small steps, reintegrating frequently

## Amount merged at a time

> [!definition] Big-bang integration
> Integrates all components at the same time

> [!definition] Incremental integration
> Integrate a few components at a time

## Order of integration

> [!definition] Top-down
> Higher level components are integrated before bringing in the lower-level components.

> [!definition] Bottom-up
> The reverse of top-down integration

> [!definition] Sandwich 
> A mix of both.

