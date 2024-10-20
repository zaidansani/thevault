---
title: Type Inference
tags:
  - CS2030S
  - java_programming
---
# Rules
- $Type1 <: T <: Type2$, then $T$ is inferred as $Type1$
- $Type1 <: T$, then $T$ is inferred as $Type1$
- $T <: Type2$, then $T$ is inferred as $Type2$

# Constraints

>[!example] 
>
>Given the example below:
```Java
static <T extends Comparable<T>> T max(List<T> list)
List<Fruit> fruits = List.of(new Fruit(), new Apple());
```

Running `max(fruits);`

1. Target type
   > [!example] `T` <: `Fruit`
2. Argument type
   > [!example] `List<Fruit>` <: `List<T>`, thus `T` = `Fruit`
3. Type parameter bound
   > [!example] `T` <: `Comparable<T>`
   
