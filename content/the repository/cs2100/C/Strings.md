---
tags:
  - c_programming
title: Strings
---
> [!abstract] String
> A string is an array of characters, that is terminated by a null character `\0` (ASCII value of zero).
7
To convert an array of characters into a string, add a null character `'\0` at the end of the array. String functions then can be used to manipulate these strings (`<string.h>`).

# Declaration, Assignment, Initialisation

`char str[];`

When assigning characters to the array, the array must have the null character `\0`.

Initialising can be done in two ways:
- through initialising a character array `char str[] = {'o', 'k', '\0')`
- through assigning a string (no null character needed) `char str[] = "ok"`

# Input/Output

Input:
- `fgets (str, size, stdin)` reads $size - 1$ char, or until newline
- `scanf ("%s", str)` reads until whitespace

Output:
- `puts(str)` terminates with newline
- `printf("%s\n", str)`
- `fgets` reads in newline character, so replacement of `\n` for `\0` may be necessary

# String Functions

- `strlen(s)` Returns number of characters in $s$
- `strcmp(s1, s2)` Compares ASCII values of the corresponding characters in `s1, s2`
- `strncmp(s1, s2, n)` Compare first $n$ characters of `s1, s2`
- `strcpy(s1, s2)` Copies string pointed to by `s2` into array pointed to by `s1`.
- `strncpy(s1, s2, n)` Copies first $n$ characters pointed to by `s2` to `s1`.