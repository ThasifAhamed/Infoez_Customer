Feature: verifying Infoez Application

Background:
    Given User navigate to the Infoez Login page


#Create New User Account Page:
Scenario Outline: Verify that user can create own account

        When User is on the Login page, they click the Create One link and are navigated to the Registration page.
        And User selects the Customer radio button
        And User enter name "<Name>" in full name field
        And User enter email "<Email>" in email field
        And User enter phone number "<Number>" in phone number field
        And User enter password "<Password>" in password field
        And User click on create account button 
        Then User should see the "<Result>"

        Examples:
            | Name      | Email                 | Number        |Password       |Result                   |
            |           |thasif26@gmail.com     | 9876543210    |admin1         |Name HTML Warning        |
            |Thasif     |thasif12345            | 9876543210    |admin1         |Email HTML Warning       |
            |Thasif     |                       | 9876543210    |admin1         |Email HTML Warning       |
            |Thasif     |thasif26@gmail.com     |               |admin1         |Welcome Alert            |
            |Thasif1    |thasif26@gmail.com     | 9876543210    |admin2         |Welcome Alert            |

#Login Page

Scenario Outline: Verify successful login with valid credentials

    When User enter email "<Email>" into email field
    And User enter password "<Password>" into password field
    And User clicked on Sign In button
    Then User should be redirected to Home page
    And User should view successful alert popup

    Examples:
        | Email               | Password     |
        | customer@infoez.com | Customer@123 |


Scenario Outline: Verify unsuccessful login with invalid credentials

    When User enter email "<Email>" into email field
    And User enter password "<Password>" into password field
    And User clicked on Sign In button
    Then User should get proper warning alert popup "<Warning>"

    Examples:
        | Email                | Password      | Warning             |
        | customer@infoez.com  | Customer@1231 | Invalid credentials |
        | customer1@infoez.com | Customer@123  | Invalid credentials |

Scenario: Verify login with empty credentials

     When User clicked on Sign In button
     Then User should get proper html warning alert popup 

#Home Page:
Scenario: Verify that users can search and browse products without authentication
        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And the user enters "Biryani" in the food search field
        And the user enters "Hyderabad" in the location field
        Then the user clicks the Search button in home page

Scenario: Verify product search option without entering location 

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And the user enters "Cake" in the food search field 
        And the user clicks the Search button in home page 
        And user is able to view all cake shops available in the application not the other 
        Then User navigates back to HomePage 

Scenario: Verify location search option without entering product

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And the user enters "Chennai" in the location search field 
        And the user clicks the Search button in home page 
        And user is able to view all shops available in Chennai not othere locations
        Then User navigates back to HomePage 

Scenario: verify search button without entering product or location
        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And user leaves both search fields empty
        And the user clicks the Search button in home page 
        And User should view warning text
        Then User navigates back to HomePage 

Scenario: Verify Every category all directory option

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And user scrolls to the Every category all directory in HomePage 
        And User should view all the category cards
        Then User should able to click see all link in Every category cards

Scenario: Verify the Featured This Week option 

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And user scrolls to the Featured This Week in HomePage 
        And user is should able to view all the Featured this week cards
        And User should able to click on featured card
        Then User navigates back to HomePage 

Scenario: Verify the Top Rated Shops option

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And user scrolls to the Top Rated Shops in HomePage 
        And User should view all top rated cards
        And User should clicks on see all link 
        And User should view top rated selected in sort by dropdown and navigate back to home page


Scenario: Verify the Recently added shops option 

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And user scrolls to the Recently added shops in HomePage 
        And User should view all Recently added card
        Then User should click on each Recently added hotel cards 

#Explore Page:
Scenario Outline: Verify product secarch box in Explore Page

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User click on Explore link
        And User search product in "<Food>" product search box filed
        And User click on search button 
        Then User should see "<Result>" valid product result

        Examples:
            | Food      | Result        | 
            | Tea       | success       |
            | Cake      | success       |
            | burger    | fail          |


Scenario Outline: Verify location search box in Explore Page

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User click on Explore link
        And User search location in "<Location>" location box filed
        And User click on search button
        Then User should see "<Result>" valid location result

        Examples:
        | Location    | Result  |
        | Chennai     | success |
        | Bengaluru   | success |
        | Pondicherry | fail    |

   
Scenario Outline: Verify category dropdown in Explore Page

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User select option "<Options>" from category dropdown
        Then User should view "<Options>" "<Result>" valid category result

        Examples:
            | Options            | Result       | 
            | Restaurants        | success      | 
            | Cafes & Bakeries   | success      | 
            | Beauty & Spa       | success      |
            | Fitness & Wellness | fail         |
            | Auto & Repair      | success      |
            | Retail & Shopping  | success      |
            | Education          | success      |
            | Professional       | success      |
            | Beauty clinic      | success      |


Scenario Outline: Verify Sort by dropdown in Explore Page

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User select option "<Options>" from sort by dropdown
        Then User should view "<Result>" valid sort by result 

        Examples:
           | Options     | Result                        | 
           | Top rated   | Top rated result              |
           | Most popular| Most popular result           | 

Scenario Outline: Verify Min rating dropdown in Explore Page

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User select option "<Options>" from min raring dropdown
        Then User should view "<Result>" valid min rating result 

        Examples:
            | Options   | Result        | 
            | 4.0+      | 4.0+ result   | 
            | 4.5+      | 4.5+ result   | 

#Pricing Page:
Scenario: Verify Choose your plan in pricing Page without sign in

        When User clicks on pricing link without sign in
        And User clicks on Choose plan in all the cards
        Then User should able to see Please sign in to subscribe allert pop up

Scenario: Verify Choose your plan in pricing Page with sign in

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User click on pricing link
        Then User clicks on Choose plan in all the cards and see the pop up

#How it works Page:

Scenario Outline: Verify How it works page:

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User clicks on How it work link and check all cards are visible
        And User clicks on "<Button>" button 
        Then User should see the "<Result>" result

        Examples:
            | Button             | Result                        | 
            | Start exploring    | Start exploring page          | 
            | List your business | List your business page       |  

#Profile Page:
Scenario Outline: Verify Profile page with valid details

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User click on profile link
        And User should check both Email and Role cant be edit
        And User enter details "<Name>" "<Phone>" in respective boxs
        And User click on save changes button and see respective "<Result>" result
        Then User should see the update name in profile icon

        Examples:
            | Name      | Phone                 | Result        |
            | Balaji    | 9876543210            | success alert |
            | Ahamed    | 8796541230            | success alert |
            | Murali    | 879654123011111       | fail alert    |
            | Murali    | 987654321aasas        | fail alert    |


Scenario: Verify add favorites cards is visible 

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User search for valid food in search box and click on favorites icon
        And User should see success alert pop up in UI
        And User click on his profile and select favorites link 
        Then User should view the favorites card which he added before

Scenario: Verify add review cards is visible   

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User click on Explore link and enter valid location in search box
        And User Clicks on search button and user should see all valid cards
        And User clicks on first card and user wright review 
        And User should see success alert pop up
        Then User click on profile link and select My Reviews and see the latest review at top
        And User click on delete icon. When user click OK from alert pop up
        Then User should see success alert and card sould be removed from My Reviews 


Scenario: Verify My Enquiries page

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User click on Explore link and enter valid location in search box
        And User Clicks on search button and user should see all valid cards
        And User clicks on first card and clicks on my enquiries button 
        And User wright Message in to message box and clicks on send enquiries button
        And User should see Enquiries success alert pop up
        And Now user clicks on profile icon and select My Enquiries option
        Then user should see Enquiries card 


Scenario: Verify Notification page all cards are visible

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User clicks on profile icon and select Notification option
        And User click on Mark all read button
        Then User should see all the notifiation related cards 


Scenario: Verify Subscription page all cards are visible 

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User clicks on profile icon and select Subscription from the option
        And User need to check all cards are visible and click choose plan button
        Then User need to get success alert pop up 


Scenario: Verify Logout option woeking fine 

        When User enter email "customer@infoez.com" into email field
        And User enter password "Customer@123" into password field
        And User clicked on Sign In button
        And User clicks on profile icon in home page
        And User clicks on log out option 
        Then User should log out successfully and redirect to sign in page







        
         





























        

       











        

        







        

