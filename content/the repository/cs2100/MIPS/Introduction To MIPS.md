---
tags:
  - computer_architecture
title: Introduction To MIPS
---
> [!todo] Instruction Set Architecture
> An abstraction on the interface between the hardware and the low-level software. 

Machine code has instructions in binary, while assembly is still human readable (to a certain extent) as compared. Machine code is written in hexadecimal.
# Walkthrough

The two major components in **Processor** and **Memory**. The processor performs computations while the memory stores the code and data. The code and data resides in the memory and transfers into the processor during execution. 

To prevent frequent access of memory, **registers** are used to provide temporary storage for values in the processor.

> [!important] Register
> 
> Provides temporary storage of values in the processor.
> The arithmetic operations then can work directly on registers, which speed up the processes.
> 
> > [!abstract] The load-store model
> > **Load**: Moving data from memory into a register
> > **Store**: Moving data from a register into memory
> 
> Memory instruction is then needed to move the data into registers and memory. 

> [!info] Instructions
> - memory
> - calculation
> - control flow
> 	- repetition (loops)
> 	- selection (conditional)

# General Purpose Registers

Registers have no **data type** unlike program variables - machine/assembly instruction assumes the data stored in the register is of the correct type. 

| Name      | Register Number | Usage                                        |
| --------- | --------------- | -------------------------------------------- |
| `$zero`   | 0               | Constant value 0                             |
| *`$at`*   | *1*             | _**Reserved** for assembler_                 |
| `$v0-$v1` | 2 - 3           | Values for results and expression evaluation |
| `$a0-$a3` | 4 - 7           | Arguments                                    |
| `$t0-$t7` | 8 - 15          | Temporaries                                  |
| `$s0-$s7` | 16 - 23         | Program variables                            |
| `$t8-$t9` | 24 - 25         | More temporaries                             |
| `$k0-$k1` | _26 - 27_       | _**Reserved** for operating system_          |
| `$gp`     | 28              | Global pointer                               |
| `$sp`     | 29              | Stack pointer                                |
| `$fp`     | 30              | Frame pointer                                |
| `$ra`     | 31              | Return address                               |
# Assembly Language

Each line of assembly code contains at most one instruction.

`#` Anything tagged with the hex-sign to end-of-line will be ignored by the assembler (comments)

**General Instruction Syntax**
```
OPERATION DESTINATION, SOURCE, SOURCE
```

Naturally, most of the MIPS arithmetic/logic operations have **three** operands: 2 sources and 1 destination. MIPS arithmetic operations are mainly register-to-register.
### Addition

> [!example]
> In C, `a = b + c` is converted into the MIPS assembly code `add $s0, $s1, $s2`.
> 
> **Variable mapping** is assumed (the values of `a`, `b`, `c` are loaded into registers `$s0, $s1, $s2` respectively.)
### Subtraction

> [!example]
> In C, `a = b - c` is converted into the MIPS assembly code `sub $s0, $s1, $s2`
### Complex Expressions

> [!example]
> In C, `a = b + c - d` is converted into the MIPS assembly code:
>  ```C
> add $t0, $s1, $s2
> sub $s0, $t0, $s3
> ```
> 
> > [!remark]
> > A single MIPS instruction can handle at most **two** source operands. Thus, a complex statement needs to be broken into multiple MIPS instructions.
> 
> > [!remark] Use of temporary registers
> > To store intermediate results, use the temporary registers $t0 to $t7 for intermediate results.

### Immediate Operands

Immediate values are numerical constants frequently used in operations.

> [!important] `addi`
> The `addi` instruction is used to add numerical constants. The syntax is then `addi OPERAND, OPERAND, IMMEDIATE_VALUE`. The constant can range from $-2^{15}$ to $2^{15} - 1$, using the 2s complement number system on a 16-bit number.
> 
> > [!danger] `subi` does not exist
> > Use `addi` with a negative constant instead.

### Register Zero `$zero`

The assignment of `f = g` is equivalent to `add $s0, $s1, $zero` (after assumed variable mapping). There is a equivalent pseudo-instruction `move $s0, $s1`.
## Logical Operations

Arithmetic operations view the content of a register as a single quantity. Logical operations view the content of a register as 32 raw bits instead - allowing for operation on individual bits/bytes within a word.

| Logical Operation | C Operator | Java Operator | MIPS Instruction |
| ----------------- | ---------- | ------------- | ---------------- |
| Shift Left        | `<<`       | `<<`          | `sll`            |
| Shift Right       | `>>`       | `>>`, `>>>`   | `srl`            |
| Bitwise `AND`     | `&`        | `&`           | `and, andi`      |
| Bitwise `OR`      | \|         | \|            | `or`, `ori`      |
| Bitwise `NOR`     | `~`        | `~`           | `nor`            |
| Bitwise `XOR`     | `^`        | `^`           | `xor`            |
**Truth tables for bitwise operations*

| `a` | `b` | `a AND b` |
| --- | --- | --------- |
| 0   | 0   | 0         |
| 0   | 1   | 0         |
| 1   | 0   | 0         |
| 1   | 1   | 1         |

| `a` | `b` | `a OR b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

| `a` | `b` | `a NOR b` |
| --- | --- | --------- |
| 0   | 0   | 1         |
| 0   | 1   | 0         |
| 1   | 0   | 0         |
| 1   | 1   | 0         |

| `a` | `b` | `a XOR b` |
| --- | --- | --------- |
| 0   | 0   | 0         |
| 0   | 1   | 1         |
| 1   | 0   | 1         |
| 1   | 1   | 0         |
### Shifting

```
sll TEMPORARY_REGISTER, VARIABLE_REGISTER, CONSTANT
srl TEMPORARY_REGISTER, VARIABLE_REGISTER, CONSTANT
```

The operation shifts the value in the `variable_register`, `$s0` for example, by the values in the constant, and fills the emptied position with zeroes, into the `temporary_register`, `$t0` for example.
### Bitwise operations

`AND` operation:

Can be used for masking operations (setting irrelevant parts of the register to 0)
- to ignore bits in certain positions, place $0$ in the positions to be ignored.
- to only focus on certain positions, place $1$ in the interested positions.

`OR` operation:

Forces certain bits to 1s.

`NOR` operation:

Can be used to implement the `NOT` operation to toggle bits.
`nor $t0, $t0, $zero`

> [!question] Why is a `NOT` instruction not provided in the instruction set?
> Keep instruction set small.

`XOR`operation: 

This can also be used to implement the `NOT`.
`xor $t0, $t0, $t2` where `$t2` contains all 1s.
## Large Constant

> [!question] How to load 32-bit constant into register?
> 
> 1. Use `lui` (load upper immediate) to set upper 16-bit:
> 	`lui $t0, 0xAAAA`
> 2. Use `ori` (or immediate) to set lower-order bits
> 	`ori $t0, $t0, 0xF0F0`
