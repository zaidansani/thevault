---
title: Concurrency and Parallelism
tags:
  - CS2030S
  - java_programming
  - functional_programming
---
> [!summary] 
> 
> - Parallelism implies concurrency, but not the other way.
> - When parallelising, consider interference, side-effects, and associativity.
> - The performance of the parallel stream is not inherently better than a sequential one.

With the availability of multi-core processors, we are now able to execute more than one instruction at one time. 

By dividing computation into **subtasks** such as **threads**,
- the programmers can separate unrelated tasks into threads
	- write each thread separately
- improves processor utilisation

> [!example] I/O and UI rendering are not necessary related tasks, and by splitting them into different threads, slow I/O will not affect UI responsiveness.

# Parallelism

Parallel computing refers to the scenario where **multiple subtasks** are running at the same time. This is when there is
- a processor capable of running multiple instructions
- multiple cores/processors and instructions are dispatched to execute at the same time.

> [!note] All parallel programs are concurrent, but not all concurrent programs are parallel.

## Performance

A parallel stream might not necessarily improve the performance. Thread creation incurs **overhead**, and thus, too much creation of threads might outweigh the benefits of parallelisation.

If an ordered stream does not require the original order to be kept, calling `unordered()` as part of the pipeline will make the parallel operations much more efficient, as the parallel operations do not need to coordinate between streams.

## Parallelising a stream

The `Stream` class allows for parallel operations. By using the pipeline method `.parallel()`, a parallel version of the instance is returned.

However, to ensure correctness of parallel execution, stream operations **must not interfere** with the stream data, and must be **stateless** generally. Side-effect free programming is ideal.

### Interference

> [!note] This is when the stream operations modify the source of the stream.

In general, this rule applies not only for parallel streams, but also for non-parallel streams. In Java, it would throw a `ConcurrentModificationException`.

### Stateful/Stateless Lambdas

A stateful lambda is one where the result depends on any **state** that might change during the execution of this stream. Parallelizing based on state **can lead to incorrect output**. Thus to prevent this, additional work needs to be done to **ensure state updates are visible to all parallel subtasks**.

### Side-Effects

Side-effects (as seen in [[Pure Functions]]) can lead to incorrect results in parallel execution. Given non-thread-safe data structures, if two threads manipulate it at the same time, there can be an **incorrect result**.

```Java
List<Integer> list = new ArrayList<>(
    Arrays.asList(1,3,5,7,9,11,13,15,17,19));
List<Integer> result = new ArrayList<>();
list.parallelStream()
    .filter(x -> isPrime(x))
    .forEach(x -> result.add(x));
```
> [!example]
> `ArrayList` is a non-thread-safe data structure.

To prevent this,
- the `Stream::collect` method can be used
- a thread-safe data structure can be used
	- Java provides some in `java.util.concurrent`
- the `Stream::toList` also can be used.

### Associativity

> [!note] The following rules are important in ensuring the correctness of the result returned by the `Stream::reduce` operation.

The `reduce(identity, accumulator, combiner)` operation in parallel attempts to:
- **reduce** each substream
- **combine** results of the substreams

However, to ensure correctness, there are several rules that the parameters must follow:
- `combiner.apply(identity, i) = i`
- `combiner` and `accumulator` must be **associative** 
	- order of applying must not matter
- `combiner` and `accumulator` must be **compatible**
	- `combiner.apply(u, accumulator.apply(identity, t))` must equal to `accumulator.apply(u, t)`

```Java
Stream.of(1,2,3,4).reduce(1, (x, y) -> x * y, (x, y) -> x * y);
```
> [!example] 
> Given the following, we see that the rules are satisfied.
> 
> - `i * 1 = 1`
> - `(x * y) * z = (x) * (y * z)`
> - `u * (1 * t) = u * t`

## Why is a combiner needed?

For simple examples such as adding all the elements together, or multiplying all the elements, the `combiner` and `accumulator` have the same lambda. These are reductions where the value is accumulated from type `S` to type `S` (in this case, possibly a `int` to `int`)

However, there are some reductions that convert the value from a type `S` to a type `U`. Consider the following example:

> [!example] Example:
> Reducing an array of `int` to a `String` (based on `char` values.)

Without parallelism, the `accumulator` can accumulate with the function `(prev, curr) -> prev + (char) curr`. This supports an input of `String` and `int`, and returns an output of `String`.

For example: `[104, 101, 108, 108, 111]` can be seen as `"hell" + (char) 111` at its last step.

However, when parallelising, the `combiner` cannot use this same function, as the intermediate results it is combining combines `String` and `String`, and not `String` and `int`. Thus, the `combiner` needed now is instead the `String::concat` function.

For example: the stream may have split into two streams, and accumulated with the results `"hel"` and `"lo"`. We cannot use the accumulator to combine these two results, but need to use the concatenation method `String::concat`. 