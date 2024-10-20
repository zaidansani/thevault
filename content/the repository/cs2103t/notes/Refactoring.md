---
tags:
  - software_engineering
  - CS2103/T
title: Refactoring
---
> [!definition] Refactoring
> The process of improving a program's internal structure in small steps without modifying its external behaviour.

Some benefits of refactoring are:
- hidden bugs become easier to spot
- improve performance

# Types of Refactoring

> [!note] Consolidating conditional expressions
> If conditional expressions return the same value, they can be condensed.
> 
> > [!example]
> > ```
> > if (isNotOldEnough()) return 1;
> > if (isNotTallEnough()) return 1;
> > if (isPregnant()) return 1;
> > ```
> > can be consolidated into 
> > ```
> > bool isAllowedToRideRollercoaster() {
> > 	return isNotOldEnough() || isNotTallEnough() || isPregnant();
> > }
> > return isAllowedToRideRollercoaster ? 1 : 0;
> > ```

> [!note] Decomposing conditionals
> Conditionals can be decomposed into their own specific functions for easier reading.
> 
> > [!example]
> > ```
> > if (!date.isBefore(month.January) && !date.isAfter(month.February) ) {
> > 	fee = quantity * item.offPeakPrice;
> > } else {
> > 	fee = quantity * item.peakPrice;
> > }
> > ```
> > can be decomposed into
 >> ```
 >> isDuringOffPeak(date) {
 >> 	return !date.isBefore(month.January) && !date.isAfter(month.February);
 >> }
 >> calculateOffPeakPrice(quantity, item) {
 >> 	return quantity * item.offPeakPrice;
 >> }
 >> calculatePeakPrice(quantity, item) {
 >> 	return quantity * item.peakPrice;
 >> }
 >> 
 >> if (isDuringOffPeak(date)) {
 >> 	return calculateOffPeakPrice(quantity, item)
 >> } else {
 >> 	return calculatePeakPrice(quantity, item);
 >> }
 >> 
> > ```

> [!note] Inline method
> Instead of using a separate method, use the implementation inside the helper method directly.
> 
> > [!example]
> > ```
> > getRating(driver) {
> > 	return moreThanFiveLateDeliveries(driver) ? 2 : 1;
> > }
> > moreThanFiveLateDeliveries(driver) {
> > 	return driver.numberOfLateDeliveries > 5;
> > }
> > ```
> > can be changed to
> > ```
> > getRating(driver) {
> > 	return driver.numberOfLateDeliveries > 5 ? 2 : 1;
> > }
> > ```

> [!note] Remove double negative
> Change double negatives to a single positive conditional.
> 
> > [!example]
> > `!(item.isNotFound)` can be refactored to `item.isFound`

> [!note] Replace magic literal
> Magic literals can be replaced with named constants.
> 
> > [!example]
> > `3.14 * radius * radius` can be replaced with `const PI = 3.14; PI * radius * radius`

> [!note] Replace nested conditional with guard clauses
> Some nested conditionals can be replaced with guard clauses, removing the nesting.
> 
> > [!example]
> > ```
> > getInsurancePayout() {
> > 	if (isDead) {
> > 		return deadAmount;
> > 	} else {
> > 		if (isMajorInjury) {
> > 			return majorInjuryAmount;
> > 		} else {
> > 			if (isMinorInjury) {
> > 				return minorInjuryAmount
> > 			} else {
> > 				return normalAmount
> > 			}
> > 		}
> > 	} 
> > }
> > ```
> > can be replaced with
> > ```
> > getInsurancePayout() {
> > 	if (isDead) return deadAmount;
> > 	if (isMajorInjury) return majorInjuryAmount;
> > 	if (isMinorInjury) return minorInjuryAmountl
> > 	return normalAmount;
> > }
> > ```

> [!note] Replace parameter with explicit methods
> Replace the use of a parameter and instead use specific functions for each conditional case.
> 
> > [!example]
> > ```
> > setDimension(name, value) {
> > 	if (name === "height") {
> > 		this.height = value;
> > 	} 
> > 	if (name === "width") {
> > 		this.width = value;
> > 	}
> > }
> > ```
> > can be refactored to:
> > ```
> > setHeight(value) this.height = value;
> > setWidth(value) this.width = value;
> > ```

> [!note] Reverse conditional
> Reorder a conditional, to remove negatives from the conditional
> 
> > [!example]
> > ```
> > if (!order.exists) {
> > 	order.create(items);
> > } else {
> > 	order.update(items);
> > }
> > ```
> > can be refactored into
> > ```
> > if (order.exists) {
> > 	order.update(items);
> > } else {
> > 	order.create(items);
> > }
> > ```

> [!note] Split loops
> Split loops to increase readability
> 
> > [!example]
> > ```
> > totalSalary = 0;
> > averageAge = 0;
> > 
> > for (p in people) {
> > 	averageAge += p.age;
> > 	totalSalary += p.salary;
> > }
> > averageAge = averageAge / people.length;
> > ```
> > can be refactored to
> > ```
> > totalSalary = 0;
> > 
> > for (p in People) {
> > 	totalSalary += p.salary;
> > }
> > 
> > averageAge = 0;
> > 
> > for (p in People) {
> > 	averageAge += p.age;
> > }
> > averageAge = averageAge  / people.length;
> > ```

> [!note] Split temp
> Split temporary variables, if they are used to mean different things;
> 
> > [!example] 
> > ```
> > temp = 2 * height * width;
> > setPerimeter(temp);
> > temp = height * width;
> > setArea(temp);
> > ```
> > can be refactored to
> > ```
> > perimeter = 2 * height * width;
> > setPerimeter(perimeter);
> > area = height * width;
> > setArea(area);
> > ```

## When to refactor

> [!definition] Code smell
> A surface indication that usually corresponds to a deeper problem in the system

A non exhaustive list of code smells:
- Data class
	- A class with all data, and no behaviour
- Long method
	- Method contains too many LoC (>30)
- Large class
	- Class is too large
- Primitive obssession
	- Overuse of primitives instead of objects
- Temporary field
	- Some variables are mostly empty
- Shotgun surgery
	- Making modifications require big changes to many classes

Periodic refactoring can be used to pay off technical debt accumulated in a codebase.

> [!important] Too much refactoring is when benefits no longer justify the cost.