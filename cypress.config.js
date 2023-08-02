const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'yi1mb6',
  chromeWebSecurity: false,
  watchForFileChanges: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    USER_NAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    allure: true,
  },
  reporter: "mocha-allure-reporter",
  // reporterOptions: {
  //   jenkinsMode: true,
  //   includePending: true,
  //   useFullSuiteTitle: false,
  //   mochaFile: "reports/TEST-[hash].xml"
  // },
  retries: {
    openMode: 0,
    runMode: 2
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'https://www.saucedemo.com',
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalInteractiveRunEvents: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 180000,
    setupNodeEvents(on, config) {
      // require('cypress-xml-reporter/src/plugin') (on);
      allureWriter(on, config);
      return config;
      // return require('./cypress/plugins/index.js')(on, config)
    }
  },
})