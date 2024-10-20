---
title: Midterm Notes
---
> [!remark] CS2100 Notes
> for midterms, AY24-25 Sem 1
> 
> _zaidan sani_

---

# Number Systems

> [!note] Notations (prefix)
> `0` for octal
> `0x `for hexadecimal in C and QTSpim
> `8'b` for binary in Verilog
> `8'h` for hexadecimal in Verilog
> `8'd` for decimal in Verilog

---
## Representing Negative Numbers

### Sign-and-Magnitude

![[media/midterms/Midterm Binder 2024-09-30 23.08.48.excalidraw.svg]]

Range:
$$
-(2^{n-1} - 1) \leftrightarrow 2^{n-1}- 1
$$

> [!note] To negate a number for sign-and-magnitude
> Invert the sign bit

---
### 1s complement for base 2

$$
-x = 2^{n}-x - 1
$$

Range:
$$
-(2^{n-1} - 1) \leftrightarrow 2^{n-1}- 1
$$


> [!note] To negate a number for 1s complement
> Invert all bits

---
### 2s complement for base 2

$$
-x = 2^{n} - x
$$

Range:
$$
-(2^{n-1}) \leftrightarrow 2^{n-1}- 1
$$


> [!note] To negate a number for 2s complement
> Invert all bits and add 1

---

### Radix complement

> [!definition] Diminished radix complement
> 
> Given the number of digits $n$, and a radix $b$, the $(b-1)s$ complement is:
> $$
> -x = b^{n}-x - 1
> $$
> > [!example] 1s complement, for base 2 ($b = 2, b - 1 = 1$)

> [!definition]  Radix complement
> 
> Given the number of digits $n$, and a radix $b$, the $(b)s$ complement is:
> $$
> -x = b^{n}-x
> $$
> > [!example] 2s complement, for base 2 ($b = 2$)

---

### Excess representation

> [!definition] Excess-$k$ representation of $n$-bit numbers
> 
> Where $k = 2^{n-1}$,
> the first entry $0$ can be represented as lowest number $-k$.
> 
> > [!example] Excess-4 representation on 3-bit numbers
> > k = $2^{3-1} = 4$ 

---

## Algorithms for addition & subtraction

### 2s complement

**Addition of integers $A + B$**
1. Perform binary addition on two numbers
2. Ignore carry out
3. Check for overflow - overflow occurs if 
	- carry in and carry out of MSB are different OR
	- result is opposite sign of $A$ and $B$

> [!info] Overflow
> 
> Since signed numbers are of a fixed range, if the result of a computation goes beyond this range, an overflow occurs. This can be detected easily by ensuring that
> - `+ve` + `+ve` MUST be `+ve`
> - `-ve` + `-ve` MUST be `-ve`

### 1s complement

**Addition of integers $A + B$**
1. Perform binary addition on two numbers
2. If carry out occurs, add $1$ to result.
3. Check for overflow - overflow occurs if 
	- result is opposite sign of $A$ and $B$

---

## Floating Point Formats

### IEEE-754
![[media/midterms/Midterm Binder 2024-09-30 23.25.26.excalidraw.svg]]

### Converting from IEEE-754 hexadecimal to real number

1. Get the sign bit - if 1, the number is negative, if 0, the number is positive.
2. Get the exponent.
3. The real number is $2^{exponent} \times 1.{mantissa}$

![[media/midterms/Midterm Binder 2024-09-30 23.30.26.excalidraw.svg]]

---
### Converting from real number to IEEE-754

1. Convert the number to binary
2. Reduce the number to standard form
3. Get the sign bit based on the number
4. Get the exponent based on the standard form, and get it's excess-127 representation.
5. Pad the numbers after the binary point with 0s to get the mantissa

To convert number to binary: 
![[media/midterms/Midterm Binder 2024-09-30 23.56.35.excalidraw.svg]]
1. Convert the decimal integral itself to binary
	1. Divide decimal number, store remainders in array
	2. Devide quotient by 2
	3. Repeat step 2 until quotient = 0
	4. Reverse all remainders
2. Convert decimal fractional to binary
	1. Multiply fractional decimal number by 2
	2. Integral part of resultant decimal will be the fractional number
	3. Repeat

![[media/midterms/Midterm Binder 2024-09-30 23.59.08.excalidraw.svg]]

---
### Maximum/Minimum Representations

Given a floating point number system with the format **sign | exponent (`n bits`) | mantissa** (`m bits`), the most positive number is where the entire exponent and mantissa is made of 1s. _assuming, no reserved values_

To calculate this value, get the maximum Excess-$x$ value, $x = 2^{n-1}-1$  and calculate the summation:
$$
\begin{aligned}
\sum\limits^{2^{x}}_{i=2^{x-m}}2^{i} &=  \sum\limits^{2^{x}}_{i=0}2^{i} -  \sum\limits^{2^{x-m}}_{i=0}2^{i} \\
&= (2^{x+1} - 1)- (2^{x-m+1}-1) \\
& = (2^{x+1}-2^{x-m+1})
\end{aligned}
$$

> [!example] Given a floating point system with 1 sign bit, 6 exponent bits, and 9 normalised mantissa bits, and no hidden bit.
> 
> We can find the most positive number $max$:
> $$
> \begin{aligned}
> x&= 2^{5}-1 = 31\\
> \therefore max &= 2^{31 + 1}-2^{31 - 9 + 1} \\
> &= 2^{32}-2^{23}\\
> &= 4286578688 
> \end{aligned}
> $$
> 
> $max$ can also be represented by its standard form:
> $$
> \begin{aligned}
> max &= 1.11111111_{2}\times 2^{31} \\
> &= 111111111_{2}\times 2^{23} \\
> &= 4286578688
> \end{aligned}
> $$

The most negative number, can then be found by negating this result.

---

> [!definition] Normalised mantissa
> A normalized mantissa has its binary point (the base-two equivalent of a decimal point) just to the left of the most significant non-zero digit. Because the binary number system has just two digits — zero and one — the **most significant digit of a normalized mantissa is always a one**.

Note that in IEEE-754, there is a hidden bit, meaning the value is computed: 
$$sign (1.mantissa) 2_{exponent}$$
However, in systems without a hidden bit, the value is computed:
$$
sign(mantissa)2_{exponent}
$$


---
# Floating Point Arithmetic

> [!important] Associativity is not preserved.
> 
> Using floating point numbers, `(a op b) op c` $\neq$ `a op (b op c)` regardless of the operation.

There are four rounding modes:
- round to nearest (default)
- round towards zero
- round towards positive infinity
- round towards negative infinity

All arithmetic must be performed with 3 extra bits at the end of the last fractional bit:
- the guard bit
- the round bit
- the sticky bit

---

# MIPS
![](media/Pasted%20image%2020240909230746.png)
![](media/midterms/Pasted%20image%2020241004065625.png)
## Basic operations

![[media/midterms/Midterm Notes 2024-10-01 02.58.37.excalidraw.svg]]

> [!note] `AND`
> 
> Use this operation for masking.
> - To ignore bits in certain positions, set `0` to those positions
> - To focus on certain positions, set `1` to those positions

> [!note] `OR`
> Force bits to `1`.

> [!note] `NOR`
> Implement `NOT` operation through `NOR r1, r1, $zero`

> [!note] `XOR`
> Implement `NOT` operation through `XOR r1, r1, r2` where `r2` is all 1s.


> [!question] How to load 32-bit constant into register?
> 
> 1. Use `lui` (load upper immediate) to set upper 16-bit:
> 	`lui $t0, 0xAAAA`
> 2. Use `ori` (or immediate) to set lower-order bits
> 	`ori $t0, $t0, 0xF0F0`

---

## Registers

0. `$zero`
1. `$at`
2. `$v0`
3. `$v1`
4. `$a0`
5. `$a1`
6. `$a2`
7. `$a3`
8. `$t0`
9. `$t1`
10. `$t2`
11. `$t3`
12. `$t4`
13. `$t5`
14. `$t6`
15. `$t7`
16. `$s0`
17. `$s1`
18. `$s2`
19. `$s3`
20. `$s4`
21. `$s5`
22. `$s6`
23. `$s7`
24. `$t8`
25. `$t9`
26. `$k0`
27. `$k1`
28. `$gp`
29. `$sp`
30. `$fp`
31. `$ra`

---
## `R-format`
![[media/MIPS Instruction Set 2024-09-26 15.23.37.excalidraw.svg]]

Opcode = `0x0` $(000000_{2})$
> [!note] Format: `mnemonic rd rs rt`

| Mnemonic | Operation                         | Funct | (binary)  |
| -------- | --------------------------------- | ----- | --------- |
| `add`    | `R[rd] = R[rs] + R[rt]`           | `20`  | `10 0000` |
| `addu`   | `R[rd] = R[rs] + R[rt]`           | `21`  | `10 0001` |
| `and`    | `R[rd] = R[rs] & R[rt]`           | `24`  | `10 0100` |
| `jr`     | `PC = R[rs]`                      | `08`  | `00 1000` |
| `nor`    | `R[rd] = ~(R[rs] OR R[rt])`       | `27`  | `10 0111` |
| `or`     | `R[rd] = R[rs] OR R[rt]`          | `25`  | `10 0101` |
| `slt`    | `R[rd] = (R[rs] < R[rt]) ? 1 : 0` | `2a`  | `10 1010` |
| `sltu`   | `R[rd] = (R[rs] < R[rt]) ? 1 : 0` | `2b`  | `10 1011` |
| `sll`    | `R[rd] = R[rt] << shamt`          | `0`   | `00 0000` |
| `slt`    | `R[rd] = R[rt] >> shamt`          | `2`   | `00 0010` |
| `sub`    | `R[rd] = R[rs] - R[rt]`           | `22`  | `10 0010` |
| `subu`   | `R[rd] = R[rs] - R[rt]`           | `23`  | `10 0011` |

---

## `I-format`
![[media/Drawing 2024-09-26 15.34.54.excalidraw.svg]]

| Mnemonic | Operation                                      | Opcode | (binary)  |
| -------- | ---------------------------------------------- | ------ | --------- |
| `addi`   | `R[rt] = R[rs] + SignExtImm`                   | `0x08` | `00 1000` |
| `addiu`  | `R[rt] = R[rs] + SignExtImm`                   | `0x09` | `00 1001` |
| `andi`   | `R[rt] = R[rs] & ZeroExtImm`                   | `0x0c` | `00 1100` |
| `beq`    | `if (R[rs] == R[rt]) PC = PC + 4 + BranchAddr` | `0x04` | `00 0100` |
| `bne`    | `if (R[rs] != R[rt]) PC = PC + 4 + BranchAddr` | `0x05` | `00 0101` |
| `lui`    | `R[rt] = {imm, 16'b0}`                         | `0x0f` | `00 1111` |
| `lw`     | `R[rt] = M[R[rs] + SignExtImm]`                | `0x23` | `10 0011` |
| `ori`    | `R[rt] =  R[rs] or ZeroExtImm`                 | `0x0d` | `00 1101` |
| `slti`   | `R[rt] = (R[rs] < SignExtImm) ? 1 : 0`         | `0x0a` | `00 1010` |
| `sltiu`  | `R[rt] = (R[rs] < SignExtImm) ? 1 : 0`         | `0x0b` | `00 1011` |
| `sw`     | `M[R[rs] + SignExtImm] = R[rt]`                | `0x2b` | `10 1011` |
| `sb`     | `M[R[rs] + SignExtImm](7:0) - R[rt](7:0)`      | `0x28` | `10 1000` |

---

## `J-format`
![[media/MIPS Instruction Set 2024-09-26 15.48.42.excalidraw.svg]]

| Mnemonic | Operation       | Opcode | (binary)  |
| -------- | --------------- | ------ | --------- |
| `j`      | `PC = JumpAddr` | `0x02` | `00 0010` |

> [!note] `JumpAddr`
> The operation follows a format `j imm` where `imm` is a $26-$bit number.
> 
> To calculate `JumpAddr` from the given `imm`:
> - take the first 4 bits from `PC + 4`
> `(PC+4)[31:28]`
> - the middle 26 bits from `imm`
> - the last 2 bits are set to `0` (since all addresses are 4 bits apart)
>   
> Similarly, to get `imm` from the `JumpAddr`
> - take the middle 26 bits

---

# Pseudo-instructions

## Null

`0x00000000`: `sll $0, $0, 0`

## Load and storing

```c
move r1, r2
// becomes

addu r1, $zero, r2
```

```c
li r1, imm
// becomes

ori r1, $zero, imm
```

```c
// load address into register
la r1, address\label
// becomes

lui $at, label[31:16]
ori r1, $at, label[15:0]
```

```c
// load address into register
lw r1, address\label
// becomes

lui $at, label[31:16]
ori r1, $at, label[15:0]
lw r1, 0(r1)
```
## Branch instructions

```c
// if r1 < r2, jump to label
blt r1, r2, label
// becomes

slt $at, r1, r2
bne $at, $zero, label // opp of bge
```


```c
// if r1 <= r2, jump to label
ble r1, r2, label
// becomes

slt $at, r2, r1
beq $at, $zero, label // opp of bgt
```


```c
// if r1 > r2, jump to label
bgt r1, r2, label
// becomes

slt $at, r2, r1
bne $at, $zero, label // opp of ble
```


```c
// if r1 >= r2, jump to label
bge r1, r2, label
// becomes

slt $at, r1, r2
beq $at, $zero, label // opp of blt
```



---


# Instruction Set Architecture

## Calculating minimum instructions and maximum instructions

To calculate minimum instructions, give the maximum instructions for the smallest opcode.

> [!example] Minimum instructions
> Type A: 4 bits
> Type B: 7 bits
> Type C: 8 bits

- Let A have almost all the instructions $2^{4} - 1=15$
- Let B have the most remaining $2^{3}-1= 7$
- Let C have the remaining $2^{1}= 2$

> [!note] 
> Effectively, it should look like $2^{a} - 1  + 2^{b-a} - 1 + 2^{c-b}$ and can be extrapolated for a larger set of instruction types.

Total: $15 + 7 + 2 = 24$

---

To calculate maximum instructions, give the maximum instructions for the biggest opcode (everything else gets 1)

> [!example] Maximum instructions
> Type A: 4 bits
> Type B: 7 bits
> Type C: 8 bits

- Let A have only 1 instruction $1$
- Let B have only 1 instruction $1$
- Let C have the remaining $((2^{4}-1)(2^{3}) - 1)(2) = 238$

> [!note] 
> Effectively, it should look like $((2^{a}-1)2^{b-a}) - 1)2^{c-b}$ and can be extrapolated for a larger set of instruction types.


Total: $238 + 1 + 1 = 240$

---
# Datapath

![[media/midterms/Midterm Notes 2024-10-01 01.36.16.excalidraw.svg]]

![[media/midterms/Midterm Notes 2024-10-01 02.15.32.excalidraw.svg]]

![[media/midterms/Midterm Notes 2024-10-01 02.22.52.excalidraw.svg]]

![[media/midterms/Midterm Notes 2024-10-01 02.27.18.excalidraw.svg]]