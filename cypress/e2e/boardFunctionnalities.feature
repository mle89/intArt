@indev
Feature: E2E - Board functionalies
as an admin user i want to login and verify all board functionnalities

 
  Background: login
    Given Hilmi is logged in as "admin"

    Scenario: E2E - verifying all borad functionnalities
    When he is connected
    Then he should be able to see all sideBar components