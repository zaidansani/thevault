---
title: Generics
tags:
  - java_programming
  - CS2030S
---
>[!summary] Generics are a complex type which can contain multiple type arguments, which could be non-generic or generic.

# Instantiation

Once a generic type is instantiated, it is called a parameterized type.

Generally, in the declaration of the class or method, `<T>` or any name should be written to indicate the generic nature of the code.

> [!example] 
> 
> `public void <T> foo(T .....)`

## Bounded Type Parameters

We can bound the type parameters to declare generic classes while ensuring the type passed in fits the requirements of the class. 

> [!example] 
> If we know that `<T>` should be a type of `Circle`, we should declare it as
> `public void <T extends Circle> ...` instead.

# Type Erasure

> [!important] At compilation, the type parameters of the generics are erased.
> > [!example] 
> > Pair<String, Integer> is transformed to Pair...
> Pair<T extends String, S extends Integer> is transformed to String, Integer

Since arrays are reifiable, this causes an issue as type information of generics are not readily available at run-time.

> [!info] Reifiable types are types where full type information is available during run-time.

Generic array declaration ``T[] array`` is allowed, but generic array instantiation ``new T[]{}`` is not.
## Unchecked Warnings

Type erasures can cause a run-time error that a compiler cannot prevent due to the lack of type information available.

If the type safety is assured, we can use the annotation ``@SuppressWarning("unchecked")`` to assure compiler.

## Raw Types

Raw types are generic types without type arguments. This causes a warning in the compiler as well.
