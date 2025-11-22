---
layout: archive
title: "Math Stuff"
permalink: /mathstuff/
author_profile: true
redirect_from:
  - /resume
---

Some Interesting Math I Have Come Across (Excerpts from Lectures and Otherwise)
-------

### The cardinality of \\(\mathbb{R}\\) is \\(2^{\aleph_0}\\)

This was a homework problem from Fall 2025 Math 131AH - Honors Real Analysis at UCLA. The rather cool aspect of this problem comes from the fact that the interval \\(\left(0, 1\right)\\) also has cardinality \\(2^{\aleph_0}\\). In particular, this is to say that the *size* of \\(\mathbb{R}\\) is the same as the size of the interval \\(\left(0, 1\right)\\). 

It's important that we don't confuse *size* (and therefore, cardinality) with *length* (Lebesgue measure) because they describe two completely different properties of numbers. While the cardinality of \\(\left(0, 1\right)\\) equals that of \\(\mathbb{R}\\), the length of they differ. Indeed, if \\(\ell\\) describe the length of an interval, then \\(\ell\left(\left(0, 1\right)\right) = 1\\) while \\(\ell\left(\mathbb{R}\right) = \infty\\). 

With this important note, let's head to the proof. 

*Proof.* We will use the fact that the interval \\(\left(0, 1\right)\\) has cardinality \\(2^{\aleph_n}\\). We want to use Schröder-Bernstein such that we can establish equipotence between \\(\left(0, 1\right)\\) and \\(\mathbb{R}\\) by showing an injection \\(\phi:\left(0, 1\right) \longrightarrow \mathbb{R}\\) and another injection \\(\psi:\mathbb{R} \longrightarrow \left(0, 1\right)\\). 

Let \\(\phi:\left(0, 1\right) \longrightarrow \mathbb{R}\\) defined via the identity map \\(\phi\left(x\right) = x\\). Note \\(\left(0, 1\right) \subseteq \mathbb{R}\\). 

As such, 
\\[\phi\left(x\right) = \phi\left(y\right) \implies x = y ~~~~ \forall x, y \in \left(0, 1\right)\\]
Hence, \\(\phi\\) is injective. 

Let \\(\psi:\mathbb{R}\longrightarrow\left(0, 1\right)\\) defined via the sigmoid function 
\\[
  \psi\left(x\right) = \frac{1}{1 + e^{-x}}
\\]
As such, 
\\[
  \psi\left(x\right) = \psi\left(y\right) \implies \frac{1}{1 + e^{-x}} = \frac{1}{1 + e^{-y}} \iff 1 + e^{-y} = 1 + e^{-x} \iff e^{-y} = e^{-x} \iff y = x
\\]
Hence, \\(\psi\\) is injective. 

Because \\(\phi:\left(0, 1\right) \longrightarrow \mathbb{R}\\) injective and \\(\psi:\mathbb{R}\longrightarrow\left(0, 1\right)\\) injective, by Schröder-Bernstein, \\(\left(0, 1\right) \sim \mathbb{R}\\), that is, \\(\mathbb{R}\\) is equipotent to \\(\left(0, 1\right)\\). Because \\(\left(0, 1\right)\\) has cardinality \\(2^{\aleph_0}\\), we conclude that \\(\mathbb{R}\\) has cardinality \\(2^{\aleph_0}\\). 

QED.

I hope you like this proof using quite a powerful theorem: Schröder-Bernstein. We can also skip Schröder-Bernstein and in fact construct a bijection which would require us to show surjectivity of a mapping we define. I find this simple and short proof quite elegant. 

There's another interesting proof showing that the set of irrational numbers \\(\left(\mathbb{R} \backslash \mathbb{Q}\right)\\) has the same cardinality as that of \\(\mathbb{R}\\) (and therefore, the same as \\(\left(0, 1\right)\\)). It also uses the Schröder-Bernstein theorem to establish equipotence but that too can be done so via direct bijection. 
