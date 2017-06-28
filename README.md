# Nuxt API Example

> An example of using Vuex, axios, and a REST API with Nuxt

## A couple things that are setup for this example that could be of interest to someone...

- Nuxt's fetch() method is used to fill our Vuex Store for our posts listing page and for the dynamic post page for individual post
- The head property for the dynamic post route is using the title property from the returned post object to set the meta title property

### Other project info

- Nuxt Modules are used to add Bulma, markdown-it, and font-awesome
- The menu.js file inside the middleware directory is used to handle closing the mobile dropdown menu once a link is selected
- I am using Netlify for hosting this as a static site
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
