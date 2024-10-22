---
title: Datapath (Summary)
tags: [computer_architecture, CS2100, MIPS]
---
```C
function FETCH();
function DECODE(inst);
function ALU(A, B, ALUcontrol);
function MEM(alu_res, data);
function WRITEBACK(data);

function DATAPATH() {
	inst, RR1, RR2, RD1, RD2, WR, IMM, A, B, alu_res, mem_res, data;
	inst = FETCH();
	A,B = decode(inst);
	alu_res = ALU(A, B, ALUcontrol);
	data = MEM(alu_res, RD2, MemWrite, MemRead);
	WRITEBACK(data, WR, RegWrite);
}

function FETCH() {
	inst = IM(PC); // read instruction at address from PC
	PC = Add(PC, 4); // update PC
	return inst;
}

function DECODE(inst) {
	RR1 = inst[21:25]; // $rs
	RR2 = inst[16:20]; // $rd/rt
	RD1, RD2 = RegRead(RR1, RR2); // read from registers

	WR = Mux(
		inst[16:20] // $rt
		inst[11:15] // $rd
		RegDst); // control signal: 0 for $rt, 1 for $rd

	IMM = SignExtend(inst[0:15]);
	return [RD1, 
		Mux(RD2, 
		IMM, 
		ALUSrc)]; // control signal: 0 for $rt, 1 for IMM
}

function ALU(A, B, ALUcontrol) {
	case 0000: return [A & B, A & B  == 0]; // AND
	case 0001: return [A | B, A | B  == 0]; // OR
	case 0010: return [A + B, A + B  == 0]; // ADD
	case 0110: return [A - B, A - B  == 0]; // SUB
	case 0111: return [A < B, A < B  == 0]; // SLT
	case 1100: return [~ (A | B), ~ (A | B)  == 0]; // NOR
}

function MEM(alu_res, data) {
	mem_res = DataMem(
		alu_res,
		data,
		MemWrite, // 1 if write, 0 if no write
		MemRead // 1 if read, 0 if not
	);
}

function WRITEBACK(data) {
	RegWrite(data,
		WR,
		RegWrite); // 1 if write, 0 if no write
}
```

# Control Signals

| Signal       | Stage            | Purpose                            | Value                                                                                             |
| ------------ | ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| `RegDst`     | Decode           | Select destination register number | `0`: `$rt`<br>`1`: `$rd`                                                                          |
| `RegWrite`   | Decode/Writeback | Enable write of register           | `0`: no write<br>`1`: write                                                                       |
| `ALUSrc`     | ALU              | Select 2nd operand for ALU         | `0`: `$rt`<br>`1`: `IMM`                                                                          |
| `ALUcontrol` | ALU              | Select operation to be performed   | `0000`: `AND`<br>`0001`: `OR`<br>`0010`: `ADD`<br>`0110`: `SUB`<br>`0111`: `SLT`<br>`1100`: `NOR` |
| `MemRead`    | Memory           | Enable reading of data memory      | `0`: no read<br>`1`: write                                                                        |
| `RegWrite`   | Decode/Writeback | Enable write of register           | `0`: no write<br>`1`: write                                                                       |
| `MemToReg`   | Writeback        | Select result to be written back   | `0`: ALU result<br>`1`: Memory data                                                               |
| `PCSrc`      | Memory/Writeback | Select next `$PC` value            | `0`: `$PC + 4`<br>`1`: `$(PC + 4) + IMM`                                                          |
# Stages

| Stage       | Action                                                                                                        | Input                                    | Output                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `FETCH`     | Gets the instruction from the instruction address.<br>Adds 4 to the PC.                                       |                                          | Instruction                                |
| `DECODE`    | Reads the opcode to determine instruction type and field lengths.<br>Reads data from all necessary registers. | Instruction                              | Operand 1 and 2 for ALU                    |
| `ALU`       | Computes results                                                                                              | Operands 1 and 2                         | Result, as well as `isZero`                |
| `MEMORY`    | Reads calculated address from ALU stage and data to be stored if any<br>Reads/writes from memory              | Calculated address and result from `ALU` | Data read from memory or result from `ALU` |
| `WRITEBACK` | Read result from memory stage to `WriteData` and `WR`<br>Writes result                                        | Result from `MEMORY`                     |                                            |
# Examples
> [!example] Branch instruction `beq`
> 
> ![](media/Pasted%20image%2020240913181127.png)

f

> [!example] I-Format `lw`
> ![](media/Pasted%20image%2020240913181402.png)

> [!example] I-Format `sw`
> ![](media/Pasted%20image%2020240913181443.png)

> [!example] R-format
> ![](media/Pasted%20image%2020240913181509.png)

