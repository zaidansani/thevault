---
tags:
  - software_engineering
  - CS2103/T
title: Code Quality
---
> [!quote] Martin Golding
> Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.

The aim of a coding standard is to make the entire codebase look like it was written by one person. 

# Naming

1. Use nouns for classes/variables and verbs for methods/functions
2. Distinguish clearly between single valued and multi-valued functions
3. Use standard words (avoid foreign language, slang, names only meaningful given specific contexts)
4. Name should explain the method/class
	- The order of names should be sensible
5. Names should not be too long or too short
6. Avoid misleading names - name related things similarly
	- Avoid ambiguities (such as 0 vs O)
	- Avoid hard to pronounce
	- Avoid ambiguous meanings (right as in correct, or the direction)
	- Avoid similarly pronounced names

# Readability

1. Avoid long methods
	- consider shortening when a method goes beyond 30LoC
2. Avoid deep nesting
3. Avoid complicated expressions
4. Avoid magic literals
	- use constants to give a name to the numbers being used
5. Make code obvious/explicit
	- use explicit type conversion
	- use parantheses/braces to show groupings
	- use enumerations when variables can take only a small number of finite values
6. Structure code logically
7. Do not 'trip up' reader
	- unused parameters in method signature
	- similar things that look different
	- different things that look similar
	- multiple statements in same line
	- data flow anomalies
8. Practice KISS ("keep it simple, stupid)
9. Avoid premature optimisations
10. Avoid multiple levels of abstraction within a code fragment
11. Make happy path prominent
	- Restructure code to make intended execution path as less-nested as possible
# Unsafe Practices

> [!important] Use language constructs in the way they are meant to be used.

1. Use `default` branch in `switch` statements.
2. Don't recycle variables/properties
3. Avoid empty `catch` blocks
4. Delete dead code
5. Minimise scope of variables
6. Minimise code duplicatioon

# Comments

1. Do not repeat the obvious
2. Write to the reader (target other programmers, reading the code)
3. Explain what and why, not how

