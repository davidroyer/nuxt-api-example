# Nuxt Api Example

> An example of using markdown files for content with Nuxt.js / Vue.js

The markdown files for this example live in the directory **markdownFiles**, inside the **static** folder.

They are imported using webpack's import capability and loadered with the markdown-it module via [Nuxt.js modules](https://github.com/nuxt-community/modules).

This content you are reading at this very moment is actually a markdown file. It's titled home.md and can find it in the **markdownFiles** directory.

Inside the **markdownFiles** directory, you will find 2 other files
- test1.md
- test2.md

They are used to show the dynamic import ability of webpack and that can be seen in **dynamic/_slug.vue**

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
