import { Then } from "@badeball/cypress-cucumber-preprocessor";

import { sideBarAiScholar } from "../page_objects/aischolar_sideBar";

const SideBarAiScholar = new sideBarAiScholar();


Then("{user} should be able to see all sideBar components", () => {
  SideBarAiScholar.checkSideBarComponents()
});