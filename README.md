# babel-tricks
A couple of node projects to show the various config options of babel e.g. using a .babelrc file or using a babel.config.js file

Exploring what various plugins actually do rather than just using the default presets env.

# Overview

clone the repo

cd to the project folders e.g. babel-tricks-rc

```npm install```

```npm run-script build```

It's watching for file changes, so the build process does not terminate

Open another terminal:

```npm start```

#babel-polyfill
Babel-node is for dev builds;  babel is for production builds.
When using babel-node in your build script, babel-node has inbuilt support for advanced features such as async/await - babel does not.
See https://babeljs.io/docs/en/babel-polyfill.  We used this in my graphql course, though this has since been deprecated.
