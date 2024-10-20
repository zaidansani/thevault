---
tags:
  - c_programming
title: Structures
---
> [!abstract] Structures
> Allows grouping of heterogeneous members (of different types).

> [!example]
> ```C
> typedef struct {
> 	int x, y, z;
> } box_t
> ```

A `typedef` is a definition of a type, not a declaration of a variable
- No memory is allocated to a type

**Initialisation** is similar to array initialisation - `.. = {}` with nested brackets if a structure contains a nested structure.

**Member access** using the `.` operator ``box.x`` (and for nested structures `box.colour.red`)

**Assignments** unlike arrays, the entire structure can be reassigned to another structure `box1 = box2`

# Passing Structures into Function

The entire structure is copied into the parameter - members of the actual parameter is copied into the corresponding members of the formal parameter. 

Thus, since a separate copy of it is made in the called function, the original structure variable is not modified by the function. Similar to normal variables, the pointer will have to be passed in instead.

> [!note] Array of structures
> Array name of an array of structures is still a pointer, thus, the function is still able to modify the array elements in this situation.

# Arrow Operator

To access the structure variable from the pointer of the structure, the syntax is as follows
- `(*player_ptr).name)`
- `player_ptr->name`

> [!danger] Precedence of dot operator
> Since the dot operator precedes `*`, `*player_ptr.name` results in `*(player_ptr.name)` instead of the intended `*(player_ptr).name`. Thus, `*player_ptr.name` should not be used.
> 