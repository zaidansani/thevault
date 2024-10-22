---
title: Quine-McCluskey
tags: [computer_architecture, CS2100, digital_logic]
---
> [!note] This topic is optional.


**Phase 1** 

Step 1: List out all minterms in groups with same number of 1s in their binary codes
Step 2: Combine codes that differ by 1 bit into bigger group and write combined code in the next column
Step 3: Repeat step 2

**Phase 2** Identify EPIs

Step 1: Draw PI chart and spot EPIs - EPIs are columns containing a single tick
Step 2: Draw reduced PI chart if minterms are not covered.
- Find out minterms covered by EPIs
- Remove EPIs and minterms covered from the chart
- Find minimum number of remaining PIs to cover remaining minterms

