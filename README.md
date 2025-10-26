# Website

Description...

## Requirements

- Unbuntu >= 24.04.x
- Nodejs >= 25.x
- Ruby >= 3.2.x

Install the version managers for nodejs and ruby:

Install `nvm` <https://github.com/nvm-sh/nvm>

Install `rvm` <https://rvm.io/>

**_It is not guaranteed that the website will build on other operating systems or tool versions._**

## Docs

**_It is conventional to keep Gemfile in the root._**

Setup local bundle path to avoid installing gems globally:

```bash
bundle config set --local path 'vendor/bundle'
```

Install required gems:

```bash
bundle install
```

Install nodejs dependencies:

```bash
npm install
```

Build site and serve with live reload:

```bash
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000> in your browser.

Build site for production:

```bash
bundle exec jekyll build
```

Build lucide icons separately (this step is required because lucide CDN build is too slow for production and html templates don't integrate well with javascript modules):

```bash
node build.js
```

Documentation on how what to do and how.

### Tailwindcss

**_Must fix the tailwind manual build... with Jekyll static site generator._**

Build tailwindcss styles and commit when merging to main - deploying to github pages.

```bash
npm run build:css
```

For development, build css in watch mode:

```bash
npm run build:css:watch
```
