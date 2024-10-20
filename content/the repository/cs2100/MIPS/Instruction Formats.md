---
tags:
  - computer_architecture
title: Instruction Formats
---
> [!note] Fixed-length
> All MIPS instruction has a fixed length of 32 bits.
# Formats

To reduce complexity of processor design, instruction encodings should be as regular as possible. This means that there should be minimal number of formats (as few variations of the combination of operands)

![](media/Pasted%20image%2020240909230746.png)

The classification can be seen as follows:

| Classification Name  | Format                                                       | Example             |
| -------------------- | ------------------------------------------------------------ | ------------------- |
| R-format (register)  | 2 source registers, 1 destination register                   | `op $r1, $r2, $r3`  |
| I-format (immediate) | 1 destination register, 1 source register, 1 immediate value | `op $r1, $r2, Immd` |
| J-format (jump)      | 1 immediate value                                            | `op Immd`           |
## R-format

The fields can be defined (32-bit) as follows:

| `opcode`                                                           | `rs`                                 | `rt`                                  | `rd`                                 | `shamt`                                                                    | `funct`                                           |
| ---------------------------------------------------------------- | ---------------------------------- | ----------------------------------- | ---------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------- |
| 6 bits                                                           | 5 bits                             | 5 bits                              | 5 bits                             | 5 bits                                                                   | 6 bits                                          |
| specifies instruction when combined with funct<br><br>set to $0$ | specify register for first operand | specify register for second operand | specify register to receive result | amount instruction will shift by (set to $0$ for non-shift instructions) | specifies instruction when combined with opcode |
Note that each field is an independent 5-bit/6-bit _unsigned integer_:
- 5 bits unsigned: 0 - 31
- 6 bits unsigned: 0 - 63

## I-format

> [!note] Immediate values
> Immediates may be much larger than the 5-bit `shamt` field allows. Thus, a new instruction format has to be defined, but it can be partially consistent with R-format.

The compromise is as follows: if the instruction has an immediate value, it can only use up to 2 registers.

| `opcode`                | `rs`                              | `rt`                                    | `immediate`                                                                          |
| --------------------- | ------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| 6 bits                | 5 bits                          | 5 bits                                | 16 bits                                                                            |
| specifies instruction | specify source register operand | specify register for receiving result | `rd`, `shamt`, `funct` are merged to form a 16-bit field used for a constant value |
> [!note] 32-bit constants
> Since the maximum amount of data that can be represented by `immediate` is 16-bit wide, we cannot put 32-bit constants in the instructions. Hence, the reason why we can only use part of it, and have to handle the upper and lower bits separately.

### Instruction Addresses

Instructions are stored in memory, and thus need addresses. As instructions are 32-bit long, they are also word-aligned.

> [!definition] Program Counter
> A special register, keeping address of instructions being executed in the processor

Using the I-format,  note that since the memory address is 32 bits, the `immediate` field is not enough to specify entire target address.

This might cause an issue when we are using branching.This is as the `bne` and `beq` uses immediate values as their operand.

> [!note] Branches and its usage
> Branches are used generally for decision-making (conditionals) or iterations. 
> 
> Since loops are generally small,  the change in PC will not be high.
> Unconditional jumps are also done without using the branch instructions, but instead the jump instructions, which uses a different format.

Thus, to be able to store the addresses in the `immediate` field, the target address is stored as the ==relative target address to the PC==, generated as the PC + 16-bit immediate field. The immediate field is a signed 2's complement integer.

This can then branch to $\pm 2^{15}$  bytes from the PC, enough to cover most loops.
In addition, since instructions are word-aligned, the `immediate` can be interpreted as a number of words, allowing for branching to $2^{15}$ words instead of bytes, which is equivalent to $2^{17}$ bytes from the PC.

The two scenarios are then as follows:
- if branch is not taken, $PC = PC + 4$ (go to next instruction)
- if branch is taken, $PC = (PC+4) + (immediate \times 4)$
	- hardware design specifies to add `immediate` to `PC + 4` instead of `PC`

## J-format

The format is as follows:

| `opcode`                                           | `target address`                                     |
| ------------------------------------------------ | -------------------------------------------------- |
| 6 bits                                           | 26 bits                                            |
| Kept identical to R and I-format for consistency | Combined to make room for larger target addresses. |
> [!question] How do we specify the memory address, as the `target address` field is 26-bit, while the actual memory addresses are 32-bit?

Note that jumps will only jump to instruction addresses, which are ==word-aligned==. This means that the last 2-bits will always be 00, meaning the address will always end with 00 for instruction addresses. Thus, we can now specify 28-bits of 32-bit address.

To get the next 4 bits, MIPS takes the 4 most significant bits from `PC + 4`, the next instruction after the jump instruction. Thus, the memory address is taken:

| `PC + 4`                      | `target address` from instruction | default 2 bit |
| ----------------------------- | --------------------------------- | ------------- |
| 4 bits                        | 26 bits                           | 2 bits        |
| Most significant bits of `PC` | Specified in instruction          | Always `00`   |
> [!note] Use of MSB of PC
> With the use of the first 4-bits from MSB, note that jumping can only be done within the block.
> 
> > [!example]
> > There cannot be a jump from `0x0....` to `0x1....` as the MSB dictates that the target address will have the first 4 bits be `0000` (from `0`).
> 
> Thus, there is a $256$mb boundary:
> $$
> 2^{8} = 256 \text{ mb} 
> $$

# Addressing Modes

> [!definition] Register addressing
> Operands are registers
> > [!example] `add, sub, and, or, xor, nor, slt, sll, srl` instructions

> [!definition] Immediate addressing
> Operand is a constant within the instruction itself
> > [!example] `addi, andi, ori, xori, slti` instructions

> [!definition] Base addressing
> Operand is at memory location whose address is a sum of aregister and a constant in the instruction
> > [!example] `lw, sw` instructions
  
> [!definition] PC-relative addressing
> Address is sum of PC and constant in the instruction
> > [!example] `beq, bne` instructions

> [!definition] Pseudo-direct addressing
> 26-bit of instruction concatenated with upper 4-bits of PC (+ LSB 2-bits set to `00b`)
> 
> > [!example] `j` instruction

Note that
- branches use **PC-relative** addressing
- jumps use **pseudo-direct** addressing