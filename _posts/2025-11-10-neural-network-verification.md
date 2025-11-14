---
title: 'Neural Network & Correctness - UCLA MathML Group'
date: 2025-11-10
permalink: /posts/2025/11/neural-network-verification/
tags:
  - math
  - computer science
  - machine learning
  - artificial intelligence
use_math: true
---

Below are a couple of notes I have made while reading `Introduction to Neural Network Verification' by Aws Albarghouthi, University of Wisconsin-Madison. This is a text on correctness and verification in deep learning (in essence, AI safety). I was assigned this reading by my advisor, Guido Montúfar as part of our project in 'Quantification & Verification of AI Systems' in the MathML Group. 

These notes are rough and in fact may contain errors (grammatical, conceptual or otherwise). These errors should not be associated with the author of the text, rather, they should be associated with me. With that, I will continue to update these notes as I read through the text. 

This note corresponds to Part I - Neural Networks & Correctness. Part II and Part III will be worked on separately.

## Chapter 1: A New Beginning

### 1.1: Alan Turing and the Factorial Program

How do we show that programs in fact do what we intend them to do? In Alan Turing's paper titled "Checking a Large Routine", he explores the probability of programs and provides a proof of correctness of a program implementing the factorial function. 

Turing proved that his factorial program always terminates and alwasy produces a factorial of its input, no matter the input. In general, what Turing showed was that his program works exactly as the mathematical definition of a factorial. 

### 1.2: Beginning of Deep Learning Era

Deep Learning is used for performing extremely complex tasks that otherwise can't be performed mathematically (through elementary functions or there doesn't exist a well-defined mathematical framework to answer some questions). 

Modern Neural Networks are called Deep Neural Networks and the approach to training these neural networks is called "Deep Learning". 

Deep Learning is often applied in Computer Vision and Natural Language Processing tasks however, current research suggests that more and more fields are being explored to solve problems via deep learning methodologies. 

**Deep neural networks can be fragile and produce unexpected results**. As deep learning becomes used more and more in sensitive settings, it's imperative that we verify these systems and provide formal guarantees to their behavior through program verification. 

### 1.3: What do We Expect of Neural Networks in Terms of Verification?

Turing was concerned that we may be programming functions that perform mathematical operations that don't match their mathematical definitions. His proof showed that his implementation of the factorial was indeed equivalent to the mathematical definition by stiching lemmas. 

**Functional correctness** is a notion of program correctness in the sense that the program is a faithful implementation of some well-defined mathematical function. Functional correctness is important because it tells us that our program behaves exactly as how we expect it to, following from its equivalent mathematical definition. 

But what about deep learning? Is functional correctness relevant here? Well, since deep learning tends to perform tasks that are often not captured mathematically, it's safe to say functional correctness is moot because we cannot properly define a mathematical function to verify our program against. 

However, we can still use the verification framework to characterize some of its desirable and undesirable properties.

- **Robustness**: Robustness means that a small perturbation \\(\varepsilon\\) to inputs should not result in changes to the output of the neural network. A lack of robustness can be a safety/security risk.
- **Safety**: A broad class of correctness properties stipulating that a program should not get to a bad state. What does bad mean here? That depends on the task at hand. 
- **Consistency**: Neural networks learn about our world via data, such as images. As such, they may sometimes miss basic axioms that we as humans are in fact aware of through experience. What are these axioms? Physical laws or assumptions about realistic scenarios.

Next Steps: Build a language for formally specifying correctness properties of neural networks, paving the way for verification algorithms to prove these properties.

## Chapter 2: Neural Networks as Graphs

A key routine in mathematics is to define an object an study its properties. It is therefore surprising that there doesn't exist yet a rigorous definition of what deep learning is and what it is not. The author chooses to define neural networks generically as *graphs* of operations over the reals.

The *shapes* of said graphs (called the *architecture*) are not arbitrary and in fact, are chosen depending on the task. As such. neural networks for image recognition look quite different than networks designed for natural language processing tasks. 

### 2.1: The Neural Building Blocks

**Definition.** (Neural Network).\
A *Neural Network* is a graph where each node performs an operation.

Overall, the graph represents a function \\(f:\mathbb{R}^n \longrightarrow \mathbb{R}^n\\). A simple neural network contains an *input node* that passes an input \(x \in \mathbb{R}\) to a *node* \\(v\\) that performs some operation on \\(x\\) and spits out a value that goes to the *output node*. 

Suppose the node $v$ is defined to perform the operation \\(f_v\left(x\right) = 5x + 3\\) where \\(x\\) comes from the input node. Then, output node performs the operation \\(\max \left(0, x\right)\\). Combining, our graph encodes the function \\(f:\mathbb{R} \longrightarrow \mathbb{R}\\) defined as follows,

\\[f\left(x\right) = \left(f_y \circ f_v\right)\left(x\right) = \max\left(0, 5x + 3\right)\\]

We have a name for \\(f_y\\): it's called an *activation* function. The name speaks for itself: it turns on or off depending on what is fed to it. The function \\(\max\left(0, x\right)\\) is an activation function called the *rectified linear unit* (ReLU). Suppose \\(x = -5\\), then \\(\max\left(0, -5\right) = 0\\). However, if \\(x = 7\\), then \\(\max\left(0, 7\right) = 7\\). 

- Activations functions are used to add non-linearity into a neural network.

But what makes activation functions so special? Empirically, activation functions such as the ReLU seem to work quite well in the context of neural networks. 

- One can construct a neural network comprised of ReLUs or sigmoid activation functions and affine functions to approximate any continuous function. This is known as the *universal approximation theorem*.
- Interestingly, polynomial activation functions are not very desirable for deep learning.

### 2.2: Layers and Layers and Layers

Neural networks are usually *layered*. A multilayer perceptron denotes a function \\(f:\mathbb{R}^3 \longrightarrow \mathbb{R}^3\\). It has 3 input nodes, 3 hidden nodes (in 1 hidden layer) and 3 output nodes. 

A multilayer perceptron with two hidden layers preserves 3 input and 3 output nodes but instead has 6 hidden nodes (3 per hidden leayer). 

Layers in a multilayer perceptron are called *fully connected* layers because each node receives all outpits from the preceding layer. 

Neural Networks are typically used as *classifiers*. What does this imply? When we perform classification related tasks, the output layer of the multilayer perception represents the probability associated to each class. We can ensure that the probabilities at the output layers are normalized by using the *softmax* function.

### 2.3: Convolutional Layers

A hallmark of computer vision is the convolutional neural network. The rough intuition is that if you are looking at an image, you want to scan it looking for patterns. It defines an operation, one might caller it either a *filter* or a *kernel*, which is applied to every region of pixels in an image or every sequence of words in a sentence. 

Typically, a convolutional neural network will apply a bunch of filters to an input and aggregate the informaton from each filter (this is called pooling). There are two widely used notions of pooling: the max-pool and the avg-pool. One can easily understand what each pool does; the max-pool takes the most dominant element from a patch after a filter is applied while the avg-pool takes the average of the entire patch. 

### 2.4: Where are the Loops?

The neural networks thus far explore are simply a composition of multiple mathematical functions. However, we can also create loops within networks. 

In practice, neural network graphs are really just directed acyclic graphs (DAG). This makes training the neural network possible using the *backpropagation* algorithm. *Recurrent neural networks* (RNN) is the canonical class of such networks which are often used for sequence data such as text. 

### 2.5: Structure and Semantics of Neural Networks

We are now ready to formally define neural networks as directed acylic graphs. We will also discuss some of their properties. 

**Definition.** (Neural Network). *Revised*\
A *neural network* is a directed acylic graph \\(G = \left(V, E\right\)\\) where 
- \\(V\\) is a finite set of nodes
- \\(E\subseteq V \times V\\) is a set of edges
- \\ \varnothing \neq V^{\text{in}} \subset V\\) is a non-empty set of input nodes
- \\ \varnothing \neq V^{\text{o}} \subset V\\) is a non-empty set of output nodes
- each non-input node \\(v\\) is associated with a function \\(f_v:\mathbb{R}^{n_v}\longrightarrow\mathbb{R}\\) where \\(n_v\\) is the number of edges whose target is node \\(v\\).

There exists more graph theory in this section that I will not write in the markdown. 

So far, we have assumed that a node \\(v\\) can implement any function \\(f_v\\) it wants over the reals. In practice, to enable efficient training of neural networks, these functions ideally must be *differentiable* or differentiable *almost everywhere*. 

- The sigmoid function is differentiable.
- The ReLU activation function is differentiable everywhere except at \\(x = 0\\) where we have undefined gradient.

Neural networks are an instance of a general class of programs called *differentiable programs*. By their name, differential programs have derivatives that we can compute which as discussed enables efficient neural network training. However, there has been an interest in what does it actually mean for a program to be differentiable. 

## Chapter 3: Correctness Properties

I will update this chapter once I have finished reading it!

Last Updated: November 13, 2025


