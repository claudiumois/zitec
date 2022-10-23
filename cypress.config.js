const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 10000,
  pageLoadTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  e2e: {
    baseUrl: "http://automationpractice.com/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
