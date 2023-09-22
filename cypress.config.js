const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
     env:{
      Login:'https://www.amazon.com',
     }
  },
});
