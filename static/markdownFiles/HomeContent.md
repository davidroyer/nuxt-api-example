The markdown files for this example live in the directory **markdownFiles**, inside the **static** folder.

They are imported using webpack's import capability and loadered with the markdown-it module via [Nuxt.js modules](https://github.com/nuxt-community/modules).

This content you are reading at this very moment is actually a markdown file. It's titled home.md and can find it in the **markdownFiles** directory.

Inside the **markdownFiles** directory, you will find 2 other files
- test1.md
- test2.md

They are used to show the dynamic import ability of webpack and that can be seen in **dynamic/_slug.vue**
Pretty cool huh?
