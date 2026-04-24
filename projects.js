/* ================================================================
   data/projects.js — PROJECTS
   Add, remove, or edit projects here.
   Fields: name, lang, desc, tags (array), href
   ================================================================ */

var PROJECTS = [
  {
    name: 'ml-from-scratch',
    lang: 'Python',
    desc: 'Core ML algorithms from first principles. No sklearn. Just math, numpy, and stubbornness.',
    tags: ['numpy', 'ml', 'math'],
    href: '#',
  },
  {
    name: 'sudoku-solver',
    lang: 'Python',
    desc: 'Constraint propagation + backtracking. Solves any valid puzzle in under 10ms. Yes, I timed it.',
    tags: ['csp', 'algorithms'],
    href: '#',
  },
  {
    name: 'f1-bayes',
    lang: 'Python',
    desc: 'Bayesian model for predicting F1 lap time distributions from sector data and weather.',
    tags: ['bayesian', 'pymc', 'f1'],
    href: '#',
  },
  {
    name: 'this-site',
    lang: 'HTML',
    desc: 'A terminal-themed personal site. Modular, no frameworks. Embarrassingly over-engineered.',
    tags: ['css', 'vanilla-js'],
    href: '#',
  },
];
