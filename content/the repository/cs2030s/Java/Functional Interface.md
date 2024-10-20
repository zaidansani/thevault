---
title: Functional Interface
tags: [CS2030S, java_programming]
---
>[!summary] [[Abstract Class & Interfaces|Interface]] with only one abstract method.

> [!example] A interface that transforms something into something can be made into a functional interface:
```Java
@FunctionalInterface
interface Transformer <T, R> {
	R transform(T t);
}
```

We can then create an implementation of this interface by initialising it to a **lambda** expression.

> [!example] Given we want to implement a transformer that takes a person and retrieves their name:
``` java
Transformer<Person, String> getName = x -> x.getName();
```

Similarly, we can use a **lambda** as closure:
>[!example] Capturing a `distanceTo` function from the `Point` class:
```Java
Point origin = new Point(0, 0);
Transformer<Point, Double> dist = origin::distanceTo;
```

The lambda also stores the data from the environment it is defined in, and thus the lambda is considered a **closure**. 