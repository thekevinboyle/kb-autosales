# AutoSales.com mock (fictitious site)

### Prompt
"We would like for you to code up this landing page for a fictitious auto sales site.  The landing page is very straight forward, and shouldn't take too long to code, depending, of course, on how complex you choose to make it.  You are free to code it any way you'd like, and use any framework or library you think is best for this landing page, just be prepared to explain your reasoning and your overall coding process.  We are mainly looking to see how you approach coding a project from scratch."

### Solution
My HTML and CSS solution wrapped in a token Mithril boilerplate application using ES6, Babel, Webpack 4, Sass/SCSS, Webpack dev server hot reload and eslint. The 'application' piece of it is mainly to have a fast development environment, but also to accomplish the repeating bits of the PSD while keeping things reasonably DRY.

I used Mithril here because it was the fastest for me to get up and running with. For something more formal I would likely leverage Vue or React.

The rest of the documentation is from the Mithril starter kit by Dhinesh Kumar https://github.com/dhinesh03/mithril-starter-kit

### How to use
Clone into a directory, change into that directory in your terminal.

```shell
npm install

npm start
  # Webpack dev server will run and opens the app on the browser with HRM,
npm run build
  # Compiles the app for production and all compiled files lies on dist dir.
  # To deploy an the application simply transfer the dist to a web server's public directory.
```

## Directory Structure:
```shell
├── dist/                         # Compiled application
│     ├── css/
│     │     ├── *.css
│     │     └── *.css.map
│     ├── fonts/
│     ├── images/
│     ├── *.js
│     ├── *.js.map
│     └── index.html
│
├── src/                          # Application source files
│     │
│     ├── images/                 # Image files that are copied to build production output (e.g. favicon.ico)
│     │
│     ├── view/                   # All your application view logic files
│     │     │
│     │     ├── components/             # All your view components
│     │     │     │
│     │     │     ├── your-component/       # A single view component
│     │     │     │     ├── index.js            # The view component code
│     │     │     │     ├── styles.scss         # The view component styles
│     │     │     │     └── ...
│     │     │     └── ...
│     │     │
│     │     ├── pages/                   # All your top level page components
│     │     │     ├── your-pages.js
│     │     │     └── ...
│     │     │
│     │     └── routes.js               # Application routing definition
│     │
│     ├── index.html              # Application HTML template
│     └── index.js                # Application entry point
│
├── eslintrc.js                   # ESLint configuration
├── package.json                  # NPM configuration and scripts
└── webpack.*.js                  # Webpack configuration
```
