import { defineParameterType } from "@badeball/cypress-cucumber-preprocessor";

defineParameterType({
  name: "user",
  regexp: /Hilmi|Fares|Amine|Wessim|He|he|She|she/,
  transformer:user =>(user),
})