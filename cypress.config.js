const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:4000,
  projectId: "th5qa8",
  env: {
    url:"https://www.rahulshettyacademy.com/angularpractice/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integeration/examples/*.js',
    retries: {
      runMode: 1,
      },
  },
});
