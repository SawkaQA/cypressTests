const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 7000,

  e2e: {
    baseUrl: 'https://capital.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
            return config;
    },
  },
});
