@Login
Feature: Login

  @TC_001
  Scenario Outline: User login to the system with valid account
    Given user opens Login page
    When user enters user name as '<username>' and password as '<password>'
    And user clicks on "Login" button
    Then user must see menu button

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | performance_glitch_user | secret_sauce |

  @TC_002
  Scenario Outline: User login to the system with locked account
    Given user opens Login page
    When user enters user name as '<username>' and password as '<password>'
    And user clicks on "Login" button
    Then user must see username and password fields are highlighted
    And user must see block message

    Examples: 
      | username        | password     |
      | locked_out_user | secret_sauce |
