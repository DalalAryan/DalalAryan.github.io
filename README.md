# aryan dalal — site

Terminal-style personal portfolio + ML textbook.

## File Structure

```
/
├── index.html              ← main portfolio (don't edit content here)
├── config.js               ← ★ edit personal info here
├── assets/
│   └── theme.css           ← shared theme CSS vars (both site + textbook)
├── data/
│   ├── writing.js          ← ★ add/edit blog posts here
│   ├── projects.js         ← ★ add/edit projects here
│   └── textbook.js         ← ★ edit chapter list (portfolio preview)
├── textbook/
│   ├── index.html          ← textbook layout (rarely needs editing)
│   └── content.js          ← ★ write chapter content here
└── README.md
```

## How to Edit Things

### Change your name, bio, links, etc.
→ Edit **`config.js`** — one change updates everywhere automatically.

### Add a blog post
→ Edit **`data/writing.js`** — add an object to the `WRITING` array:
```js
{
  idx:   '05',
  title: 'Your Post Title',
  date:  'may 2025',
  tag:   'ml',        // 'ml' | 'math' | 'misc'
  href:  '/writing/your-post.html',
},
```

### Add a project
→ Edit **`data/projects.js`** — add an object to the `PROJECTS` array:
```js
{
  name: 'project-name',
  lang: 'Python',
  desc: 'What it does.',
  tags: ['tag1', 'tag2'],
  href: 'https://github.com/DalalAryan/project-name',
},
```

### Update textbook chapter list (on portfolio page)
→ Edit **`data/textbook.js`** — change `status` as chapters progress:
- `'done'`  → finished and published
- `'wip'`   → in progress
- `'soon'`  → planned

### Write textbook content
→ Edit **`textbook/content.js`** — add/edit sections inside each chapter's `sections` array:
```js
{
  id:      'ch1-my-section',   // unique, used for URL hash and search
  title:   'My Section Title',
  content: `
    <p>Your prose here. HTML is fine.</p>
    <div class="math">\\frac{d}{dx}f(x)</div>
    <span class="imath">x^2 + y^2</span> (inline math)
    <pre><code class="language-python">
import numpy as np
    </code></pre>
    <div class="callout info">
      <strong>Note:</strong> callout text here.
    </div>
  `,
},
```

#### Callout types
```html
<div class="callout info">    ← blue, for tips and notes
<div class="callout warning"> ← red, for common mistakes
<div class="callout success"> ← green, for key results
```

## Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push this entire folder as the root of the repo
3. Settings → Pages → Branch: main → Save
4. Live at `https://yourusername.github.io`

The textbook lives at `https://yourusername.github.io/textbook/`.
