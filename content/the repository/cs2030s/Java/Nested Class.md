---
title: Nested Class
tags:
  - CS2030S
  - java_programming
---
> [!summary] A nested class is a class defined within a class or method.

- A `static` nested class is associated with the containing class, not an instance.,
	- It can only access `static` fields/methods of the containing class.
- A non-`static` nested class (also known as an **inner class**)
	- Can access instance fields/methods

# Local Class
> [!info] A local class is a class defined within a function.

A local class can access the local variables of the enclosing method.

> [!example] Given the following example:
```Java
class A {
  int x = 1;

  void f() {
    int y = 1;

    class B {
      void g() {
        x = y; // accessing x and y is OK.
      }
    }

    new B().g();
  }
}
```
> [!example] `B` can access the `x` in `A` as well as `y` in `f`.

## Variable Capture

We can access an instance of a local class outside of the function. To access the local variables in the enclosing method, the local class **makes a copy** of the local variables inside itself.

### Effectively `final`

A local class can only access explicitly declared/implicit `final` variables. However, this can be circumvented by using reference types, which can be mutated.

# Anonymous Class

> [!summary] Classes that are "single-use".

An anonymous class is a local class declared and instantiated in a single statement.  
Similarly, it captures variables of the enclosing scope.