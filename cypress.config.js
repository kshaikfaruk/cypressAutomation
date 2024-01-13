const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelTojson =require('convert-excel-to-json')
const fs=require('fs')

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  on('task',{
    excelTojsonConvertor(filePath){
      const result=excelTojson({
        source: fs.readFileSync(filePath)
      });
      return result; 
    }
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  downloadsFolder: 'cypress/downloads',
  e2e: {
    specPattern:'cypress/integeration/examples/*.js',
    setupNodeEvents,
    retries: {
      runMode: 1,
      },
  },
});