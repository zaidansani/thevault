---
title: Abstract Class & Interfaces
tags:
  - java_programming
  - object_oriented_programming
  - CS2030S
---
The main differences are as follows:

| Interface                                              | Abstract Class                                            |
| ------------------------------------------------------ | --------------------------------------------------------- |
| Used for verbs.                                        | Used for nouns.                                           |
| Multiple interfaces can be implemented.                | Only one.                                                 |
| Even with no subtype relationship, casting is allowed. | There must be a subtype relationship for casting to work. |
| Can only contain `abstract` methods.                   | Can contain `abstract` and non-abstract methods.          |

# Abstract Class

> [!summary] Used when a class is so general that it cannot and should not be instantiated on its own.
>  
> > [!example] A Shape.
>  

An abstract class can be considered the most generalised version in a model, where its implementation require further details to be properly implemented for its children classes.
# Interface

> [!summary] Used to model what an entity can do, even across different class hierarchies.
> > [!example] GetAreable

An interface can be considered a **contract** - any class implementing an interface has to implement the methods in the interface.

Unlike a class, multiple interfaces can be implemented by a class, using  `implements` .