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

## Problems & Exercises

### Classical Machine Learning

**Problem 1.** Show the following matrix derivatives
1. First Order:
2. Second Order:

**Problem 2.** Suppose we have matrices \\(\mathbf{Y} \in \mathbb{R}^{d\times n}\\) and \\(\mathbf{X} \in \mathbb{R}^{d\times r}\\). We seek to find a matrix \\(\hat{\mathbf{B}} \in \mathbb{R}^{r\times n}\\) where:
\\[\|\mathbf{Y} - \mathbf{XB}\|_F^2 + \lambda\|\mathbf{F}\|_F^2 \tag{1}\\] 
Here \\(\lambda \geq 0\\) is called the \\(L_2\\)-regularization parameter. (This is an instance of unconstrained quadratic optimization problem).

1. Show that

\\[\|\mathbf{Y} - \mathbf{XB}\|_F^2 + \lambda \|\mathbf{B}\|_F^2 = \text{trace}\left[\left(\mathbf{Y} - \mathbf{XB}\right)^\top\left(\mathbf{Y}-\mathbf{XB}\right)\right] + \lambda\text{trace}\left(\mathbf{B}^\top\mathbf{B} \\]
\\[ = \text{trace}\left(\mathbf{Y}^\top\mathbf{Y}\right) - 2\text{trace}\left(\mathbf{Y}^\top \mathbf{XB}\right) + \text{trace}\left(\mathbf{B}^\top\mathbf{X}^\top \mathbf{X}\mathbf{B}\right) + \lambda\text{trace}\left(\mathbf{B}^\top\mathbf{B}\right) \\]
  
3. Show that
4. Argue that the quadratic function \\(\mathbf{B} \longmapsto \|\mathbf{Y} - \mathbf{XB}\|_F^2\\) is convex, and hence its every critical point is a local minimum.
5. Suppose \\(\lambda=0\\) and \\(\mathbf{X}^\top X\\) is invertible. Then, from part 2 and 3, conclude that the quadratic function \\(\mathbf{B}\longmapsto\|\mathbf{Y} - \mathbf{XB}\|_F^2 + \lambda\|\mathbf{B}\|_F^2\\) has a unique global minimum \\(\hat{\mathbf{B}} = \left(\mathbf{X}^\top \mathbf{X}\right)^{-1} \mathbf{X}^\top \mathbf{Y}\\). 
6. Suppose \\(\lambda > 0\\). Then argue that \\(\mathbf{X}^\top \mathbf{X} + \lambda \mathbf{I}\\) is always invertible, and the quadratic function \\(\mathbf{B}\longmapsto \|\mathbf{Y} - \mathbf{XB}\|_F^2 + \lambda \|\mathbf{B}\|_F^2\\) has a unique global minimum \\(\hat{\mathbf{B}} = \left(\mathbf{X}^\top\mathbf{X} + \lambda \mathbf{I}\right)^{-1}\mathbf{X}^\top \mathbf{Y}\\). 

*Hints.* \
For 4. The matrix \\(\mathbf{X}^\dagger := \left(\mathbf{X}^\top\mathbf{X}\right)^{-1}\mathbf{X}^\top\\) is the *Moore-Penrose Pseudoinverse* of \\(\mathbf{X}\\). If \\(\mathbf{X}\\) is square and invertible, then \\(\mathbf{X}^\dagger = \mathbf{X}^{-1}\\). So the pseudoinverse can be regarded as a generalization of matrix inverse for non-square matrices. \
For 5. Show that \\(\mathbf{X}^\top\mathbf{X} + \lambda\mathbf{I}\\) is positive definite if \\(\lambda > 0\\). Use the fact that the eigenvalues of a positive definite matrix \\(\mathbf{A}\\) have to be positive so \\(\mathbf{Ay} \neq \mathbf{0}\\) for any \\(\mathbf{y}\\) so \\(\mathbf{A}\\) is invertible.
