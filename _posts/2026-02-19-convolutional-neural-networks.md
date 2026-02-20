---
title: 'Gentle Introduction to Convolutional Neural Networks'
date: 2026-02-19
permalink: /posts/2026/02/cnn-introduction/
tags:
  - math
  - computer science
  - machine learning
  - artificial intelligence
  - neural networks
  - computer vision
use_math: true
---

An introduction to the theory of convolutional neural networks and the basis of machine learning for computer vision. We explore motivation, theory and practical applications of mining over image data.

In this post, I give a brief overview of convolutional neural networks, one of the hallmarks of modern computer vision and its applications for image-related machine learning tasks. I also go over the history of computer vision progression though this is not particularly necessary to understand the premise behind CNNs and as such are put towards the end of this post. 

My post is adapted with content from Math 156 - Machine Learning, CS 145 - Data Mining and ECE C147A - Neural Networks & Deep Learning I. Special thanks to the instructors for these courses.

## Representation of Images

Computers represent images with pixels. Typically, an image will contain multiple pixels arranged in a matrix-like order where the higher amount of pixel density corresponds to greater perceived image clarity. We typically refer to the image resolution by talking about the number of rows and columns of pixels in an image. For example, a "4K Image" is characterized by 3840 columns and 2160 rows of pixels. 

While pixels appear colored to us, a computer does not understand a color unless it has an attached numerical value. As such, we represent colors typically through the **RGB Channels**. RGB corresponds to three color channels (Red, Green, Blue) where each channel has values in the range (0, 255). We have a 256 value range because RGB is a 8-bit color scheme so the largest value in binary is (1111111) which is equivalent to \\(2^8 - 1 = 255\\). There are some special values where
\\[\left(000, 000, 000\right) = \text{Black}\\]
\\[\left(255, 255, 255\right) = \text{White}\\]
where one can think of the numerical values as the intensity of light. Thus, no intensity corresponds to a black color. 

Now, to represent an image, we need three matrices where each matrix corresponds to a separate RGB channel. Combining these together gives us a \\(\mathbb{R}^{3\times x \times y}\\) tensor. 

## Motivation for an Image Classifier

Classification algorithms such as Logistic Regression, The Naïve Bayes Classifier and a simple Two-layer Fully Connected Feed Forward Neural Network are able to classify images quite well. However, there exists a common limitation amongst all the aforementioned. In particular, should we change the orientation of the images or chance the locations of the objects within the images, these classifiers would struggle. 

In particular, there exists a need for a type of an image classifier that is position and orientation invariant. That is, this classifier is robust to changes to image data that a human would consider to be the same kind of object. 

So, we introduce the **convolutional neural network**, an adaptation of a simple neural network designed specifically for image classification. We ideally want a kind of classifer that is able to learn patterns in images that are *shift-invariant*, meaning that the location of a certain geometric pattern in the image matters less. We also want our classifier to learn abstract patterns. For example, the first layer could learn edges and color features while the second layer could learn larger curves and shapes. 

Asssume we have a set of discrete classes (labels), then given an image, design a classifier \\(f\\) to determine which class it belongs to. Consider the following example. Let the set of classes be \\( \mathcal{C} = \left\{ \text{cat}, \text{rabbit}, \text{dog} \right\} \\). The classifier \\(f\\) should be able to determine
\\[f\left(\text{image of rabbit}\right) = \text{class rabit} \\]

The image classification framework we follow with the convolutional neural network will be expanded further when we present the full-stack architecture. A couple of core datasets used in image classification are MNIST and CIFAR. MNIST is a set of 60000 training images and 10000 testing images of 28-by-28 black-and-white handwritten digits corresponding to 10 unique classes. On the other hand, CIFAR is a set of 60000 training and 10000 testing images of 32-by-32 colored images corresponding to perfectly-balanced 10 classes. Other popular datasets include ImageNet and ImageNet Real. 

So far, I have been saying *convolutional neural network* but what exactly is a *convolution* afterall?

## The Convolutional Layer

The convolution of two functions, \\(f\left(t\right)\\) and \\(g\left(t\right)\\) is given by 
\\[\left(f \ast g\right)\left(n\right) = \int_{-\infty}^{\infty} f\left(\tau\right)g\left(t-\tau\right) d\tau\\]
In discrete time, this is given by 
\\[\left(f \ast g\right)\left(n\right) = \sum_{m = -\infty}^{\infty} f\left(m\right)g\left(n-m\right)\\]
Note, however, that in general, Convolutional Neural Networks don't use *convolution* (what the hell! you told me they are convolutional!) but instead use *cross-correlation*. For real-valued functions, cross-correlation is defined by 
\\[\left(f\star g\right)\left(n\right) = \sum_{m = -\infty}^\infty f\left(m\right)g\left(n + m\right)\\]
Maybe we should call it a *cross-correlation neural network* then? Eh, doesn't sound as fancy. We'll follow the convention and call this operation a convolution.

The 2D convolution is given by 
\\[
\left(f\ast g\right)\left(i, j\right) = \sum_{m = -\infty}^{\infty}\sum_{n = -\infty}^{\infty} f\left(m, n\right)g\left(i + m, j + n\right)
\\]
This generalizes to higher dimensions as well. This is nice because we will be working with tensors in image data. Do note that "convolutions" are not commutative. 

### Convolutional Padding and Strides

## The Pooling Layer

### Max-Pooling

### Avg-Pooling

## Biases in Convolutional Layers

## Convolutional Neural Network Architecture

## Memory and Time Complexity Details

## Biological Inspiration for the CNN

## History of Convolutional Neural Network Architectures

### LeNet (1998)

### AlexNet (2012)

### VGG (2013)

### GoogleLeNet (2014)

### ResNet (2015)
