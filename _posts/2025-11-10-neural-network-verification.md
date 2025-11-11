---
title: 'Neural Network Verification - UCLA MathML Group'
date: 2025-11-10
permalink: /posts/2025/11/neural-network-verification/
tags:
  - math
  - computer science
  - machine learning
  - artificial intelligence
---

Below are a couple of notes I have made while reading `Introduction to Neural Network Verification' by Aws Albarghouthi, University of Wisconsin-Madison. This is a text on correctness and verification in deep learning (in essence, AI safety). I was assigned this reading by my advisor, Guido Montúfar as part of our project in 'Quantification & Verification of AI Systems' in the MathML Group. 

These notes are rough and in fact may contain errors (grammatical, conceptual or otherwise). These errors should not be associated with the author of the text, rather, they should be associated with me. With that, I will continue to update these notes as I read through the text. 

## Chapter 1: A New Beginning

### 1.1: Alan Turing and the Factorial Program

How do we show that programs in fact do what we intend them to do? In Alan Turing's paper titled ``Checking a Large Routine'', he explores the probability of programs and provides a proof of correctness of a program implementing the factorial function. 

Turing proved that his factorial program always terminates and alwasy produces a factorial of its input, no matter the input. In general, what Turing showed was that his program works exactly as the mathematical definition of a factorial. 

### 1.2: Beginning of Deep Learning Era

Deep Learning is used for performing extremely complex tasks that otherwise can't be performed mathematically (through elementary functions or there doesn't exist a well-defined mathematical framework to answer some questions). 

Modern Neural Networks are called Deep Neural Networks and the approach to training these neural networks is called "Deep Learning". 

Deep Learning is often applied in Computer Vision and Natural Language Processing tasks however, current research suggests that more and more fields are being explored to solve problems via deep learning methodologies. 

**Deep neural networks can be fragile and produce unexpected results**. As deep learning becomes used more and more in sensitive settings, it's imperative that we verify these systems and provide formal guarantees to their behavior through program verification. 

### 1.3: What do We Expect of Neural Networks in Terms of Verification?

Turing was concerned that we may programming functions that perform mathematicals that don't match their mathematical definitions. His proof showed that his implementation of the factorial was indeed equivalent to the mathematical definition by stiching lemmas. 

**Functional correctness* is a notion of program correctness in the sense that the program is a faithful implementation of some well-defined mathematical function. Functional correctness is important because it tells us that our program behaves exactly as how we expect it to, following from its equivalent mathematical definition. 

But what about deep learning? Is functional correctness relevant here? Well, since deep learning technologies work to perform tasks that are often not captured mathematicaly, it's safe to say functional correctness is somewhat useless here because we cannot mathematically define tasks that are performed by deep learning.

However, we can still use the verification framework to characterize some of its desirable and undesirable properties.

- **Robustness**: Robustness means that a small perturbation $\varepsilon$ to inputs should not result in changes to the output of the neural network. A lack of robustness can be a safety/security risk.
- **Safety**: A broad class of correctness properties stipulating that a program should not get to a bad state. What does bad mean here? That depends on the task at hand. 
- **Consistency**: Neural networks learn about our world via data, such as images. As such, they may sometimes miss basic axioms that we as humans are in fact aware of through experience. What are these axioms? Physical laws or assumptions about realistic scenarios.

Next Steps: Build a language for formally specifying correctness properties of neural networks, paving the way for verification algorithms to prove these properties.

## Chapter 2: Neural Networks as Graphs

I will update this soon once I have finished the chapter!


