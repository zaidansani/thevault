---
title: Overriding and Overloading
tags: [CS2030S, object_oriented_programming]
---
>[!summary] Overriding is when a method with the same method descriptor as a method in the parent class is implemented in the subclass. Overloading is when methods with the same method name, but different method signature is implemented in the same class.


# Method Signature and Descriptor

> [!info] The method signature is the method name and the number of parameters, type of each parameter and the order of its parameters.
> >[!example] ``C:foo(B, B)``
> 

> [!info] The method descriptor is the method signature and the return type.
> >[!example] ``A C:foo(B, B)``

# Overriding

When a method in a parent class is reimplemented with the same method signature in the subclass, it is called **method overriding**. This is useful for altering and extending behaviours of existing classes.

> [!example] The ``toString`` method exists in the ``Object`` class which is a supertype of all classes.
> Implementing a ``toString`` in a subclass like ``Circle`` allows us to control the string representation of the ``Circle`` objects.

> [!info] When overriding a method, the ``@Override`` annotation should be used.

This helps the compiler know that the method is intended to override a method in a parent class, and notifies us if there is a typo or overriding is not possible.

This enables [Polymorphism](Polymorphism.md).
# Overloading

When there are two or more methods in the same class with the same name but differing method signature, it is called **method overloading.**

> [!example] The method ``add`` can be used to represent addition of 2 integers, as well as 3 integers. 
> ```Java
> public int add(int x, int y) {};
> public int add(int x, int y, int z) {};
>```

This can also be done for constructors.
> [!example] There could be a constructor specifically to construct the unit circle, and one to construct circles of any center point and radius:
> ```Java
> public Circle(Point c, double r) {} // for any point and radius
> public Circle() {} // initialise a circle with point (0,0) and radius 1
> ```

