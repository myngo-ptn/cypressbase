const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    USER_NAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    TAGS: "@Login"

  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'https://www.saucedemo.com',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureWriter(on, config);
      return config;
      // return require('./cypress/plugins/index.js')(on, config)
    }
  },
})