---
title: MIPS Instruction Set
tags:
  - computer_architecture
  - MIPS
  - CS2100
---

# Registers


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
10. `$t2
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
26. `$k0
27. `$k1`
28. `$gp`
29. `$sp`
30. `$fp
31. `$ra`

# `R-format`

Opcode = `0x0` $(000000_{2})$

![[media/MIPS Instruction Set 2024-09-26 15.23.37.excalidraw.svg]]

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

# `I-format`

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

# `J-format`

![[media/MIPS Instruction Set 2024-09-26 15.48.42.excalidraw.svg]]

| Mnemonic | Operation       | Opcode | (binary)  |
| -------- | --------------- | ------ | --------- |
| `j`      | `PC = JumpAddr` | `0x02` | `00 0010` |
