---
tags:
  - computer_architecture
  - CS2100
  - MIPS
title: Memory Instructions
---
The memory can be viewed as a large single-dimension array of memory locations with an address.

The **address space** given a $k-$bit address is of size $2^k$. 

| Address   | Content |
| --------- | ------- |
| 0x0000000 | 8 bits  |
| 0x0000001 | 8 bits  |
Every location/address contains one byte (8 bits).

A memory address can be used to access:
-  a single byte (byte addressable)
- a single word (word addressable)

> [!remark] Word
> 
> Usually $2^n$ bytes.
> 
> The common unit of transfer between processor and memory, and usually coincides with register size, integer size, and instruction size in most architecture.

**Word alignment** refers to whether a word begins at a byte address that is a multiple of the number of bytes in a word. 

> [!example] Word alignment
> 
> Given that a word consists of $2^2 = 4$ bytes, a word at the memory address $0$ is word-aligned, but words at $1, 2, 3$ are not word-aligned.
> 
> > [!question] How do we check for word alignment?
> > 
> > Use an `AND` operation (to perform masking)
> > 
> > For this example, for a $4-$byte word, the `AND` operation used can be `(address & 0x3) == 0`.
> > Since `0x3` is equivalent to `100b`, if the last two bits have any bits $1$ after the `AND` operation, it can be said that the memory address is not a multiple of 4.

# Memory Instructions

MIPS is a load-store-register architecture
- which 32 registers, each 32-bit (4-byte) long
- each word contains 32 bits (4 bytes)
- memory addresses are 32-bit long

There are 32 registers (as seen in [General Purpose Registers](Introduction%20To%20MIPS.md#General%20Purpose%20Registers)), as well as $2^{30}$ memory words. As MIPS uses byte addresses, consecutive words differ by 4.

> [!remark] MIPS
> In MIPS, data **must be in registers to perform arithmetic**. Thus, data in the memory words must be transferred (using the relevant data transfer instructions) into the registers, before the arithmetic can be performed.

As MIPS is a load-store-register architecture, the main instructions are `load` and `store`.

> [!important] Load Word
> Used to transfer data from the memory into the registers in the processor.
> 
> Syntax: `lw REGISTER_2, OFFSET(REGISTER_2)`
> 
> > [!example]
> > Given that `$s0` contains `0x8000`:
> > `lw $t0, 4($s0)` 
> > - the memory address is retrieved `$s0 + 4 = 0x8000 + 4 = 0x8004`
> > - the memory word `Mem[8004]` is loaded into `$t0`.


> [!important] Load Word
> Used to transfer data from registers into the memory.
> Syntax: `sw REGISTER_2, OFFSET(REGISTER_2)`
> 
> > [!example]
> > Given that `$s0` contains `0x8000`:
> > `sw $t0, 4($s0)` 
> > - the memory address is retrieved `$s0 + 4 = 0x8000 + 4 = 0x8004`
> > - the content of `$t0` is stored into the word at `Mem[8004]`

There are other variants of `lw, sw` for example - bytes (`lb, sb`). In this scenario, offset no longer needs to be a multiple of $4$.

> [!remark] Unaligned word
> MIPS disallows loading/storing unaligned word using `lw, sw`. However, pseudo-instructions `ulw` and `usw` are provided for this purpose.
> 
> Other memory instructions: `lh, sh` for halfword, `lwl, lwr, swl, swr` for loading word left/right, etc...








