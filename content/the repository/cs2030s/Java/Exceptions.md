---
title: Exceptions
tags:
  - CS2030S
  - java_programming
---
> [!summary] Exception handling and error handling needs to be done for a fully-working application.

# Try-Catch-Finally

The general syntax is as follows:
```Java
try {

}
catch (Exception e) {

}
finally {

}
```

The `try` block attempts to run a few lines of code. If an exception is thrown by any of the lines, the `catch` block is invoked. Multiple `catch` blocks can be written to handle different kinds of exceptions. The `finally` block is for housekeeping.

# Unchecked and Checked Exceptions

An unchecked exception is an exception caused by a programmer's errors, while a checked exception is an exception that a programmer has no control over.

All unchecked exceptions in Java are subclasses of `RuntimeException`, while checked exceptions are subclasses of `Exception`. 

# Throwing Exceptions

To indicate that a method could throw exceptions, the keyword `throws` should be in its method declaration, like such:
>[!example] `public calculateBMI(double height, double weight) throws IllegalArgumentException`

# Catching Exceptions

If a method that generates an exception is called, the exception does not need to be handled within the function it is called in, as it can be handled by the method that calls in.

An unchecked exception, if not caught, will propagate automatically down the stack until it is caught, or if it is not caught, will result in an error message.

# Overriding

With regards to [overriding](../OOP/Overriding%20and%20Overloading.md), the overriding method must throw only the **same, or a more specific** exception than the overriding method to ensure that the [[../OOP/LSP]] is followed.

# Good Practices

## Catch Exceptions to Clean Up

It is better to catch the exceptions in some cases rather than to pass the exceptions down to other methods.

## Do Not Catch Them All

Do not just catch the `Exception` superclass, as it silently ignores all kinds of exceptions, which will make it more difficult to determine errors in the program.

## Do Not Overreact

Do not exit a program because of an exception. Instead, do the required housekeeping needed.

## Do Not Break Abstraction Barrier

Letting the calling method handle the exception causes the implementation details to be leaked, making it harder to change implementation in future.

Implementation-specific exceptions should be handled **within** the abstraction barrier.

# Do Not Use Exception Handling as a Control-Flow Mechanism

Do not use exceptions as a form of if-conditions.