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
When using babel-node in your build script, babel-node has inbuilt support for advanced features such as async/await - babel does not.  Symptom is error "ReferenceError: regeneratorRuntime is not defined".
See https://babeljs.io/docs/en/babel-polyfill.  We used this in my graphql course, though this has since been deprecated.
Import in your main ap script e.g. index.js
```import "@babel/polyfill"```
If you get an error about it being loaded multiple times, probably a dev issue i.e. you're importing it but for your dev build, you're also using babel-node so it's brought in twice.  Just use this import instead:
```import "@babel/polyfill/noConflict"```

# Using environment variables in scripts
If you get an error in one of your package.json scripts, such as:
```[ '[WARNING] in prisma/prisma.yml: A valid environment variable to satisfy the declaration \'env:PRISMA_ENDPOINT\' could not be found.' ]```
In your script, tell it where to find the environment variables e.g.
```"get-schema": "graphql get-schema -p prisma --dotenv config/dev.env"```
