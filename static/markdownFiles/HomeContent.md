## A couple things that are setup for this example that could be of interest to someone...

- Nuxt's fetch() method is used to fill our Vuex Store for our posts listing page and for the dynamic post page for individual post
- The head property for the dynamic post route is using the title property from the returned post object to set the meta title property
- We're using Nuxt's nuxtServerInit method to handle displaying the correct post on the dynamic post route if the page's content is delivered via server

### Other project info

- Nuxt Modules are used to add Bulma, markdown-it, and font-awesome
- Axios is used as a Nuxt plugin and it is setup with a baseURL for our demo API
- The menu.js file inside the middleware directory is used to handle closing the mobile dropdown menu once a link is selected
- I am using Netlify for hosting this example as a static site
