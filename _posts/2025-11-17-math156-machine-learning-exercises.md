---
title: 'Math 156 - Machine Learning Problems & Exercises'
date: 2025-11-17
permalink: /posts/2025/11/math156-machinelearning/
tags:
  - math
  - computer science
  - machine learning
  - artificial intelligence
use_math: true
---

Below is a selected list of problems & exercises that I had worked on when I took Math 156 - Machine Learning with Professor Farolfi in Fall 2025. 

# Problems & Exercises

## Classical Machine Learning

**Problem 1.** Show the following matrix derivatives
1. First Order:
2. Second Order:

**Problem 2.** Suppose we have matrices \\(\mathbf{Y} \in \mathbb{R}^{d\times n}\\) and \\(\mathbf{X} \in \mathbb{R}^{d\times r}\\). We seek to find a matrix \\(\hat{\mathbf{B}} \in \mathbb{R}^{r\times n}\\) where:
\\[\|\|\mathbf{Y} - \mathbf{XB}\|\|_F^2 + \lambda\|\|\mathbf{F}\|\|_F^2 \tag{1}\\] 
Here \\(\lambda \geq 0\\) is called the \\(L_2\\)-regularization parameter. (This is an instance of unconstrained quadratic optimization problem).

1. Show that

\\[\|\|\mathbf{Y} - \mathbf{XB}\|\|_F^2 + \lambda \|\|\mathbf{B}\|\|_F^2 = \text{trace}\left[(\mathbf{Y} - \mathbf{XB})^\top(\mathbf{Y} - \mathbf{XB})\right] + \lambda\,\text{trace}\left(\mathbf{B}^\top\mathbf{B}\right)\\]
  
\\[= \text{trace}(\mathbf{Y}^\top\mathbf{Y}) - 2\,\text{trace}(\mathbf{Y}^\top \mathbf{X}\mathbf{B}) + \text{trace}(\mathbf{B}^\top\mathbf{X}^\top \mathbf{X}\mathbf{B}) + \lambda\,\text{trace}(\mathbf{B}^\top\mathbf{B})\\]
  
3. Show that
4. Argue that the quadratic function \\(\mathbf{B} \longmapsto \|\mathbf{Y} - \mathbf{XB}\|_F^2\\) is convex, and hence its every critical point is a local minimum.
5. Suppose \\(\lambda=0\\) and \\(\mathbf{X}^\top X\\) is invertible. Then, from part 2 and 3, conclude that the quadratic function \\(\mathbf{B}\longmapsto\|\mathbf{Y} - \mathbf{XB}\|_F^2 + \lambda\|\mathbf{B}\|_F^2\\) has a unique global minimum \\(\hat{\mathbf{B}} = \left(\mathbf{X}^\top \mathbf{X}\right)^{-1} \mathbf{X}^\top \mathbf{Y}\\). 
6. Suppose \\(\lambda > 0\\). Then argue that \\(\mathbf{X}^\top \mathbf{X} + \lambda \mathbf{I}\\) is always invertible, and the quadratic function \\(\mathbf{B}\longmapsto \|\mathbf{Y} - \mathbf{XB}\|_F^2 + \lambda \|\mathbf{B}\|_F^2\\) has a unique global minimum \\(\hat{\mathbf{B}} = \left(\mathbf{X}^\top\mathbf{X} + \lambda \mathbf{I}\right)^{-1}\mathbf{X}^\top \mathbf{Y}\\). 

*Hints.* \
For 4. The matrix \\(\mathbf{X}^\dagger := \left(\mathbf{X}^\top\mathbf{X}\right)^{-1}\mathbf{X}^\top\\) is the *Moore-Penrose Pseudoinverse* of \\(\mathbf{X}\\). If \\(\mathbf{X}\\) is square and invertible, then \\(\mathbf{X}^\dagger = \mathbf{X}^{-1}\\). So the pseudoinverse can be regarded as a generalization of matrix inverse for non-square matrices. \
For 5. Show that \\(\mathbf{X}^\top\mathbf{X} + \lambda\mathbf{I}\\) is positive definite if \\(\lambda > 0\\). Use the fact that the eigenvalues of a positive definite matrix \\(\mathbf{A}\\) have to be positive so \\(\mathbf{Ay} \neq \mathbf{0}\\) for any \\(\mathbf{y}\\) so \\(\mathbf{A}\\) is invertible.

### Multiple-Choice Questions for Classical Machine Learning

**Question 1.** What is the goal of polynomial regression?
- (A): To predict categorical labels
- (B): To generate random noise
- (C): To model exponential growth
- (D): To fit a polynomial function to data by minimizing loss

**Question 2.** In all probabilistic models that were covered in class, what assumption does allow to write the likelihood function as a product of probability functions of the outputs \\(y_i\\)?
- (A): The outputs \\(y_i\\) are assumed to be independent
- (B): The inputs \\(x_i\\) are assumed to be correlated
- (C): The outputs \\(y_i\\) are assumed to be correlated
- (D): The inputs \\(x_i\\) are assumed to be independent
  
**Question 3.** Overfitting occurs when:
- (A): The model performs well on both train and test data
- (B): The model underfits the data
- (C): The model fits noise in the training data
- (D): The regularization parameter is too large
  
**Question 4.** Bayesian polynomial regression treats the coefficients \\(\mathbf{w}\\) as:
- (A): Fixed parameters
- (B): Random variables
- (C): Deterministic constants
- (D): Complex-valued functions
  
**Question 5.** Let \\(\mathbf{w}\\) represent the vector of parameters of a regression or classification problem. Let \\(\mathbf{X}, \mathbf{Y}\\) represent the vector/matrix of inputs and the vector of outputs, respectively. The loss function for \\(L_2\\)-regularization includes which term?
- (A): \\(\lambda\|\|\mathbf{w}\|\|_1\\)
- (B): \\(\lambda\|\|\mathbf{w}\|\|_2^2\\)
- (C): \\(\lambda\|\|\mathbf{X}\|\|_F\\)
- (D): \\(\lambda\|\|\mathbf{Y}\|\|_2^2\\)
  
**Question 6.** Which one of the following helps reducing overfitting?
- (A): \\(L_1\\) regularization
- (B): \\(L_2\\) regularization
- (C): Increasing the size of the training data
- (D): All of the above
  
**Question 7.** The mean squared error (MSE) measures:
- (A): Model bias
- (B): Cross-entropy loss
- (C): Variance of residuals only
- (D): Average squared difference between predictions and outputs
  
**Question 8.** In regression problems, the optimal decision rule is:
- (A): \\(\hat{y} = \arg \max_y P\left(Y = y \mid X = x\right) \\)
- (B): \\(\hat{y} = \mathbb{E}\left\[Y \mid X = x\right\]\\)
- (C): \\(\hat{y} = \arg \min L\left(Y, \hat{y}\right)\\)
- (D): \\(\hat{y} = \text{Var}\left\[Y \mid X = x\right\]\\)
  
**Question 9.** A decision algorithm maps
- (A): Input features to loss functions
- (B): Output labels to probabilities
- (C): Inputs to predicted outputs
- (D): Random variables to parameters
  
**Question 10.** The logistic regression model assumes that:
- (A): \\( Y \mid X \sim \text{Normal}\\)
- (B): \\( Y \mid X \sim \text{Uniform}\\)
- (C): \\( Y \mid X \sim \text{Bernoulli}\\)
- (D): \\( Y \mid X \sim \text{Exponential}\\)
  
**Question 11.** In classification, the optimal decision rule is:
- (A): \\(\hat{y} = \mathbb{E}\left\[ Y \mid X = x\right\]\\)
- (B): \\(\hat{y} = \arg \max_y P\left(Y = y \mid X = x\right)\\)
- (C): \\(\hat{y} = \min_y L\left(Y, \hat{y}\right)\\)
- (D): \\(\hat{y} = P\left(X \mid Y\right)\\)
  
**Question 12.** Gradient descent updates parameters using which of the following update rules:
- (A): \\(w_{t+1} \leftarrow w_t - \eta_t\nabla L\left(w_t\right) \\)
- (B): \\(w_{t+1} \leftarrow w_t + \eta_t\nabla L\left(w_t\right) \\)
- (C): \\(w_{t+1} \leftarrow w_t - X^\top Y\\)
- (D): \\(w_{t+1} \leftarrow w_t - H^{-1} \nabla L\left(w_t\right)\\)
  
**Question 13.** Which one of the following is true about total expected loss minimization and conditional expected loss minimization:
- (A): Conditional expected loss minimization equals total expected loss minimization
- (B): There exists no relationship between total expected loss minimization and conditional expected loss minimization
- (C): The difference between the two is that total expected loss minimization is stochastic
- (D): Total expected loss minimization is more efficient than conditional expected loss minimization
  
**Question 14.** Regularization adds a term to the loss function with the purpose of:
- (A): Adding random noise to the loss function
- (B): Penalizing complexity of the model parameters
- (C): Correcting the gradient to make it computationally stable
- (D): Adding a bias term to the loss function
  
**Question 15.** Logistic regression coefficients can be:
- (A): Only non-negative real numbers
- (B): Only negative real numbers
- (C): Both positive and negative real numbers
- (D): Only real numbers in the interval \\(\left\[0, 1\right\]\\)
  
**Question 16.** Logistic regression has no closed form solution because:
- (A): The loss function is not differentiable
- (B): The sigmoid function is discontinuous
- (C): The log-likelihood function is not quadratic
- (D): The optimization problem is non-convex
  
**Question 17.** The confusion matrix is used to:
- (A): Evaluate classification accuracy
- (B): Visualize loss convergence
- (C): Compute MSE
- (D): Normalize features
  
**Question 18.** The "naïve" assumption in Naïve Bayes is that:
- (A): Classes are independent
- (B): Features are conditionally independent on a given class
- (C): Classes are not uniformly distributed
- (D): Features are dependent
  
**Question 19.** The Shannon entropy of a deterministic probability mass function with only one out come having probability 1 is:
- (A): 1
- (B): 0
- (C): Infinite
- (D): Undefined
  
**Question 20.** Which of the following would prevent the use of the Newton-Raphson algorithm:
- (A): The Hessian \\(H\\) is not invertible
- (B): The loss function is convex in the predicted output \\(\hat{y}\\)
- (C): The model outputs \\(y\\) are assumed to be real numbers
- (D): All of the above

## Neural Networks & Deep Learning

### Multiple-Choice Questions for Neural Networks & Deep Learning
