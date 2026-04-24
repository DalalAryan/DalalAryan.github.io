/* ================================================================
   textbook/content.js — ALL CHAPTER CONTENT
   Edit chapters here. HTML is supported inside 'content' strings.
   Use class="math" for KaTeX blocks, class="imath" for inline math.
   Use <pre><code class="language-python"> for code blocks.
   ================================================================ */

var TEXTBOOK_CONTENT = {
  title: 'ML from Scratch',
  subtitle: 'a machine learning textbook by aryan dalal',
  chapters: [
    /* ──────────────────────────────────────────
       CHAPTER 1 — Linear Algebra for ML
    ────────────────────────────────────────── */
    {
      id: 'ch1',
      num: '01',
      title: 'Linear Algebra for ML',
      status: 'done',
      sections: [
        {
          id: 'ch1-intro',
          title: 'Why Linear Algebra?',
          content: `
<p>Most of machine learning is, at its core, linear algebra wearing a disguise. 
Neural networks multiply matrices. PCA decomposes them. SVMs find hyperplanes. 
Understanding the underlying geometry makes everything else click into place.</p>
<p>This chapter covers the essentials — not an exhaustive course, but exactly what 
you need to follow the rest of this book without getting lost.</p>
<div class="callout info">
  <strong>Goal:</strong> By the end of this chapter, you should be comfortable with 
  vectors, matrices, matrix multiplication, eigenvalues, and the geometric intuition 
  behind all of them.
</div>
          `,
        },
        {
          id: 'ch1-vectors',
          title: 'Vectors',
          content: `
<p>A <strong>vector</strong> is an ordered list of numbers. In ML we usually think of 
vectors as points in space, or as directions with magnitude.</p>
<div class="math">\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{bmatrix} \\in \\mathbb{R}^n</div>
<p>The <strong>dot product</strong> of two vectors measures how aligned they are:</p>
<div class="math">\\mathbf{a} \\cdot \\mathbf{b} = \\sum_{i=1}^n a_i b_i = \\|\\mathbf{a}\\| \\|\\mathbf{b}\\| \\cos\\theta</div>
<p>When <span class="imath">\\cos\\theta = 0</span>, the vectors are orthogonal — they share no component in common. 
This is the geometric meaning behind independence.</p>
<pre><code class="language-python">import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

dot = np.dot(a, b)          # 32
norm_a = np.linalg.norm(a)  # sqrt(14)
cosine = dot / (np.linalg.norm(a) * np.linalg.norm(b))</code></pre>
          `,
        },
        {
          id: 'ch1-matrices',
          title: 'Matrices & Linear Maps',
          content: `
<p>A matrix represents a <strong>linear transformation</strong> — a function that maps 
vectors to vectors while preserving addition and scalar multiplication.</p>
<div class="math">f(\\mathbf{x}) = A\\mathbf{x}, \\quad A \\in \\mathbb{R}^{m \\times n}</div>
<p>Matrix multiplication is function composition. If <span class="imath">A</span> maps 
<span class="imath">\\mathbb{R}^n \\to \\mathbb{R}^m</span> and <span class="imath">B</span> 
maps <span class="imath">\\mathbb{R}^p \\to \\mathbb{R}^n</span>, then <span class="imath">AB</span> 
maps <span class="imath">\\mathbb{R}^p \\to \\mathbb{R}^m</span>.</p>
<div class="callout warning">
  <strong>Common mistake:</strong> Matrix multiplication is <em>not</em> commutative. 
  In general, <span class="imath">AB \\neq BA</span>.
</div>
<pre><code class="language-python">A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

C = A @ B   # matrix multiply: [[19,22],[43,50]]
D = B @ A   # [[23,34],[31,46]] — different!</code></pre>
          `,
        },
        {
          id: 'ch1-eigen',
          title: 'Eigenvalues & Eigenvectors',
          content: `
<p>An <strong>eigenvector</strong> of a matrix <span class="imath">A</span> is a nonzero 
vector that only gets scaled (not rotated) when multiplied by <span class="imath">A</span>:</p>
<div class="math">A\\mathbf{v} = \\lambda \\mathbf{v}</div>
<p>The scalar <span class="imath">\\lambda</span> is the corresponding <strong>eigenvalue</strong>. 
They are found by solving:</p>
<div class="math">\\det(A - \\lambda I) = 0</div>
<p>Eigenvectors reveal the natural axes of a transformation. In PCA, the eigenvectors 
of the covariance matrix are the principal components — the directions of maximum variance.</p>
<pre><code class="language-python">A = np.array([[3, 1], [0, 2]])
eigenvalues, eigenvectors = np.linalg.eig(A)
# eigenvalues: [3., 2.]
# eigenvectors: columns are the eigenvectors</code></pre>
          `,
        },
      ],
    },

    /* ──────────────────────────────────────────
       CHAPTER 2 — Probability & Information Theory
    ────────────────────────────────────────── */
    {
      id: 'ch2',
      num: '02',
      title: 'Probability & Information Theory',
      status: 'done',
      sections: [
        {
          id: 'ch2-intro',
          title: 'Why Probability?',
          content: `
<p>Machine learning models don't deal in certainties — they deal in distributions. 
Understanding probability is understanding the language ML is written in.</p>
<p>This chapter covers random variables, distributions, expectation, and information 
theory (entropy, KL divergence), all of which appear constantly in ML theory.</p>
          `,
        },
        {
          id: 'ch2-rv',
          title: 'Random Variables & Distributions',
          content: `
<p>A <strong>random variable</strong> <span class="imath">X</span> is a variable whose 
value is determined by a random process. Its behavior is described by a distribution.</p>
<p>For a continuous random variable, the <strong>probability density function</strong> (PDF) 
<span class="imath">p(x)</span> satisfies:</p>
<div class="math">\\int_{-\\infty}^{\\infty} p(x)\\, dx = 1, \\quad p(x) \\geq 0</div>
<p>The most important distribution in ML is the <strong>Gaussian</strong>:</p>
<div class="math">\\mathcal{N}(x;\\mu,\\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\!\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)</div>
<pre><code class="language-python">from scipy.stats import norm
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 200)
plt.plot(x, norm.pdf(x, loc=0, scale=1))  # standard normal</code></pre>
          `,
        },
        {
          id: 'ch2-entropy',
          title: 'Entropy & KL Divergence',
          content: `
<p><strong>Entropy</strong> measures the uncertainty in a distribution. A peaked distribution 
has low entropy; a flat one has high entropy:</p>
<div class="math">H(P) = -\\sum_x P(x) \\log P(x)</div>
<p><strong>KL divergence</strong> measures how different two distributions are. It appears 
in VAEs, information-theoretic bounds, and as the foundation of cross-entropy loss:</p>
<div class="math">D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}</div>
<div class="callout info">
  <strong>Note:</strong> KL divergence is not symmetric. <span class="imath">D_{KL}(P\\|Q) \\neq D_{KL}(Q\\|P)</span> 
  in general, which is why it's not a true distance metric.
</div>
          `,
        },
      ],
    },

    /* ──────────────────────────────────────────
       CHAPTER 3 — Optimization (WIP)
    ────────────────────────────────────────── */
    {
      id: 'ch3',
      num: '03',
      title: 'Optimization & Gradient Descent',
      status: 'wip',
      sections: [
        {
          id: 'ch3-intro',
          title: 'The Optimization Problem',
          content: `
<p>Training a model means finding parameters <span class="imath">\\theta</span> that 
minimize a loss function <span class="imath">\\mathcal{L}(\\theta)</span>:</p>
<div class="math">\\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta)</div>
<p>For almost all interesting models, this has no closed-form solution. 
We use iterative methods — gradient descent being the workhorse.</p>
<div class="callout warning">
  <strong>Work in progress.</strong> More content coming soon.
</div>
          `,
        },
      ],
    },

    /* ──────────────────────────────────────────
       CHAPTER 4 — Neural Networks (WIP)
    ────────────────────────────────────────── */
    {
      id: 'ch4',
      num: '04',
      title: 'Neural Networks from Scratch',
      status: 'wip',
      sections: [
        {
          id: 'ch4-intro',
          title: 'Introduction',
          content: `
<p>A neural network is a function parameterized by weights, composed of simple 
operations stacked in layers. Everything else is commentary.</p>
<div class="callout warning">
  <strong>Work in progress.</strong> More content coming soon.
</div>
          `,
        },
      ],
    },

    /* ──────────────────────────────────────────
       CHAPTER 5 — Convolutional Networks (soon)
    ────────────────────────────────────────── */
    {
      id: 'ch5',
      num: '05',
      title: 'Convolutional Networks',
      status: 'soon',
      sections: [
        {
          id: 'ch5-intro',
          title: 'Coming Soon',
          content: `<div class="callout info"><strong>Coming soon.</strong> This chapter hasn't been written yet.</div>`,
        },
      ],
    },

    /* ──────────────────────────────────────────
       CHAPTER 6 — Transformers (soon)
    ────────────────────────────────────────── */
    {
      id: 'ch6',
      num: '06',
      title: 'Transformers & Attention',
      status: 'soon',
      sections: [
        {
          id: 'ch6-intro',
          title: 'Coming Soon',
          content: `<div class="callout info"><strong>Coming soon.</strong> This chapter hasn't been written yet.</div>`,
        },
      ],
    },
  ],
};
