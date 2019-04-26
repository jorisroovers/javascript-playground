# Cypress

This is a very basic app written in express+handlebars.

Running the webserver:

```sh
npm install
node_modules/.bin/cypress install
node index.js
```

In a seperate shell, run Cypress:
```sh
node_modules/.bin/cypress open

# To run it from CLI:
node_modules/.bin/cypress run
```
Click on a test to run it.

Note this playground is a very minimal example, cypress also supports plugins, custom commands, etc - a lot of the default example/boilerplate code was removed from this directory. 
