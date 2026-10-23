# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> verifying Infoez Application >> Verify Business owner page add business
- Location: .features-gen\features\Features.feature.spec.js:512:7

# Error details

```
TypeError: addBusinessPage.select_Business_Option(...) is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Infoez Find Local" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e11]:
          - generic [ref=e12]: Infoez
          - generic [ref=e13]: Find Local
      - navigation [ref=e14]:
        - link "Explore" [ref=e15] [cursor=pointer]:
          - /url: /search
        - link "Near me" [ref=e16] [cursor=pointer]:
          - /url: /map
        - link "How it works" [ref=e17] [cursor=pointer]:
          - /url: /how-it-works
        - link "Pricing" [ref=e18] [cursor=pointer]:
          - /url: /pricing
      - button "R Ravi" [active] [ref=e20] [cursor=pointer]:
        - generic [ref=e21]: R
        - generic [ref=e23]: Ravi
  - main [ref=e24]:
    - generic [ref=e25]:
      - complementary [ref=e26]:
        - link "Overview" [ref=e27] [cursor=pointer]:
          - /url: /business/dashboard
        - link "My Businesses" [ref=e33] [cursor=pointer]:
          - /url: /business/dashboard/businesses
        - link "Leads" [ref=e39] [cursor=pointer]:
          - /url: /business/dashboard/leads
        - link "Add Business" [ref=e43] [cursor=pointer]:
          - /url: /business/dashboard/new
      - generic [ref=e46]:
        - generic [ref=e47]: Overview
        - heading "Business dashboard" [level=1] [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e50]:
            - generic [ref=e51]: Businesses
            - generic [ref=e58]: "0"
          - generic [ref=e59]:
            - generic [ref=e60]: Leads
            - generic [ref=e67]: "0"
          - generic [ref=e68]:
            - generic [ref=e69]: Total reviews
            - generic [ref=e73]: "0"
          - generic [ref=e74]:
            - generic [ref=e75]: Total views
            - generic [ref=e80]: "0"
        - generic [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]: Your businesses
            - paragraph [ref=e85]: No businesses yet.
          - generic [ref=e86]:
            - generic [ref=e87]: Recent leads
            - paragraph [ref=e89]: No leads yet.
  - contentinfo [ref=e90]:
    - generic [ref=e91]:
      - generic [ref=e92]:
        - generic [ref=e93]: Infoez
        - paragraph [ref=e99]: Find Local. Choose Better. The trusted directory for verified local businesses and services.
      - generic [ref=e100]:
        - generic [ref=e101]: Discover
        - list [ref=e102]:
          - listitem [ref=e103]:
            - link "All Businesses" [ref=e104] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e105]:
            - link "Featured" [ref=e106] [cursor=pointer]:
              - /url: /search?featured=true
          - listitem [ref=e107]:
            - link "Top Rated" [ref=e108] [cursor=pointer]:
              - /url: /search?sort=rating
      - generic [ref=e109]:
        - generic [ref=e110]: For Business
        - list [ref=e111]:
          - listitem [ref=e112]:
            - link "Add your business" [ref=e113] [cursor=pointer]:
              - /url: /register?role=business_owner
          - listitem [ref=e114]:
            - link "Pricing plans" [ref=e115] [cursor=pointer]:
              - /url: /pricing
          - listitem [ref=e116]:
            - link "How claims work" [ref=e117] [cursor=pointer]:
              - /url: /how-it-works
      - generic [ref=e118]:
        - generic [ref=e119]: Company
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "How it works" [ref=e122] [cursor=pointer]:
              - /url: /how-it-works
          - listitem [ref=e123]:
            - link "Pricing" [ref=e124] [cursor=pointer]:
              - /url: /pricing
          - listitem [ref=e125]:
            - link "Contact" [ref=e126] [cursor=pointer]:
              - /url: /business/dashboard
    - generic [ref=e128]:
      - paragraph [ref=e129]: © 2026 Infoez. All rights reserved.
      - paragraph [ref=e130]: Find Local. Choose Better.
  - region "Notifications alt+T"
```

# Test source

```ts
  375 |   await myReviewsPage.Click_Explore_And_Enter_Location("Chennai")
  376 | });
  377 | 
  378 | When('User Clicks on search button and user should see all valid cards', async ({}) => {
  379 |   await myReviewsPage.Click_Search_And_See_Cards("Chennai")
  380 | });
  381 | 
  382 | When('User clicks on first card and user wright review', async ({}) => {
  383 |   await myReviewsPage.scroll_WrightReview("Good Food in Chennai")
  384 | });
  385 | 
  386 | When('User should see success alert pop up', async ({}) => {
  387 |   await myReviewsPage.reviewPosted_Alert()
  388 | });
  389 | 
  390 | Then('User click on profile link and select My Reviews and see the latest review at top', async ({}) => {
  391 |   await myReviewsPage.click_profile_icon("Good Food in Chennai")
  392 | });
  393 | 
  394 | Then('User click on delete icon. When user click OK from alert pop up', async ({}) => {
  395 |   await myReviewsPage.click_Delete_Icon("Good Food in Chennai", "Delete this review?")
  396 | });
  397 | 
  398 | Then('User should see success alert and card sould be removed from My Reviews', async ({}) => {
  399 |   await myReviewsPage.verifyReviewRemoved("Good Food in Chennai")
  400 | });
  401 | 
  402 | 
  403 | //---------------------------  My enquiries Page  ---------------------------//
  404 | 
  405 | When('User clicks on first card and clicks on my enquiries button', async ({}) => {
  406 |   await enquiriesPage.Click_enquiries()
  407 | });
  408 | 
  409 | When('User wright Message in to message box and clicks on send enquiries button', async ({}) => {
  410 |   await enquiriesPage.enter_message("Good Morning Sir")
  411 | });
  412 | 
  413 | When('User should see Enquiries success alert pop up', async ({}) => {
  414 |   await enquiriesPage.success_Message("Enquiry sent")
  415 | });
  416 | 
  417 | When('Now user clicks on profile icon and select My Enquiries option', async ({}) => {
  418 |   await enquiriesPage.click_Profile_Icon()
  419 | });
  420 | 
  421 | Then('user should see Enquiries card', async ({}) => {
  422 |   await enquiriesPage.Enquiries_Message_Card("Sir")
  423 | });
  424 | 
  425 | //---------------------------  Notification Page  ---------------------------//
  426 | 
  427 | When('User clicks on profile icon and select Notification option', async ({}) => {
  428 |   await notificationPage.click_Notification()
  429 | });
  430 | 
  431 | When('User click on Mark all read button', async ({}) => {
  432 |   await notificationPage.click_MarkAllRead_Button()
  433 | });
  434 | 
  435 | Then('User should see all the notifiation related cards', async ({}) => {
  436 |   await notificationPage.All_Notification_Card("Rejected")
  437 | });
  438 | 
  439 | //---------------------------  Subscription Page  ---------------------------//
  440 | 
  441 | When('User clicks on profile icon and select Subscription from the option', async ({}) => {
  442 |   await subscriptionPage.click_profile_Subscription()
  443 | });
  444 | 
  445 | When('User need to check all cards are visible and click choose plan button', async ({}) => {
  446 |   await subscriptionPage.check_allcards_Visible()
  447 |   await subscriptionPage.click_All_ChoosePlans()
  448 | });
  449 | 
  450 | Then('User need to get success alert pop up', async ({}) => {
  451 |   await subscriptionPage.sucessMessage_Visible()
  452 | });
  453 | 
  454 | //---------------------------  Logout Page  ---------------------------//
  455 | 
  456 | When('User clicks on profile icon in home page', async ({}) => {
  457 |   await logoutPage.click_on_ProfileIcon()
  458 | });
  459 | 
  460 | When('User clicks on log out option', async ({}) => {
  461 |   await logoutPage.click_Logout()
  462 | });
  463 | 
  464 | Then('User should log out successfully and redirect to sign in page', async ({}) => {
  465 |   await logoutPage.check_successfully_logedout()
  466 | });
  467 | 
  468 | //---------------------------  Add Business page ---------------------------//
  469 | 
  470 | When('User clicks on profile icon in Business page', async ({}) => {
  471 |   await addBusinessPage.click_profile_Icon()
  472 | });
  473 | 
  474 | When('User select Business dashboard and clicks on add Business', async ({}) => {
> 475 |   await addBusinessPage.select_Business_Option()()
      |                                                 ^ TypeError: addBusinessPage.select_Business_Option(...) is not a function
  476 | });
  477 | 
  478 | Then('User should navigated to Add a business page', async ({}) => {
  479 |   // Step: Then User should navigated to Add a business page
  480 |   // From: features\Features.feature:344:9
  481 | });
  482 | 
  483 | 
  484 | 
  485 | 
  486 | 
  487 | 
  488 | 
  489 | 
  490 | 
```