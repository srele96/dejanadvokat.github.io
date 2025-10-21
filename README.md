# Website

Static website for Advokat Dejan Vasiljević.

## Stack

- Jekyll (site source in `docs/`)
- Tailwind CSS (CLI v4) → outputs to `docs/output.css`
- GitHub Pages–compatible plugins: `jekyll-seo-tag`, `jekyll-sitemap`

## Getting started (local)

1) Install Ruby + Bundler, then install gems:

```bash
bundle install
```

2) Build Tailwind CSS (watch during development):

```bash
npm run build:css:watch
```

3) Run Jekyll dev server (serves from `docs/` as configured in `_config.yml`):

```bash
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000/ in your browser.

## Production build

- Generate CSS once and minify:

```bash
npm run build:css
```

- Build the site:

```bash
bundle exec jekyll build
```

The static site is output to `_site/`.

## Notes

- Jekyll source is `docs/`. Pages are processed only if they contain front matter. `docs/index.html` uses the `docs/_layouts/default.html` layout.
- The Tailwind CLI scans `docs/**/*.html` (layouts, includes, pages) so unused classes are purged.
- When deploying with GitHub Pages (native build), ensure `docs/output.css` is committed, since GitHub Pages does not run Node builds.
