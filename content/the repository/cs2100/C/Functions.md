---
tags:
  - c_programming
title: Functions
---
# Libraries

Libraries offer functions to be used:
- `<stdio.h>` required for `scanf, printf`
- Math library `<math.h>` (compile with `lm` option - `gcc -lm ....`)

# User Defined Functions

> [!info] Function prototype
> A function prototype includes only the function return type, function name, and data types of parameters (optionally with names)
> > [!example]
> > `double area(double)`
> > The function return type: `double`
> > The function name: `area`
> > The parameter of the function: `double`

> [!tip] Good practice
> Put function prototypes at top of program before `main` function, to inform compiler of functions that program may use and their return types and parameter types.
> 
> > [!example]
> >```C
> >#include ...
> >double area(double);
> >
> >int main(void) {
> >	...
> >	area(..);
> >}
> >
> >double area(double x) {
> >	return x * x;
> >}
> >```
> 
> Without the prototypes, the compiler will generate error/warning messages.

If the function prototype is removed, the compiler assumes the default (implicit) return type of `int`. This can result in a conflict with the function header of the function which causes an error.


# Scope

> [!important] Scope rule
> Local parameters and variables are only accessible in the function they are declared.
> > [!example]
> > ```C
> > int f(void) {
> > 	int a;
> > }
> > int g(void) {
> > 	return a;
> > }
> > ```
> > This example does not work as the variable `a` is local to `f` and cannot be used in `g`, unless it is initialised separately.

> [!question] Why do local parameters only exist during the execution of the function?
> When a function is called,
> - an activation record is created in the call stack
> - memory is allocated for the local parameters & variable
>   
>   However, when it is done, the activation record is removed, and memory allocated for local parameters and variables is released.
>   >[!info] Automatic and static variables
>   >Automatic variables are variables which exist in memory only during the execution of the function they are local to.
>   >Static variables exist in the memory even after function is executed.
>   

# Pass-by-value

**Pass-by-value** means that the arguments from a caller are passed into the formal parameters for a function by its value - meaning any modification to the argument within the function does not affect the value stored in the argument variable.

# Function with Pointer Parameters

With pass-by-value, using regular parameters, a function is unable to return more than one value or modify values of variables defined outside it.

Thus, to achieve this requirement, a function with pointer parameter is needed.

> [!example] Swapping values
> An example of this is a swapping function.
> ```C
> int main(void) {
> 	int a;
> 	int b;
> 	
> 	swap(&a, &b)
> }
> 
> void swap(int *ptr1, int *ptr2) {
> 	int temp = *ptr1; // gets the value in ptr1 into temp
> 	*ptr1 = *ptr2; // changes the value in ptr1 to the value in ptr2
> 	*ptr2 = temp; // changes the value in pr2 to temp (value in ptr1)
> }
> ```






