---
tags: [c_programming, CS2100]
title: Pointers
---
> [!abstract] Pointer
> A pointer refers to the memory address of a variable. 

The pointer of a variable is referred to using the address operator `&`. 

> [!note] String formatting
> %p is used to specify the addresses, which are printed out in hexadecimal format.
> 
> >[!example] 
> >`printf("a = %d", a)` prints the value of `a` in decimal.
> >`printf(&a = %p", a)` prints the address of `a`.

To store an address of another variable, use a ==pointer variable==. The variable is then considered to be pointing to the variable with the memory address.

> [!example]
> ```C
> int a;
> int *a_ptr = a;
> ```
> 
> 

The **indirection operator** `*` allows access of the value of a pointer variable. In the example above, then `a` is synonymous with `*a_ptr`

## Incrementing Pointer

Incrementing a pointer results in an incrementation of the address by the size of the data type that the pointer is referring to. For example, if a pointer for an `int` variable (which takes up 4 bytes) is incremented, the address it is pointed to is incremented by 4 bytes.

> [!example]
> ```C
> int a;
> int *b = &a; // if the memory address here is ffbff0a4
> 
> *b++; // it increments by 4 to ffbff0a8
> ```
> 

> [!note] Common sizes for data types
> `int`: 4 bytes
> `float`: 8 bytes
> `char`: 1 byte
> `double`: 8 bytes

# Segmentation Fault

Do not use the indirection operator to access the value of a non-initialised pointer variable, as this will cause a segmentation fault. An example of this:

> [!example]
> ```C
> int *n;
> *n = 123;
> ```

# Use Cases

- Pass addresses of two or more variables so function can pass back to caller new values for variables
- Pass address of first element of array to a function so function can access all elements in array.

