---
tags:
  - c_programming
  - CS2100
title: Arrays
---
> [!info] Arrays
> Homogenous collection of data.
> 
> Declaration includes element type, array name, and size (maximum number of elements). Array elements occupy contiguous memory locations.

An array can be initialised at declaration with
- size declared as the same size of the array assigned to it `a[3] = {0, 1, 2}`
- size not declared `a[] = {0, 1, 2}`
- size declared as a bigger size `a[4] = {0, 1, 2}`

> [!danger] Incorrect initialisations/assignments
> - when there are excess elements `a[1] = {1, 2}`
> - when the array is declared, then initialised in a different statement. `a[1]; a = {0};`
> 	- this also means that an array cannot be reassigned to another array `a[2]; b[2] = a;`

# Pointers

The array name refers to the address of the first element in the array. 

> [!example] 
> Given the array `int a[3];`, `a` is a memory address. `a` is equivalent to `&a[0]`. 

# Cloning an array

1. Write a loop assigning the element of each array to the other array consecutively
2. `memcpy` from `<string.h>` (not covered in module)

# Array as a function parameter

For prototypes, it is fine to just specify the `[ ]`after the datatype to signify that it is an array.

> [!example]
> ```C
> int function(int []); // (name can be added, not compulsory)
> ```

In the function header, the number within the square brackets is ignored, so the array size should be provided through another parameter `(int arr[], int size)`

---

Alternatively, as an array is a pointer, the alternative syntax is as such:
- prototype: `int function (int *)`
- header: `int function (int *array)`

# Modification

As an array is passed in through pointers, whether intentional, the function **can** modify the content of the array passed into it.
