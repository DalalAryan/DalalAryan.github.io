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

## Representation of Images

## Motivation for an Image Classifier

Classification algorithms such as Logistic Regression, The Naïve Bayes Classifier and a simple Two-layer Fully Connected Feed Forward Neural Network are able to classify images quite well. However, there exists a common limitation amongst all the aforementioned. In particular, should we change the orientation of the images or chance the locations of the objects within the images, these classifiers would struggle. 

In particular, there exists a need for a type of an image classifier that is position and orientation invariant. That is, this classifier is robust to changes to image data that a human would consider to be the same kind of object. 

So, we introduce the **convolutional neural network**, an adaptation of a simple neural network designed specifically for image classification. We ideally want a kind of classifer that is able to learn patterns in images that are *shift-invariant*, meaning that the location of a certain geometric pattern in the image matters less. We also want our classifier to learn abstract patterns. For example, the first layer could learn edges and color features while the second layer could learn larger curves and shapes. 

So far, I have been saying *convolutional neural network* but what exactly is a *convolution* afterall?

## The Convolutional Layer

The convolution of two functions, \\(f\left(t\right)\\) and \\(g\left(t\right)$\\) is given by 
\\[left(g \ast g\right)\left(t\right) = \int_{-\infty}^{\infty} f\left(\tau\right)g\left(t-\tau\right) \, d\tau\\]
In discrete time, this is given by 
\\[\left(f \ast g\right)\left(n\right) = \sum_{m = -\infty}^{\infty} f\left(m\right)g\left(n-m\right)\\]
Note, however, that in general, Convolutional Neural Networks don't use *convolution* (what the hell! you told me they are convolutional!) but instead use *cross-correlation*. For real-valued functions, cross-correlation is defined by 
\\[f\left(\star g\right)\left(n\right) = \sum_{m = -\infty}^\infty f\left(m\right)g\left(n + m\right)\\]
Maybe we should call it a *cross-correlation neural network* then? Eh, doesn't sound as fancy. We'll follow the convention and call this operation a convolution.

## The Pooling Layer

## Biases in Convolutional Layers

## Convolutional Neural Network Architecture

## Memory and Time Complexity Details
