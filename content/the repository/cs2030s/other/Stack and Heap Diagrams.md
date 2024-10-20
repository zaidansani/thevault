---
title: Stack and Heap Diagrams
tags:
  - CS2030S
---
The **Stack and Heap Diagram** has three components:
- the **Stack** contains the stack of function calls
	- within the functions, the environment contains variables
- the **Heap** contains the instances of objects
- the **Metaspace** contains the static variables of objects.

> [!note] The stack and heap diagram allows us to see the state of the program at a certain point.

The values should be added in order (either **top-down** or **down-top**).

---

If the function has finished running, it is removed from the stack.

> [!example]
```Java
function1();
.....
// line A
```

At *line A*, `function1` is complete, and thus should be removed from the stack.

---

**Lambda** functions are stored as instances of an anonymous class. 

> [!example] Example: Lazy operations

If we initialise a `Lazy` object with a `Producer`, we can see in the heap

```Java
Lazy<Integer> a = Lazy.of(() -> 3);
```

![[diagrams/anonymousclass.png|anonymousclass|100%]]

Note that the `map` function can be implemented like such:
```Java
public <R> Lazy<R> map(Transformer<? super T, ? extends R> mapper) {  
	return new Lazy<R>(() -> mapper.transform(this.get()));  
}
```

So, given the code excerpt:

```Java
Lazy<Integer> a = Lazy.of(() -> 3);
Lazy<Integer> b = a.map(x -> x + 1);
```


![[diagrams/anonymousclass2.png|100%]]

Two new anonymous instances are in the heap:
- the `Transformer` passed into the `Lazy::map` function as argument
- the `Producer` created in the `Lazy:map` function to create a new `Lazy` class.
	- Note that it has two variables storing the `mapper` and `this`.