Feature: Booking flights on allegiant
    Scenario: Search, select, and book a flight (one way) with additional options like hotel and rental car 
            
        Given I am on the homepage
        When I enter departure and arrival cities, dates, and other flight details
        Then I reach the flights page
        And I can select a flight
        Then I can select a bundle
        And I can provide personal details of travelers
        Then I can select seats
        And I can select any bags and extras needed
        Then I can optionally select a hotel
        And I can optionally select a rental car
        Then I can proceed to the payment section