# Website

Description...

## Requirements

- Unbuntu >= 24.04.x
- Nodejs >= 25.x
- Ruby == 3.3.10

Install the version managers for nodejs and ruby:

Install `nvm` <https://github.com/nvm-sh/nvm>

Install `rvm` <https://rvm.io/>

**_It is not guaranteed that the website will build on other operating systems or tool versions._**

## Docs

Documentation on how what to do and how.

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

The development build with watch mode:

```bash
node build.dev.js
```

The prod bulid:

```bash
node build.prod.js
```

This is useful if server serves the site directory from a subpath (e.g. example.com/blog). Build for production with baseurl prefix:

```bash
BASEURL="/blog" ./build-site.sh
```

Build for production without baseurl prefix:

```bash
./build-site.sh
```

## TODO

- Extract core website title to a single file in `_data` directory (or some better solution)
- Update technical documentation
- Try to integrate esbuild through Jekyll `_plugins`
