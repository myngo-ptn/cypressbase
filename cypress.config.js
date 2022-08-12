const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  env: {
    USER_NAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    TAGS: ""

  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'https://www.saucedemo.com',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }

  },
})