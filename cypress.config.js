const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/*.feature',
    baseUrl: "https://www.saucedemo.com/"
  },
});