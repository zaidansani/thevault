---
tags:
  - computer_architecture
  - CS2100
  - MIPS
title: Decision Making & Loops
---
# Decision Making

Decision making in high-level languages are generally symbolised by `if` and `goto` statements. While `goto` is discouraged in high-level languages, it is necessary in assembly.

Decision-making instructions are responsible for the **control flow** of the program, and changes the next instruction to be executed.

Decision making statements in MIPS are split into two types:
- Conditional (branch)
- Unconditional (jump)

> [!definition] Label
> A label is an anchor in the assembly code to indicate point of interest (branch target).

## Conditional

> [!important] `beq` (branch if equal)
> 
> Syntax: `beq $r1, $r2, L1`
> Goes to the statement labeled `L1` if the value in the register `$r1` equals the value in `$r2`.
> 
> > [!remark] C equivalent code
> > `if (a == b) goto L1` 

> [!important] `bne` (branch if not equal)
> 
> Syntax: `bne $r1, $r2, L1`
> Goes to the statement labeled `L1` if the value in the register `$r1` does notequals the value in `$r2`.
> 
> > [!remark] C equivalent code
> > `if (a != b) goto L1` 

Translating `if` statements can have multiple translations. 

> [!example]
> 
> Given the following C statement:
> ```C
> if (i == j) {
> 	f = g + h;
> }
> ```
> with the variable mappings: `$f -> $s0, $g -> $s1, $h -> $s2, $i -> $s3, j -> s4`
> 
> > [!remark] Using `beq`
> > ```
> >      beq $s3, s4, L1
> >      j Exit
> > L1:  add $s0, $s1, $s2
> > Exit:
> > ```
> 
> > [!remark] Using `bne`
> > ```
> >      beq $s3, s4, Exit
> >      add $s0, $s1, $s2
> > Exit:
> > ```
> 
> In this scenario, the `bne` translation is more efficient. This uses a common technique of inverting the condition for shorter code.


> [!example]
> 
> Given the following C statement:
> ```C
> if (i == j) {
> 	f = g + h;
> }
> else {
> 	f = g - h;
> }
> ```
> with the variable mappings: `$f -> $s0, $g -> $s1, $h -> $s2, $i -> $s3, j -> s4`
> 
> > [!remark] A possible solution
> > ```
> >      bne $s3, s4, Else
> >      add $s0, $s1, $s2
> >      j Exit
> > L1:  sub $s0, $s1, $s2
> > Exit:
> > ```
# Loops

Loops are used as a way to iterate through code.

> [!important] Key concept
> Any form of loop can be written in assembly with the help of conditional branches and jumps.

> [!example] `while`-loop
> 
> ```C
> while (j == k)
> 	i = i + 1;
> ```
> 
> can be rewritten with `goto` statements:
> 
> ```C
> Loop: if (j ! = k)
> 		goto Exit;
> 	  i = i+1;
> 	  goto Loop;
> Exit:
> ```
> 
> which can then be rewritten into the MIPS code with variable mapping `i -> $s3, j -> $s4, k -> $s5`
> 
> ```
> Loop: bne $s4, $s5, Exit
> 	  addi $s3, $s3, 1
> 	  j Loop
> Exit:
> ```

# Inequalities

There are no in-built `blt/bmt` operations to `branch-if-less-than`. Thus, use `slt` or `slti` (`set-less-than`) to get a value to `bne/beq` on.

> [!important] Building a `blt` operation:
> 
> `blt $s1, $s2, L` can be formatted into:
> ```
> slt $t0, $s1, $s2
> bne $t0, $zero, L
> ```
> 
> This is an example of a pseudo-instruction (the assmbler translates the `blt` instruction to an equivalent set of instruction in MIPS).


# Arrays and Loops

Note that in certain scenarios, use of pointers can produce more efficient code.

> [!question] Why can pointers produce more efficient code?
> 
> When not using pointers, the `sll` instruction is required to get the address increment from the offset.
> > [!example]
> > Since the word is 4bytes, the operation $i \times 4$ needs to be done to obtain the memory address increment for the offset. 
> > When pointers are used, all that has to be done is an `addi $t1, $t1, 4` where `$t1` holds the current address for the element.


