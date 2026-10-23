# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> verifying Infoez Application >> Verify Business owner page add business >> Example #1
- Location: .features-gen\features\Features.feature.spec.js:514:9

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('//button[.=\'Select category\']/following-sibling::select')
Expected: "Restaurants"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveValue" locator('//button[.=\'Select category\']/following-sibling::select') with timeout 5000ms
  - waiting for locator('//button[.=\'Select category\']/following-sibling::select')

```

```yaml
- banner:
  - link "Infoez Find Local":
    - /url: /
  - navigation:
    - link "Explore":
      - /url: /search
    - link "Near me":
      - /url: /map
    - link "How it works":
      - /url: /how-it-works
    - link "Pricing":
      - /url: /pricing
  - button "R Ravi"
- main:
  - complementary:
    - link "Overview":
      - /url: /business/dashboard
    - link "My Businesses":
      - /url: /business/dashboard/businesses
    - link "Leads":
      - /url: /business/dashboard/leads
    - link "Add Business":
      - /url: /business/dashboard/new
  - heading "Add a business" [level=1]
  - text: Business name
  - textbox: BLUE MOON
  - text: Description
  - textbox: All you can eat
  - text: Category
  - combobox: Restaurants
  - text: Price range
  - combobox: $$
  - text: City
  - textbox
  - text: Address
  - textbox
  - text: Phone
  - textbox
  - text: Email
  - textbox
  - text: Website
  - textbox
  - text: Hours
  - textbox "Mon-Sun 9AM–9PM"
  - text: Services (comma separated)
  - textbox "Haircut, Coloring, Bridal"
  - text: Location coordinates (optional)
  - paragraph: Helps customers find you on the map & near-me search.
  - button "Use my location"
  - spinbutton "Latitude"
  - spinbutton "Longitude"
  - text: Photos Drag & drop photos here
  - paragraph: JPG, PNG, WEBP — up to 8MB each · Max 8
  - button "Choose files"
  - button "Use camera"
  - button "Create business"
  - paragraph: New listings require admin approval before going live.
- contentinfo:
  - text: Infoez
  - paragraph: Find Local. Choose Better. The trusted directory for verified local businesses and services.
  - text: Discover
  - list:
    - listitem:
      - link "All Businesses":
        - /url: /search
    - listitem:
      - link "Featured":
        - /url: /search?featured=true
    - listitem:
      - link "Top Rated":
        - /url: /search?sort=rating
  - text: For Business
  - list:
    - listitem:
      - link "Add your business":
        - /url: /register?role=business_owner
    - listitem:
      - link "Pricing plans":
        - /url: /pricing
    - listitem:
      - link "How claims work":
        - /url: /how-it-works
  - text: Company
  - list:
    - listitem:
      - link "How it works":
        - /url: /how-it-works
    - listitem:
      - link "Pricing":
        - /url: /pricing
    - listitem:
      - link "Contact":
        - /url: /business/dashboard/new
  - paragraph: © 2026 Infoez. All rights reserved.
  - paragraph: Find Local. Choose Better.
- region "Notifications alt+T"
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class AddBusinessPage extends BasePage{
  5  | 
  6  |     /** @param {import('@playwright/test').Page} page */
  7  |     constructor(page) {
  8  |         super(page)
  9  |         this.HomePage_Text = page.locator("//h1[contains(text(),'The')]")
  10 |         this.profile_icon = page.locator("//span[contains(@class,'flex h-full w-full items-center justify')]")
  11 |         this.Business_Option = page.locator("//div[@data-testid='menu-business-dashboard']")
  12 |         this.Business_dashboard_Title = page.locator("//h1[.='Business dashboard']")
  13 |         this.AddBusiness_Button = page.locator("//a[normalize-space()='Add Business']")
  14 |         this.AddBusiness_Text = page.locator("//h1[normalize-space()='Add a business']")
  15 | 
  16 |         this.Business_Name_Box = page.locator("//input[@data-testid='biz-name']")
  17 |         this.Business_Discription_Box = page.locator("//textarea[contains(@data-testid,'biz-desc')]")
  18 |         this.Category_DropDown = page.locator("//button[.='Select category']/following-sibling::select")
  19 |     }
  20 | 
  21 |     async click_profile_Icon(){
  22 |         await expect(this.HomePage_Text).toBeVisible({timeout:10000})
  23 |         await this.click(this.profile_icon)
  24 |     }
  25 | 
  26 |     async select_Business_Option(){
  27 |         await this.Business_Option.waitFor({ state: "visible", timeout: 10000})
  28 |         await this.click(this.Business_Option)
  29 |         await expect(this.Business_dashboard_Title).toBeVisible({timeout:10000})
  30 |         await this.click(this.AddBusiness_Button)
  31 |     }
  32 | 
  33 |     async Add_business_Page(){
  34 |         await expect(this.AddBusiness_Text).toBeVisible({timeout:10000})
  35 |     }
  36 | 
  37 |     async enter_Business_Name(Business_Name){
  38 |         await expect(this.Business_Name_Box).toBeVisible({timeout:10000})
  39 |         await this.fill(this.Business_Name_Box, Business_Name)
  40 |         await expect(this.Business_Name_Box).toHaveValue(Business_Name)
  41 |     }
  42 |     
  43 |     async enter_Discription_Box(Description){
  44 |         await expect(this.Business_Discription_Box).toBeVisible({timeout:10000})
  45 |         await this.fill(this.Business_Discription_Box, Description)
  46 |         await expect(this.Business_Discription_Box).toHaveValue(Description)
  47 |     }
  48 | 
  49 |     async selct_Category_DropDown_Option(Options){
  50 |         await this.single_Select_DropDow(this.Category_DropDown,Options)
  51 |         await expect(this.Category_DropDown).toHaveValue(Options)
  52 |     }
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | }
     |                                                     ^ Error: expect(locator).toHaveValue(expected) failed
```