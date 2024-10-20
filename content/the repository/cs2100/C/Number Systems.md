---
tags:
  - c_programming
  - CS2100
title: Number Systems
---
# Data Representation

Data is internally represented as a sequence of bits - 0 or 1.
- Byte: 8 bits
- Word: Multiple of bytes (differs per architecture)

> [!tip] Calculation of values
> 
> $n$ bits can represent up to $2^n$ values.
> To represent $m$ values, $\lceil{log_2{m}}\rceil$

# Number Systems

Weighted-positional number system with a **base/radix** $n$ where each position has a weight of power of $n$.

- Decimal (base 10)
	- Weights in power of 10
- Binary (base 2)
- Octal (base 8)
- Hexadecimal (base 16)
	- Extra digits: A, B, C, D, E, F to refer to 10, 11, 12, 13, 14, 15 respectively.

> [!info] Notations
> 
> - Prefix 0 for octal
> - Prefix 0x for hexadecimal in C and QTSpim
> - Prefix 8'b for binary in Verilog
> - Prefix 8'h for hexadecimal in Verilog
> - Prefix 8'd for decimal in Verilog

# ASCII Code

ASCII and Unicode are used to represent characters.

Note that in C, integers and characters are somewhat interchangable:
```C
printf("%c", 65) // A
printf("%d", A) // 65
```

> [!note] Format specifiers
> 
> When using printf, using a format specifier `%[flags][width][.precision][length]specifier` allows for a format to be specified for a variable.
> 
> For example, `printf("%s", str)` specifies `str` to be printed as a string. Using multiple format specifiers could also work: `printf("%d %x %o", 100, 100, 100)` prints the following parameters in the specified formats of decimal, hexadecimal and octal, in that order.

# Negative Numbers

Unsigned numbers do not allow for non-negative values, but signed numbers do.

The 3 common representations of signed binary numbers are as following -
**Sign-and Magnitude**

| sign bit | magnitude bit |     |     |     |     |     |     |
| -------- | ------------- | --- | --- | --- | --- | --- | --- |
The example given above has a 1-bit sign, and a 7-bit magnitude format. 

With such an implementation, the range for a $n-$bit sign-and magnitude representation is $-(2^{n-1} - 1)$ to $2^{n-1} - 1$.

For operations: to negate a number, just invert the sign bit.

## 1s complement

Given a number $x$ expressable as an $n-$bit binary number, the negated value is obtained using $-x = 2^{n} - x- 1$.

With such an implementation, the range for a $n-$bit 1s complement representation is $-(2^{n-1} - 1)$ to $2^{n-1} - 1$. The ==most significant bit== represents the sign similarly - 0 for positive, 1 for negative.

For operations: to negate a number, invert all the bits. 

> [!tip] 
> 
> Use the formula to get the negated value and convert it into binary for fast calculation.
> 
> >[!example] In 8-bit 1s complement
> >$-100 = 2^{8} - 100 - 1 = 155 = 1001 1011$

## 2s complement

Given a number $x$ expressable as an $n-$bit binary number, the negated value is obtained using $-x = 2^n - x$.

With such an implementation, the range for a $n-$bit 1s complement representation is $-(2^{n-1})$ to $2^{n-1} - 1$. The ==most significant bit== represents the sign similarly - 0 for positive, 1 for negative.

For operations: to negate a number, invert all the bits, and add 1.

> [!tip] 
> 
> Use the formula to get the negated value and convert it into binary for fast calculation.
> 
> >[!example] In 8-bit 2s complement
> >$-100 = 2^{8} - 100 = 156 = 1001 1100$
## Radix complement

The 1s and 2s complement can be abstracted into any base/radix.

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

## Excess representation

Allows range of values to be distributed evenly between positive and negative values by a simple translation.

> [!example]
> For a 3-bit excess representation, the first entry $000$ can be represented as the lowest number $-4$ and the last entry $111$ represented as the highest number $3$, which is a translation of $-4$. This specific representation is called **Excess-4 representation on 3-bit numbers**

# Algorithms

> [!info] Overflow
> 
> Since signed numbers are of a fixed range, if the result of a computation goes beyond this range, an overflow occurs. This can be detected easily by ensuring that
> - +ve + +ve MUST be +ve
> - -ve + -ve MUST be -ve

## 2s complement

**Addition of integers $A + B$**
1. Perform binary addition on two numbers
2. Ignore carry out
3. Check for overflow - overflow occurs if 
	- carry in and carry out of MSB are different OR
	- result is opposite sign of $A$ and $B$

**Subtraction of integers $A-B$**
1. Take 2s complement of $B$
2. Add 2s complement of $B$ to $A$.

## 1s complement

**Addition of integers $A + B$**
1. Perform binary addition on two numbers
2. If carry out occurs, add $1$ to result.
3. Check for overflow - overflow occurs if 
	- result is opposite sign of $A$ and $B$

**Subtraction of integers $A-B$**
1. Take 1s complement of $B$
2. Add 1s complement of $B$ to $A$.

# Real Numbers

**Fixed-point representation** allocates a specific **fixed** number of bits for the whole number and fractional parts representatively. For example:

| integer |     |     |     |     |     | fraction |     |
| ------- | --- | --- | --- | --- | --- | -------- | --- |
**Floating-point representation** allow us to represent very large or very small numbers based on range.

**IEEE 754 Floating-Point** 
Contains 3 components:
- sign
- exponent
- mantissa (fraction)

The base/radix is assumed to be $2$.
There are two formats:
- ==Single precision (32-bit)==
	- 1-bit sign
	- 8-bit exponent (excess-127)
	- 23-bit mantissa
- Double precision (64-bit)
	- 1-bit sign
	- 11-bit exponent (excess-1023)
	- 52-bit mantissa

To represent a number in single-precision floating point format,
1. Convert it to binary
2. Reduce it to standard form ($x.y \times 2^z$)
3. Retrieve
	1. The sign (based on the negative or positive sign)
	2. The exponent (in excess-127 representation - $(z + 127)$)
	3. The mantissa (values after the binary point)

> [!example] $-6.5_{10}$ in IEEE 754 Floating-Point Rep
> 
>  First, converting this to binary, we get $-110.1_2$.
>  
>  Then, reducing it to standard form, we get $-1.101_2 \times 2^2$.
>  
>  Next, the sign retrieved is $1$, since the sign is negative. The exponent is $2$, thus the excess-127 representation is $129$, which is represented as $1000001$. Lastly, we retrieve the mantissa by padding zeros to the back of $101$, which results in the value $101000000000000000000000$. 
>  
>  Putting it all together, we get the hexadecimal representation $C0D00000_{16}$

# Conversions

## Decimal to Binary (fractional)

Steps: 
1. Convert decimal integral to binary
	1. Divide decimal number by 2 and store remainders in array
	2. Divide quotient by 2
	3. Repeat step 2 until quotient = 0
	4. Reverse all remainders
2. Convert decimal fractional to binary
	1. Multiply fractional decimal number by 2
	2. Integral part of resultant decimal number will be first digit of fraction binary number
	3. Repeat
3. Combine parts (concatenate together)

> [!example] Converting decimal to binary
> 
> $n = 4.47, k = 3$
> 
> Step 1: Conversion of $4$ to binary (Integral)
> 1. $4/2$ : Remainder = 0 : Quotient = 2
> 2. $2/2$ : Remainder = 0 : Quotient = 1
> 3. $1/2$ : Remainder = 1 : Quotient = 0
>
> So equivalent binary of integral part of decimal is $100$.
> 
> Step 2: Conversion of $.47$ to binary (Fractional)
> 1. $0.47 \times 2 = 0.94$, Integral part: $0$
> 2. $0.94 \times 2 = 1.88$, Integral part: $1$
> 3. $0.88 \times 2 = 1.76$, Integral part: $1$
> 
> So equivalent binary of fractional part of decimal is $.011$
>
> Step 3: Combine the result of step 1 and 2.
> 
> Final answer can be written as:
> $100 + .011 = 100.011$


## Binary to Decimal (fractional)

Steps:
1. Convert binary integral to decimal
	1.  Multiply each digit separately from left side of radix point by powers of two (from 0)
	2.  Add everything together
2. Convert binary fractional to decimal
	1. Divide every digit separately from right side by powers of two (from 1)
	2. Add everything together
3. Add number together

> [!example] Binary fractional back to decimal
> 
> n = $110.101$
> 
> Step 1: Conversion of 110 to decimal **(binary integral)**
> => $1102 = (1 \times 2^2) + (1 \times 2^1) + (0 \times 2^0)$
> => $1102 = 4 + 2 + 0$
> => $1102 = 6$
> So equivalent decimal of binary integral is $6$.
> 
> Step 2: Conversion of .101 to decimal **(binary fractional)**
> => $0.1012 = (1 \times 2^{-1}) + (0 \times 2^{-2}) + (1 \times 2^{-3})$
> => $0.1012 = 0.5 + 0.0.125$
> => $0.1012 = 0.625$
> So equivalent decimal of binary fractional is $0.625$
>
> Step 3: Add result of step 1 and 2.
> => $6 + 0.625 = 6.625$

