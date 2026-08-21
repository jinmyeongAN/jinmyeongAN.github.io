# jinmyeongan.github.io

Academic homepage of JinMyeong An. Built with Gatsby, deployed to GitHub Pages.

Live at <https://jinmyeongan.github.io/>.

## Editing content

**Almost everything lives in one file: [`gatsby-meta-config.js`](gatsby-meta-config.js).**
You should not need to touch React or SCSS for routine updates.

| I want to…                | Edit                                                    |
| ------------------------- | ------------------------------------------------------- |
| Add a paper               | `publications` — newest first                            |
| Add a news line           | `news` — newest first                                    |
| Change the bio            | `author.bio` — each string is one paragraph              |
| Change research interests | `interests`                                              |
| Add a degree or a job     | `education` / `experience`                               |
| Add an award or service   | `awards` / `service` — these sections hide while empty   |
| Change contact links      | `author.social`                                          |

### Adding a publication

```js
{
  title: `Paper title`,
  // "*" marks your own name; it is rendered in bold.
  authors: `*JinMyeong An, Co Author, Senior Author`,
  venue: `ACL`,
  year: `2026`,
  note: `Oral`,          // or `Spotlight`, `Equal contribution`, `` for none
  selected: true,        // true also shows it on the homepage
  abstract: `One or two sentences, shown behind the "Abstract" toggle.`,
  links: {
    paper: `https://aclanthology.org/...`,
    pdf: ``,
    arxiv: ``,
    code: ``,
    bibtex: `@inproceedings{...}`,
  },
}
```

The homepage shows entries with `selected: true`; `/publications` shows all of
them, grouped by year.

### Your photo

Save a square headshot as `assets/profile.jpg` (600×600 or larger). Until that
file exists the homepage shows a dashed placeholder box of the same size. To use
a different filename, update `author.photo`.

### Your CV

Drop the PDF at `static/cv.pdf` and set `author.social.cv` to `/cv.pdf`. The CV
link is hidden from the nav and the contact row while that value is empty.

### Writing a note

Create `content/<slug>/index.md`:

```markdown
---
title: 'Post title'
date: '2026-01-31 09:00:00'
categories: reasoning
---

Body in Markdown.
```

Posts appear at `/notes` and at `/<slug>/`.

## Running it

```bash
nvm use            # Node 18.17.1, per .nvmrc
yarn install
yarn develop       # http://localhost:8000
yarn build         # production build into public/
yarn deploy        # build and push public/ to the gh-pages branch
```

## Layout of the code

```
gatsby-meta-config.js      all site content (edit this)
gatsby-config.js           plugins; siteMetadata is derived from the file above
gatsby-ssr.js              applies the saved light/dark theme before first paint
content/                   markdown notes
assets/                    profile photo and any images used in notes
static/                    files served as-is (favicon, og-image, cv.pdf)
src/pages/                 home, publications, notes, 404
src/templates/             note template
src/components/            profile, news-list, publication-list, cv-list, …
src/styles/                _colors.scss (both themes), _variables.scss (type, spacing)
```

Both themes are defined as CSS custom properties in `src/styles/_colors.scss`;
the light palette is on `html` and the dark one on `html[data-theme='dark']`.
