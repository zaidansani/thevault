---
{"publish":true,"title":"Alternative to Processes","tags":["CS2106","operating_systems","process_management"],"PassFrontmatter":true}
---

> [!note] Motivation
> A process is expensive, as it requires process creation and context switches.

Communication between processes is difficult, as each process has an independent memory space, meaning it requires inter-process communication (IPC).

The general idea is that every traditional process has a single thread of control - meaning only one instruction of the whole program is executing at any time. Thus, adding more threads of control allows multiple parts to execute at the same time conceptually.

A multithreaded process is a process with multiple threads.
# Thread

Each thread requires unique information such as
- Identification (thread id)
- Registers
- Stack
## Benefits

Multiple threads in the same process require much less resources to manage compared to multiple processes - **economy**.

Threads share most of the resources, thus there is no need for additional mechanism for passing information around (as compared to with processes, and IPC) - **resource sharing**

Multithread programs are often appear much more **responsive** and can take advantage of multiple CPUs - **scalability**.

## Problems

System call concurrency means that there are parallel execution of multiple threads, meaning parallel system calls are possible.

There are also impact on process operations
- if `fork` duplicates process, what about threads?
- if a thread executes `exit()`, what about the other threads in the process, and the whole process?
- if a single thread calls `exec()`, how about other threads?

# Thread Models

Threads can be implemented either as **user** or **kernel** threads.

## User Thread

> [!note] User thread
> Thread is implemented as a **user library**

A runtime system in the process will handle the thread related operations. The kernel is **not aware** of threads in the process.

> [!pros]
> - Multithreaded programs are OS-independent
> - Thread operations are just library calls
> - More configurable and flexible, with a customised thread scheduling policy

> [!cons]
> - OS not aware of threads, meaning scheduling is still performed at process level
> - If a thread is blocked, the entire process is blocked, meaning all threads are blocked
> - Prevents optimal utilisation of multiple CPUs

## Kernel Thread

> [!note] Kernel thread
> Thread implemented in the **OS**

Thread operation is handled as system calls, allowing for thread-level scheduling instead of process-level scheduling. This means that the kernel might make use of threads for its own execution.

> [!pros]
> - Kernel can schedule on thread levels
> - Allows more than 1 thread in the same process to run simultaneously

> [!cons]
> - Thread operations as a system call makes it slower and more resource intensive
> - Less flexible
> 	- Can be expensive for simple program if feature-rich
> 	- Can be not flexible enough for complex program if feature-poor

## Hybrid Thread

This model offers both Kernel and User threads, allowing for
- OS scheduling on kernel threads
- User thread binding to kernel threads

This model is more flexible, as it allows the limiting of concurrency of any process/user.

# POSIX Threads `pthread`

`pthread` is a standard defined by the IEEE, which is supported by most Unix variants.

The standard defines the API, and the behaviour, but the implementation is not, meaning the `pthread` can be implemented as user/kernel thread.

## Thread Creation

```C
#include <pthread.h>

int pthread_create(
	pthread_t *tidCreated,
	const pthread_attr_t *threadAttributes,
	void* (*startRoutine) (void*)
	void *argForStartRoutine);
```

```BASH
gcc XXXX.c -lpthread
```

Some datatypes that are relevant:
- `pthread_t` refers to the thread ID datatype
- `pthread_attr` refers to the attributes of a thread datatype

The function takes in
- `tidCreated`: the thread ID of the created thread
- `threadAttributes`: attributes to control the behaviour of the new thread
- `startRoutine`: function pointer to the function to be executed by thread
- `argForStartRoutine`: arguments for the `startRoutine` function

The function returns
- `0` if there is no error
- `!0` if there is errors

## Thread Exit

```C
#include <pthread.h>

void pthread_exit(void* exitValue);
```

The function takes in
- `exitValue`: a value to be returned to any synchronised with this thread

If the `pthread_exit()`is not used, it will terminate when the end of the `startRoutine` is reached, but this does **not return a exit value**

## Thread Join

```C
#include <pthread.h>

int pthread_join(pthread_T threadID,
				void **status);
```

The function takes in
- `threadID`: TID for the `pthread` to wait for
- `status`: Exit value returned by the target `pthread`

The function returns
- `0` if there is no error
- `!0` if there is errors
