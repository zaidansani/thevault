---
{"publish":true,"title":"Classical Machine Learning","tags":["CS2109S","artificial_intelligence","machine_learning"],"cssclasses":""}
---


> [!abstract]
> - Decision trees
> - Linear/logistic regression
> - Kernels and Support Vector Machines (SVM)

> [!tldr] Textbook, Chapter 19

# Problem Space

Classical ML is motivated by problems that are **intractable** to solve generally, meaning that there is no efficient solution for all cases. 

> [!definition] Intractable
> Roughly speaking, a problem is called intractable if the time required to solve instances of the problem grows exponentially with the size of the instances. (from textbook)

> [!example] Go, protein folding

Some problems are also difficult as formulating the rules in a way that a computer can understand and process may be challenging. 

> [!example] Image recognition

Thus, the problems focused are:
- problems where function is difficult to specify
- solutions are intractable to compute in general
- typically episodic and sequential

# Paradigm

Rather than solving the problem explicitly through a search or applying rules, classical machine learning focuses on **learning a function** which could **identify patterns in the data** and makes decisions or provides solutions based on what it has learned.

# Machine Learning

> [!definition] Machine learning (ML)
> Ability to learn without being explictly programmed

Types of machine learning:
- **Supervised learning**: learns from **labeled** data (input to output), to learn a mapping from inputs to outputs
- **Unsupervised learning**: learns from **unlabeled** data (input), and aims to find patterns or structure. 
- Semi-supervised learning: both **labeled** and **unlabeled** data
- Reinforcement learning: learns to make decisions by **interacting with an environment**, receiving rewards or penalties