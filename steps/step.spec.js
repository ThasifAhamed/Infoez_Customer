import { createBdd } from "playwright-bdd";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CreateUserPage } from "../pages/CreateUserPage";
import { ExplorePage } from "../pages/ExplorePage";
import { PricingPage } from "../pages/PricingPage";
import { HowItWorksPage } from "../pages/HowItWorksPage";
import { ProfilePage } from "../pages/ProfilePage";
import { MyReviewsPage } from "../pages/MyReviewsPage";
import { EnquiriesPage } from "../pages/EnquiriesPage";
import { NotificationPage } from "../pages/NotificationPage";
import { SubscriptionPage } from "../pages/SubscriptionPage"; 
import { LogoutPage } from "../pages/LogoutPage";

import { AddBusinessPage } from "../pages/AddBusinessPage";



const { Given, When, Then, Before } = createBdd();

/** @type {LoginPage} */
let loginPage;

/** @type {HomePage} */
let homePage;

/** @type {CreateUserPage} */
let createUserPage;

/** @type {ExplorePage} */
let explorePage;

/** @type {PricingPage} */
let pricingPage;

/** @type {HowItWorksPage} */
let howItWorksPage;

/** @type {ProfilePage} */
let profilePage;

/** @type {MyReviewsPage} */
let myReviewsPage;

/** @type {EnquiriesPage} */
let enquiriesPage;

/** @type {NotificationPage} */
let notificationPage;

/** @type {SubscriptionPage} */
let subscriptionPage;

/** @type {LogoutPage} */
let logoutPage;

/** @type {AddBusinessPage} */
let addBusinessPage;



Before(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  createUserPage = new CreateUserPage(page);
  explorePage = new ExplorePage(page);
  pricingPage = new PricingPage(page);
  howItWorksPage =  new HowItWorksPage(page);
  profilePage =  new ProfilePage(page);
  myReviewsPage =  new MyReviewsPage(page);
  enquiriesPage =  new EnquiriesPage(page);
  notificationPage =  new NotificationPage(page);
  subscriptionPage =  new SubscriptionPage(page);
  logoutPage =  new LogoutPage(page);

  addBusinessPage =  new AddBusinessPage(page);
})

// ----------------------------loginPage------------------------------//

Given('User navigate to the Infoez Login page', async ({}) => {
  await loginPage.browserLaunch("https://d2mojgetgp5xie.cloudfront.net/")
});

When('User enter email {string} into email field', async ({}, email) => {
  await loginPage.fill_Email(email)
});

When('User enter password {string} into password field', async ({}, password) => {
  await loginPage.fill_Password(password)
});

When('User clicked on Sign In button', async ({}) => {
  await loginPage.click_Signin()
});

Then('User should be redirected to Home page', async ({}) => {
  await loginPage.homepageTitle("Infoez — Find Local. Choose Better.")
});

Then('User should view successful alert popup', async ({}) => {
  await loginPage.verifyWelcomeAlert("Welcome back!")
});

Then('User should get proper warning alert popup {string}', async ({}, warning) => {
  await loginPage.verifyInvalidAlert(warning);
});

Then('User should get proper html warning alert popup', async ({}) => {
  await loginPage.verifyEmptyFields()
});

//--------------------------- Home Page ---------------------------//

When('the user enters {string} in the food search field', async ({}, food) => {
  await homePage.searchFood(food)
});

When('the user enters {string} in the location field', async ({}, city) => {
  await homePage.searchCity(city)
});

Then('the user clicks the Search button in home page', async ({}) => {
  await homePage.clicksearchButton()
});

When('user is able to view all cake shops available in the application not the other', async ({}) => {
  await homePage.searchresult_Cake()
});

Then('User navigates back to HomePage', async ({}) => {
  await homePage.goBack()
});

When('the user enters {string} in the location search field', async ({}, chennai) => {
  await homePage.searchChennai(chennai)
});

When('user is able to view all shops available in Chennai not othere locations', async ({}) => {
  await homePage.searchresult_Chennai()
});

When('user leaves both search fields empty', async ({}) => {
  await homePage.FoodSearchBox_Empty()
  await homePage.LocationSearchBox_Empty()
});

When('User should view warning text', async ({}) => {
  await homePage.enter_Food_Location_Warning()
});

When('user scrolls to the Every category all directory in HomePage', async ({}) => {
  await homePage.scroll_categoryText()
});

When('User should view all the category cards', async ({}) => {
  await homePage.all_category_cards_display()
});

When('User should able to click see all link in Every category cards', async ({}) => {
  await homePage.category_cards_click()
});

When('user scrolls to the Featured This Week in HomePage', async ({}) => {
  await homePage.scroll_till_Featured()
});

When('user is should able to view all the Featured this week cards', async ({}) => {
  await homePage.Featured_Titles_visible()
});

When('User should able to click on featured card', async ({}) => {
  await homePage.Featured_Card_click()
});


When('user scrolls to the Top Rated Shops in HomePage', async ({}) => {
  await homePage.scroll_Till_TopRatedShop()
});

When('User should view all top rated cards', async ({}) => {
  await homePage.TopRatedShop_Card()
});

When('User should clicks on see all link', async ({}) => {
  await homePage.click_SeeAll_TopShop()
});

When('User should view top rated selected in sort by dropdown and navigate back to home page', async ({}) => {
  await homePage.TopRated_Selected_In_SortBy("Top rated")
});

When('user scrolls to the Recently added shops in HomePage', async ({}) => {
  await homePage.scroll_Till_Recently_added()
});

When('User should view all Recently added card', async ({}) => {
  await homePage.view_all_recently_added_cards()
});

Then('User should click on each Recently added hotel cards', async ({}) => {
  await homePage.click_all_Recently_added_Cards()
});

//--------------------------- Create new user page: ---------------------------//

When('User is on the Login page, they click the Create One link and are navigated to the Registration page.', async ({}) => {
  await createUserPage.click_CreateOne()
});

When('User selects the Customer radio button', async ({}) => {
  await createUserPage.select_Customer_Radio()
});

When('User enter name {string} in full name field', async ({}, name) => {
  await createUserPage.enter_FullName(name)
});

When('User enter email {string} in email field', async ({}, email) => {

  if (email.includes('@') && email.includes('.')) {
    email = `thasif${Date.now()}@gmail.com`;
  }
  await createUserPage.enter_Email(email);
});

When('User enter phone number {string} in phone number field', async ({}, number) => {
  await createUserPage.enter_Number(number)
});

When('User enter password {string} in password field', async ({}, password) => {
  await createUserPage.enter_Password(password)
});

When('User click on create account button', async ({}) => {
  await createUserPage.click_Create_Account_Button()
});

Then('User should see the {string}', async ({}, Result) => {
  await createUserPage.warning_Result(Result)
});


//---------------------------  Explore Page  ---------------------------//

When('User click on Explore link', async ({}) => {
  await explorePage.click_Explore_Link("https://d2mojgetgp5xie.cloudfront.net/search")
});

When('User search product in {string} product search box filed', async ({}, Food) => {
  await explorePage.search_Food(Food)
});

When('User click on search button', async ({}) => {
  await explorePage.click_search_Button()
});

Then('User should see {string} valid product result', async ({}, Result) => {
  await explorePage.Food_result(Result);
});  

When('User search location in {string} location box filed',async ({}, Location) => {
  await explorePage.search_City(Location);
});

Then('User should see {string} valid location result',async ({}, Result) => {
  await explorePage.Location_result(Result)
});

When('User select option {string} from category dropdown', async ({}, Options) => {
  await explorePage.slect_Category_options_DD(Options)
});

Then('User should view {string} {string} valid category result', async ({}, Options, Result) => {
  await explorePage.verify_Category_Result(Options, Result)
});

When('User select option {string} from sort by dropdown', async ({}, Options) => {
  await explorePage.slect_Sortby_options_DD(Options)
});

Then('User should view {string} valid sort by result', async ({}, Result) => {
  await explorePage.Sortby_rating(Result)
});

When('User select option {string} from min raring dropdown', async ({}, Options) => {
  await explorePage.slect_MinRaring_options_DD(Options)
});

Then('User should view {string} valid min rating result', async ({}, Result) => {
  await explorePage.Check_Rating_Card_Visible(Result)
});

//---------------------------  Pricing Page  ---------------------------//

When('User clicks on pricing link without sign in', async ({}) => {
  await pricingPage.click_Pricing_Link()
});

When('User clicks on Choose plan in all the cards', async ({}) => {
  await pricingPage.click_choose_plans()
});

Then('User should able to see Please sign in to subscribe allert pop up', async ({}) => {
  await pricingPage.verify_subscribe_Warning_alert()
});

When('User click on pricing link', async ({}) => {
  await pricingPage.click_Pricing_Link()
  
});

Then('User clicks on Choose plan in all the cards and see the pop up', async ({}) => {
  await pricingPage.click_choose_plans_After()
});

//---------------------------  How it works Page  ---------------------------//

When('User clicks on How it work link and check all cards are visible', async ({}) => {
  await howItWorksPage.click_HowItWork_Link()
  await howItWorksPage.check_AllCards_Visible()
});

When('User clicks on {string} button', async ({}, Button) => {
  await howItWorksPage.click_buttons(Button)
});

Then('User should see the {string} result', async ({}, Result) => {
  await howItWorksPage.result(Result)
});

//---------------------------  Profile Page  ---------------------------//

When('User click on profile link', async ({}) => {
  await profilePage.click_Profile_link()
});

When('User should check both Email and Role cant be edit', async ({}) => {
  await profilePage.check_email_number_NOT_Editable()
});

When('User enter details {string} {string} in respective boxs', async ({}, Name, Phone) => {
  await profilePage.Enter_Name_Number(Name,Phone)
});

Then('User click on save changes button and see respective {string} result', async ({}, Result) => {
  await profilePage.click_save_button(Result)
});

Then('User should see the update name in profile icon', async ({}) => {
  await profilePage.verify_updated_profile_name()
});

//---------------------------  favorites Page  ---------------------------//

When('User search for valid food in search box and click on favorites icon', async ({}) => {
  await profilePage.search_food("cake")
});

When('User should see success alert pop up in UI', async ({}) => {
  await profilePage.product_Added()
});

When('User click on his profile and select favorites link', async ({}) => {
  await profilePage.select_favorites_link()
});

Then('User should view the favorites card which he added before', async ({}) => {
  await profilePage.verify_favorite_card("cake");
});

//---------------------------  My Reviews Page  ---------------------------//

When('User click on Explore link and enter valid location in search box', async ({}) => {
  await myReviewsPage.Click_Explore_And_Enter_Location("Chennai")
});

When('User Clicks on search button and user should see all valid cards', async ({}) => {
  await myReviewsPage.Click_Search_And_See_Cards("Chennai")
});

When('User clicks on first card and user wright review', async ({}) => {
  await myReviewsPage.scroll_WrightReview("Good Food in Chennai")
});

When('User should see success alert pop up', async ({}) => {
  await myReviewsPage.reviewPosted_Alert()
});

Then('User click on profile link and select My Reviews and see the latest review at top', async ({}) => {
  await myReviewsPage.click_profile_icon("Good Food in Chennai")
});

Then('User click on delete icon. When user click OK from alert pop up', async ({}) => {
  await myReviewsPage.click_Delete_Icon("Good Food in Chennai", "Delete this review?")
});

Then('User should see success alert and card sould be removed from My Reviews', async ({}) => {
  await myReviewsPage.verifyReviewRemoved("Good Food in Chennai")
});


//---------------------------  My enquiries Page  ---------------------------//

When('User clicks on first card and clicks on my enquiries button', async ({}) => {
  await enquiriesPage.Click_enquiries()
});

When('User wright Message in to message box and clicks on send enquiries button', async ({}) => {
  await enquiriesPage.enter_message("Good Morning Sir")
});

When('User should see Enquiries success alert pop up', async ({}) => {
  await enquiriesPage.success_Message("Enquiry sent")
});

When('Now user clicks on profile icon and select My Enquiries option', async ({}) => {
  await enquiriesPage.click_Profile_Icon()
});

Then('user should see Enquiries card', async ({}) => {
  await enquiriesPage.Enquiries_Message_Card("Sir")
});

//---------------------------  Notification Page  ---------------------------//

When('User clicks on profile icon and select Notification option', async ({}) => {
  await notificationPage.click_Notification()
});

When('User click on Mark all read button', async ({}) => {
  await notificationPage.click_MarkAllRead_Button()
});

Then('User should see all the notifiation related cards', async ({}) => {
  await notificationPage.All_Notification_Card("Rejected")
});

//---------------------------  Subscription Page  ---------------------------//

When('User clicks on profile icon and select Subscription from the option', async ({}) => {
  await subscriptionPage.click_profile_Subscription()
});

When('User need to check all cards are visible and click choose plan button', async ({}) => {
  await subscriptionPage.check_allcards_Visible()
  await subscriptionPage.click_All_ChoosePlans()
});

Then('User need to get success alert pop up', async ({}) => {
  await subscriptionPage.sucessMessage_Visible()
});

//---------------------------  Logout Page  ---------------------------//

When('User clicks on profile icon in home page', async ({}) => {
  await logoutPage.click_on_ProfileIcon()
});

When('User clicks on log out option', async ({}) => {
  await logoutPage.click_Logout()
});

Then('User should log out successfully and redirect to sign in page', async ({}) => {
  await logoutPage.check_successfully_logedout()
});

//---------------------------  Add Business page ---------------------------//

When('User clicks on profile icon in Business page', async ({}) => {
  await addBusinessPage.click_profile_Icon()
});

When('User select Business dashboard and clicks on add Business', async ({}) => {
  await addBusinessPage.select_Business_Option()

});

Then('User should navigated to Add a business page', async ({}) => {
  await addBusinessPage.Add_business_Page()
});


Then('User added Business name {string} in Business name box', async ({}, Business_Name) => {
   await addBusinessPage.enter_Business_Name(Business_Name)
});

Then('User added Description {string} in Description box', async ({}, Description) => {
  await addBusinessPage.enter_Discription_Box(Description)
});

Then('User select Category option {string} from Category drop down', async ({}, Options) => {
  await addBusinessPage.selct_Category_DropDown_Option(Options)
});

Then('User select Price range option {string} from Price drop down', async ({}, Price_Oprion) => {
  await addBusinessPage.Price_DropDown_Option(Price_Oprion)
});

Then('User enter city name {string} city name box', async ({}, arg) => {
  // Step: And User enter city name "Chennai" city name box
  // From: features\Features.feature:350:9
});

Then('User enter Address {string} in Address box', async ({}, arg) => {
  // Step: And User enter Address "No 1. Alen street" in Address box
  // From: features\Features.feature:351:9
});

Then('User enter Phone {string}  and {string} inside Phone and email box', async ({}, arg, arg1) => {
  // Step: And User enter Phone "9876541230"  and "bluemoon@gmail.com" inside Phone and email box
  // From: features\Features.feature:352:9
});

Then('User select location then user should see success alert', async ({}) => {
  // Step: And User select location then user should see success alert
  // From: features\Features.feature:353:9
});

Then('User upload picture', async ({}) => {
  // Step: And User upload picture
  // From: features\Features.feature:354:9
});

Then('User clicks on create business and user should see success alert', async ({}) => {
  // Step: Then User clicks on create business and user should see success alert
  // From: features\Features.feature:355:9
});








