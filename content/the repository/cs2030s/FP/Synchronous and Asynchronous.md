---
title: Synchronous and Asynchronous
tags: [CS2030S, java_programming]
---
>[!summary]
> - A synchronous program blocks until it returns, while an asynchronous program allows for the computation of other processors.
> - In Java, there is the `Thread`, `CompletableFuture` and also its implementation of the **Fork-Join-Pull** in order to implement asynchronous programming.

# Synchronous

> [!note] A synchronous program **blocks** until it returns.

When a synchronous method is invoked,
- a value is expected to be returned
- while the method is not done, execution stalls
- execution of program can only continue after method returns.

This becomes an efficiency issue when there are frequent method calls that block for a long period.

# Threads

> [!summary] A thread is a single flow of execution in a program.

Utilising `java.lang.Thread`, a function can be encapsulated to run in a separate thread.

```Java
new Thread(() -> {
  for (int i = 1; i < 100; i += 1) {
    System.out.print("_");
  }
}).start();

new Thread(() -> {
  for (int i = 2; i < 100; i += 1) {
    System.out.print("*");
  }
}).start();
```
> [!example]
> In the example above, `start()` is called, but it returns immediately, and does not block until the function encapsulated inside is completed. This is **asynchronous execution**.
> 
> The threads run in two separate sequences of execution, and the operating system schedules the threads, thus there might be **different interleaving of executions** running the same program.

However, `Thread` still requires a fair amount of effort to write multi-threaded programs in Java. Implementing a complex operation with `Thread` 
- requires careful coordination
- results in overhead. `Thread` instances should be reused, but managing multiple instances and deciding which instances should run certain functions is difficult.

### `CompletableFuture`

The `CompletableFuture` class is a [[Monads|monad]] with the ability to hold a function, and check if the value promised is ready or not (if the task(s) encapsulated are complete).

## Creation

- `completedFuture` creates a **completed** task and returns a value
- `runAsync` takes in a `Runnable` (lambda expression). It has a return type of `CompletableFuture<Void>`. 
- `supplyAsync` similarly takes in a `Supplier<T>` (lambda expression). It has a return type of `CompletableFuture<T>`.

For both `runAsync` and `supplyAsync`, the instance **completes** when **the lambda expression finishes**. However, for the `completedFuture`, the instance **completes** when the `completedFuture` method returns.

## Chaining

Consider the following operations:
- `thenApply` is similar to the `map` function
- `thenCompose` is similar to the `flatMap` function
- `thenCombine` is similar to the `combine` function

These operations also have a **asynchronous version**, with similar method names and the suffix `Async` after it, which may cause the lambda expression to run in different thread (increasing concurrency).

## Getting results

`get` and `join` can be used to get the results, but these calls should only be done at the **final step** as they are **synchronous** calls. Thus, to maximise concurrency, call them at the end of the program, or only when it is first necessary.

## Exception handling

The `completableFuture` monad provides multiple ways to handle exceptions:
- `handle` takes in a `BiFunction` with parameters `(value, exception)`
- `exceptionally` takes in a `Function` that is triggered when an exception is encountered.
- `whenComplete` takes in a `BiConsumer` that is triggered when it is complete.

> [!note] The `handle` method allows for control of both situations where an exception is encountered, and not. However, the `exceptionally` only allows for control when exceptions are encountered.

> [!example] 
> Given a function that retrieves a person's age, the person might not exist, and throw a `Exception`. However, we might want to increment the person's age by 1 if they exist. 
> 
> `handle` allows this: `handle((x, y) -> y == null ? 0 : x + 1)`

# Fork-Join-Pool

1. Each thread has a **deque** of tasks
2. When a thread is idle, it checks its deque.
	1. If thread is non-empty, it takes a task at the **head** of the deque to execute.
	2. Otherwise, it picks up a task from the **tail** of the deque of another thread (work stealing).
3. When `fork` is called, the caller adds itself to the **head** of the deque of the executing thread. (The most recently forked tasks gets executed **first**.)
4. When `join` is called,
	1. If subtask joined has not been executed, it is executed.
	2. If it is completed, result is read, and `join()` returns.
	3. If subtask is stolen and executed by another thread, then the current thread can find other tasks to work on or commit work-stealing.

> [!note] Note that the **most recently forked tasks** get executed first.

Since the most recently forked tasks get executed first, and `join` is synchronous and will block the program from running, the order of `fork`, `compute` and `join` should form a **palindrome**. There should only be at most a single `compute`.

```Java
left.fork();
right.fork();

right.join(); // or right.compute()
left.join();
```
