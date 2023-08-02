# Cypress base source code

# Cypress Automation Test Guideline

Behavioural Driven Development **(BDD)** automation framework using Javascript, Cypress, Cucumber

## Tools and Technologies Used
1. Language: Javascript
2. Automation Tool: Cypress
3. Follows "Page Object Model"
4. Supports multiple browsers and no need to download drivers manually


## Features of Framework
1. Browser (Chrome/Firefox) can be configured at run time from command line (or Continuous Integration tool, if configured).
2. Screenshot would be taken if any scenario failed and saved under **screenshots** folder.


## Project Structure
![project-structure](cypress/fixtures/images/project_structure.png)

**cypress.config.js** : Cypress configuration and settings

**jsconfig.json** : Javascript configuration and settings

**package.json** : Project configuration and settings

**README.md** : Documentation include guideline, coding convention, etc.

**folder: fixtures** : Test data and input

**folder: download** : The download files will be stored here

**folder: screenshots** : Scenario failed screenshots will be stored here

**folder: PageObject** : It contains all page objects files.



# Setting Up Project

## Installing necessary tools

1) Clone automation source by using either **SourceTree** or **GitExtensions** for your convenience, steps are as below:

   1.1) Follow this link (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and create an access token
   
   1.2) To clone code, execute following command: 
   
      **$git clone https://github.com/myngo-ptn/cypressF24.git** 
   
   1.3) Enter your username and use the access token as password!!
   
2) Install Visual Studio Code at: https://code.visualstudio.com/download

3) Create a package.json file to specify some of the project’s attributes. These attributes include the project’s name, initial version, and description. (Press Enter to skip each attribute)

    **$ npm init**

4) Install cypress package:

    **$ npm install cypress --save-dev**

## Test Execution
Every cucumber test case MUST have a tag name, for e.g. @TC_001
   ![tag_name](cypress/fixtures/images/tag_name.png)

To run all available test cases (all tags) in automation project, execute following command:

   **$ npx cypress open**

To run tests headlessly (this mode is used for executing test in background - not open web browser):

   **$ npm cypress run**


