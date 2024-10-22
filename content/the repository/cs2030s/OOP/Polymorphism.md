---
title: Polymorphism
tags: [CS2030S, object_oriented_programming]
---
>[!summary] The ability of a method to take multiple forms.

Polymorphism allows for the writing of **future-proof, succinct code** by dynamically deciding method implementation to execute during run-time.

> [!example] Consider the `equals` method.  Since every object has the `equals` method, as every class is a subclass of the `Object` class, we can implement method overriding to alter the behaviour of the `equals` method in the subclasses.
# Dynamic Binding

> [!example] 
> Consider the following case:
> $C <: B <: A$
> 
> The `foo` method is overridden and overloaded as such.
> `A::foo(A)`
> `A::foo(B)`
> `B::foo(C)`
> `C::foo(B)`
> 
> Consider the dynamic binding for the following:
> ```Java
> A c = new C();
> B b = new B();
> 
> c.foo(b);
> ```

1. Find the compile-time type of the target.
   
   > [!example] The compile-time type of target is $A$.
   
2. List all the methods available to invoke.
   
   > [!example] `A::foo(A), A::foo(B)`
   
3. Choose the most specific method.
   
   > [!info] The definition of most specific is as follows: a method $M$ is more specific than method $N$ if the arguments to $M$ can be passed to $N$ without compilation error.
   >  > [!example] `A::foo(B)` is more specific here.

4. Check the run-time type of the target.
   
> [!example] The run-time type of the target is $C$.

5. Determine method called.
   
   > [!example] The method called is `C:foo(B)`.