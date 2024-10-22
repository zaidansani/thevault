---
title: Control
tags: [computer_architecture, CS2100, MIPS]
---
Control signals are generated based on the instruction to be executed. Thus, a combinational circuit to generate signals based on opcode and function codes.

![](media/Pasted%20image%2020240915004453.png)

# Control Signals
| Signal       | Stage            | Purpose                            | Value                                                                                             |
| ------------ | ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| `RegDst`     | Decode           | Select destination register number | `0`: `$rt` (`Inst[20:16]`)<br>`1`: `$rd` (`Inst[15:11]`)                                          |
| `RegWrite`   | Decode/Writeback | Enable write of register           | `0`: no write<br>`1`: write                                                                       |
| `ALUSrc`     | ALU              | Select 2nd operand for ALU         | `0`: `Operand2 = Register RD 2`<br>`1`: `Operand2 = SignExt(Inst[15:0)`                           |
| `ALUcontrol` | ALU              | Select operation to be performed   | `0000`: `AND`<br>`0001`: `OR`<br>`0010`: `ADD`<br>`0110`: `SUB`<br>`0111`: `SLT`<br>`1100`: `NOR` |
| `MemRead`    | Memory           | Enable reading of data memory      | `0`: no read<br>`1`: write                                                                        |
| `MemWrite`   | Decode/Writeback | Enable write of register           | `0`: no write<br>`1`: write                                                                       |
| `MemToReg`   | Writeback        | Select result to be written back   | `0`: ALU result<br>`1`: Memory data                                                               |
| `PCSrc`      | Memory/Writeback | Select next `$PC` value            | `0`: `$PC + 4`<br>`1`: `$(PC + 4) + IMM`                                                          |

| Control | Signal     | `R-format` | `lw` | `sw` | `beq` |
| ------- | ---------- | ---------- | ---- | ---- | ----- |
| 0       | `RegDst`   | 1          | 0    | 0    | 0     |
| 1       | `ALUSrc`   | 0          | 1    | 1    | 0     |
| 2       | `MemToReg` | 0          | 1    | 0    | 0     |
| 3       | `RegWrite` | 1          | 1    | 0    | 0     |
| 4       | `MemRead`  | 0          | 1    | 0    | 0     |
| 5       | `MemWrite` | 0          | 0    | 1    | 0     |
| 6       | `Branch`   | 0          | 0    | 0    | 1     |
| 7       | `ALUop1`   | 1          | 0    | 0    | 0     |
| 8       | `ALUop0`   | 0          | 0    | 0    | 1     |

# Control Bits

![](media/Pasted%20image%2020240915004512.png)
4 control bits are needed:
`Ainvert`: `1` to invert `A`, `0` otherwise
`Binvert`: `1` to invert `B`, `0` otherwise
`Operation`: To select one of the 3 results

| `Ainvert` | `Binvert` | `Operation` | Function |
| --------- | --------- | ----------- | -------- |
| `0`         | `0`         | `00`          | `AND`    |
| `0`         | `0`         | `01`          | `OR`     |
| `0`         | `0`         | `10`          | `ADD`    |
| `0`         | `1`         | `10`          | `SUB`    |
| `0`         | `1`         | `11`          | `SLT`    |
| `1`         | `1`         | `00`          | `NOR`    |
# Two-Level Implementation

![](media/Pasted%20image%2020240915004545.png)


| Opcode   | ALUop | Instruction Operation | funct    | ALU action       | ALU control |
| -------- | ----- | --------------------- | -------- | ---------------- | ----------- |
| `lw`     | `00`  | load word             | `xxxxxx` | add              | `0010`      |
| `sw`     | `00`  | store word            | `xxxxxx` | add              | `0010`      |
| `beq`    | `01`  | branch equal          | `xxxxxx` | sub              | `0110`      |
| `R-type` | `10`  | add                   | `100000` | add              | `0010`      |
| `R-type` | `10`  | sub                   | `100010` | sub              | `0110`      |
| `R-type` | `10`  | and                   | `100100` | and              | `0000`      |
| `R-type` | `10`  | or                    | `100101` | or               | `0001`      |
| `R-type` | `10`  | set on less than      | `101010` | set on less than | `0111`      |
![](media/Pasted%20image%2020240918221115.png)

> [!note] X
> The `X` bits mean that the bits are not used to determine the ALU control signal.

```
ALUcontrol3 = 0 
ALUcontrol2 = (F1 AND ALUop1) OR (ALUop0) 
ALUcontrol1 = !ALUop1 OR !F2 
ALUcontrol0 = (F0 OR F3) AND ALUop1
```

![[media/Control 2024-09-26 00.57.30.excalidraw.svg]]
## Deriving `ALUcontrol`

> [!note] `ALUcontrol3 = 0`

For all the operations, `ALUcontrol3` = 0;

> [!note] `ALUcontrol2 = (ALUop1 AND F1) OR ALUop0)`

`ALUcontrol2` is `1` for `sub`, `slt`, `beq`.

For `sub` and `slt`, the differentiating factor is `ALUop1 = 1` and `F1 = 1`
For `beq`, it is when `ALUop0 = 1`.

> [!note] `ALUcontrol1 = !ALUop1 AND !F2`

`ALUcontrol1` is `1` for `add`, `sub`, `slt`, and all non `Rformat`.

When it is `R format`, so `ALUop1 = 1`. The differentiating factor is that `F2 = 0` for these instructions and `1` otherwise. 

> [!note] `ALUcontrol0 = ALUop1 AND (F3 OR F0)`

`ALUcontrol1` is `1` for `or`, `slt`.

All the instructions are `R format`, so `ALUop1 = 1`. 
`slt` and `or` do not share any common bits.

Thus, for `slt`, it is the only instruction with `F3 = 1`, so that can indicate the `slt`.
For `or`, it is the only instruction with `F0 = 1`, so that can indicate `or`.
# Combinational Circuit Implementation

![[media/Control 2024-09-27 00.03.32.excalidraw.svg]]

![](media/Pasted%20image%2020240915011020.png)
![](media/Pasted%20image%2020240915011210.png)

> [!note] The circuit connections indicate that the instructions set the particular control signal.

The `O` above the `OR` gates at the input refer to a collapsed `NOT` gate. 

> [!example] R-format
> 
> `000000` has collapsed `NOT` gates everywhere.
> 

# Instruction Execution
Instruction execution refers to the process of:
1. Reading contents of register/memory
2. Perform computation through computational logic
3. Write results to one or more storage elements

All of this should be performed within a clock period.
> [!important] A storage element should not be read as it is being written.

> [!note] Speed of single cycle implementation
> Using a single cycle implementation, all instructions will take as much time as the slowest one, resulting in a long cycle time for each implementation. This is as the instructions cannot overlap in execution.

## Multicycle implementation

Break instructions into execution steps -
1. fetch
2. decode + read
3. ALU
4. memory read/write
5. register/write

By allocating this execution steps one clock cycle instead, one cycle is shorter, and the frequency is much higher.

> [!note] Variable number of clock cycles are needed to complete different instructions.

## Pipelining

Breaks instructions into execution steps one per clock cycle.
Allows different instructions to be in different execution steps simultaneously.

