---
tags:
  - CS2109S
  - artificial_intelligence
  - machine_learning
  - supervised_learning
  - decision_tree
---
A decision tree represents a function that
- takes in an input vector of attribute values
- returns a single output value

```python
def DTL(examples, attributes, default):
	if examples is empty:
		return default
	if examples have same classification:
		return classification
	if attributes is empty:
		return mode(examples)
	best = choose_attribute(attributes, examples)
	tree = a new decision tree with root best
	for v in best:
		examples = {rows in examples with best = v}
		st = DTL(examples, attributes - best, {best})
		add branch to tree with label v and subtree st
		
```
# Expressiveness

> [!definition] Expressiveness
> Roughly speaking, a more expressive representation can capture, at least as concisely, everything a less expressive one can capture, plus some more. _(from textbook)_

 A decision trees can express any function of the input attributes. Effectively, this means that the hypothesis class contains all the possible hypothesis that can be gathered from the input attributes.

> [!note] 
> There is a consistent decision tree for any consistent training set, but probably won't generalise to new examples.

The size of the hypothesis class can then be generalised to, given $n$ Boolean attributes
$$2^{2^{n}}$$
as the number of boolean functions refers to the number of distinct truth tables with $2^{n}$ rows.

# Finding a Decision Tree

> [!abstract] Recursively select the most informative attribute

## Informativeness

**Entropy** is a measure of randomness defined as
$$
I(P(v_{1}), ..., P(v_{k})) = -\sum\limits^{k}_{i=1}P(v_{i})log_{2}P(v_{i})
$$ (simply, if of one value):
$$
I(v) = Vlog_{2}V
$$
Thus, we want to keep the most Information Gain $IG$, where
$$
IG(A) = I\left(\frac{p}{p+n}, \frac{n}{p+n}\right)- remainder(A)
$$
where the remainder refers to the entropy of the dataset without a specific feature. 

> [!note] Information gain effectively refers to how much information is gained with a feature by checking the amount of information lost when removing the feature from the set. Mathematically, it is understood as the expected reduction in entropy.

To find the **information gain** of an attribute:
- find the entropy of the root node
$$
I(root)= I\left(\frac{p}{p+n}, \frac{n}{p+n}\right)= \frac{p}{p+n}log_{2}\left(\frac{p+n}{p}\right) +\frac{n}{p+n}log_{2}(\frac{p+n}{n})
$$
- find $remainder(A)$
$$
remainder(A) = \sum\limits^{d}_{k=1} \frac{p_{k}+n_{k}}{{p+n}} I(\frac{p_{k}}{n_{k}+p_{k}})
$$
- take the difference
$$
I(root) - remainder(A)
$$
# Pruning

Pruning is the process of reducing the size of a decision by removing parts of the tree.

There are two types of pruning:
- **min-sample leaf**: set a minimum threshold for number of samples required to be in a leaf node
- **max-depth**: set a maximum threshold for depth of decision tree

> [!pros] Pruning results in a smaller tree, which may have higher accuracy

![dt_pruning](media/dt_pruning.svg)
# Data Preprocessing

For continuous values to be used in decision trees, they need to be binned (partitioned into a discrete set of intervals).

Similarly, if there are missing values, approaches could be to
- assign the most common value of attribute
- assign most common value of attribute with same output
- assign probability
- drop attribute
- drop rows