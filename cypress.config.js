const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 20000,
  execTimeout: 20000,
  pageLoadTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  e2e: {
    baseUrl: "http://automationpractice.com/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
