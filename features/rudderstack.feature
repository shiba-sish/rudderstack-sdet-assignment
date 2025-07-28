Feature: Rudderstack Basic Flow

  Scenario: Validate event delivery from HTTP source to Webhook destination
    Given I log in to Rudderstack dashboard
    And I navigate to the Connections page
    And I fetch the Data Plane URL
    And I copy the Write Key from the HTTP Source
    When I send a test event using API
    Then I should see the event count in the Webhook Destination
