# Website

Static website for Advokat Dejan Vasiljević.

## Getting started (local)

1. Install Ruby + Bundler, then install gems:

Change active directory to `website/`:

```bash
cd website
```

Required to store gems locally and avoid permission issues:

```bash
bundle config set --local path 'vendor/bundle'
```

Install gems:

```bash
bundle install
```

Install nodejs dependencies:

```bash
npm install
```

2. Run Jekyll dev server (PostCSS + Tailwind run via plugin; serves from `docs/`):

```bash
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000/ in your browser.

## Production build

- Build the site (runs Jekyll which triggers PostCSS/Tailwind):

```bash
bundle exec jekyll build
```

The static site is output to `_site/`.
