const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    ADMIN_USER : 'problem_user',
    ADMIN_PASS : 'secret_sauce'
  }
});
