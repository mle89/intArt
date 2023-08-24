import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
const  createEsbuildPlugin = require ('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;


export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
env :{
  dev : {
    BASE_URL :  'http://51.210.100.92:8080/'
  } 
    }
});
