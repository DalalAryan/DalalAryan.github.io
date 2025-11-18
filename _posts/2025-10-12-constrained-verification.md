---
title: 'Constrained-Based Verification - UCLA MathML Group'
date: 2025-11-12
permalink: /posts/2025/11/constrained-verification/
tags:
  - math
  - computer science
  - machine learning
  - artificial intelligence
use_math: true
---

Below are a couple of notes I have made while reading `Introduction to Neural Network Verification' by Aws Albarghouthi, University of Wisconsin-Madison. This is a text on correctness and verification in deep learning (in essence, AI safety). I was assigned this reading by my advisor, Guido Montúfar as part of our project in 'Quantification & Verification of AI Systems' in the MathML Group. 

These notes are rough and in fact may contain errors (grammatical, conceptual or otherwise). These errors should not be associated with the author of the text, rather, they should be associated with me. With that, I will continue to update these notes as I read through the text. 

This note corresponds to Part II - Constrained-Based Verification. Part I has been worked on and Part III will be worked on separately.

## Chapter 4: Logics and Satisfiability

We will now explore constrained-based techniques for verification. We want to take a correctness property and encode it as a set of constraints, mathematically speaking. By solving the constraints, we can decide whether the correctness property holds or not. 

The constraints we will use are formulas in *first-order logic* (FOL). 

### 4.1: Propositional Logic

**Definition.** (Formula)\
A formula \\(F\\) in propositional logic is over Boolean variables (traditionally given the names \\(p, q, r, \dots\\) and defined using the following grammar:
\\[F:= \verb|true|\\]
\\[\verb|false|\\]
\\[\text{var}\\]
\\[\mid ~ F \land V\\]
\\[\mid ~ F \wedge V\\]
\\[\mid ~ \neg F\\]

where 'var' corresponds to variable, \\(\land\\) to conjunction (and), \\(\wedge\\) to disjunction (or) and \\(\neg\\) to negation (not) respectively. 

A formula in propositional logic defined a circuit with Boolean variables, AND gates (\\(\land)\\), OR gates (\\(\wedge)\\), and NOT gates (\\(\neg)\\). 

- Negation has the highest operator precedence
- Conjunction has an operator precedence after negation
- Disjunction has an operator precedence after conjunction

We define all programs as circuits because programs will be performed on computers through bit-sized information and there exists a finite amount of memory, and therefore, a finite number of variables. 

**Example.** As an example, consider the below formula:
\\[F \triangleq (p \land q) \wedge \neg r\\]

- \\(\triangleq\\) denotes that we're syntactically defining \\(F\\) to be the formula on the right of \\(\triangleq\\) as opposed to saying that the two formulas are semantically equivalent.
- The set of free variables in \\(F\\) is \\(fv(F) = \left\{p, q, r\right\}\\).

I will complete the next parts soon.

### 4.2: Arithmetic Theories

## Chapter 5: Encodings of Neural Networks

### 5.1: Encoding Nodes
### 5.2: Encoding a Neural Network
### 5.3: Handling Non-linear Activations
### 5.4: Encoding Correctness Properties

## Chapter 6: DPLL Modulo Theories

### 6.1: Conjunctive Normal Form (CNF)
### 6.2: The DPLL Algorithm
### 6.3: DPLL Modulo Theories
### 6.4: Tseitin's Transformation

## Chapter 7: Neural Theory Solvers

### 7.1: Theory Solving and Normal Forms
### 7.2: The Simplex Algorithm
### 7.3: The ReLUplex Algorithm

Last Updated: November 18, 2025

