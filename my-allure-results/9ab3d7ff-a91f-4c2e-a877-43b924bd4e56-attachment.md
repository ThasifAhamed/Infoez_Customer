# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Features.feature.spec.js >> verifying Infoez Application >> Verify Business owner page add business >> Example #1
- Location: .features-gen\features\Features.feature.spec.js:514:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//select[@aria-hidden=\'true\'])[2]/child::option').first()
    - locator resolved to <option value="$">$</option>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    35 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - banner [aria-hidden]:
        - generic:
          - link:
            - /url: /
            - generic:
              - generic: Infoez
              - generic: Find Local
          - navigation:
            - link:
              - /url: /search
              - text: Explore
            - link:
              - /url: /map
              - text: Near me
            - link:
              - /url: /how-it-works
              - text: How it works
            - link:
              - /url: /pricing
              - text: Pricing
          - generic:
            - button:
              - generic: R
              - generic: Ravi
      - main [aria-hidden]:
        - generic:
          - complementary:
            - link:
              - /url: /business/dashboard
              - text: Overview
            - link:
              - /url: /business/dashboard/businesses
              - text: My Businesses
            - link:
              - /url: /business/dashboard/leads
              - text: Leads
            - link:
              - /url: /business/dashboard/new
              - text: Add Business
          - generic:
            - generic:
              - heading [level=1]: Add a business
              - generic:
                - generic:
                  - text: Business name
                  - textbox: BLUE MOON
                - generic:
                  - text: Description
                  - textbox: All you can eat
                - generic:
                  - text: Category
                  - combobox:
                    - generic: Restaurants
                  - combobox [aria-hidden]
                - generic:
                  - text: Price range
                  - combobox [expanded]:
                    - generic: $$
                  - combobox [aria-hidden]
                - generic:
                  - text: City
                  - textbox
                - generic:
                  - text: Address
                  - textbox
                - generic:
                  - text: Phone
                  - textbox
                - generic:
                  - text: Email
                  - textbox
                - generic:
                  - text: Website
                  - textbox
                - generic:
                  - text: Hours
                  - textbox:
                    - /placeholder: Mon-Sun 9AM–9PM
                - generic:
                  - text: Services (comma separated)
                  - textbox:
                    - /placeholder: Haircut, Coloring, Bridal
                - generic:
                  - generic:
                    - generic:
                      - text: Location coordinates (optional)
                      - paragraph: Helps customers find you on the map & near-me search.
                    - button: Use my location
                  - generic:
                    - spinbutton
                    - spinbutton
                - generic:
                  - text: Photos
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic: Drag & drop photos here
                          - paragraph: JPG, PNG, WEBP — up to 8MB each · Max 8
                        - generic:
                          - button: Choose files
                          - button: Use camera
                - generic:
                  - button: Create business
                  - paragraph: New listings require admin approval before going live.
      - contentinfo [aria-hidden]:
        - generic:
          - generic:
            - generic: Infoez
            - paragraph: Find Local. Choose Better. The trusted directory for verified local businesses and services.
          - generic:
            - generic: Discover
            - list:
              - listitem:
                - link:
                  - /url: /search
                  - text: All Businesses
              - listitem:
                - link:
                  - /url: /search?featured=true
                  - text: Featured
              - listitem:
                - link:
                  - /url: /search?sort=rating
                  - text: Top Rated
          - generic:
            - generic: For Business
            - list:
              - listitem:
                - link:
                  - /url: /register?role=business_owner
                  - text: Add your business
              - listitem:
                - link:
                  - /url: /pricing
                  - text: Pricing plans
              - listitem:
                - link:
                  - /url: /how-it-works
                  - text: How claims work
          - generic:
            - generic: Company
            - list:
              - listitem:
                - link:
                  - /url: /how-it-works
                  - text: How it works
              - listitem:
                - link:
                  - /url: /pricing
                  - text: Pricing
              - listitem:
                - link:
                  - /url: /business/dashboard/new
                  - text: Contact
        - generic:
          - generic:
            - paragraph: © 2026 Infoez. All rights reserved.
            - paragraph: Find Local. Choose Better.
      - region "Notifications alt+T"
  - listbox [ref=e1]:
    - option "$" [ref=e2]
    - option "$$" [active] [selected] [ref=e5]
    - option "$$$" [ref=e11]
    - option "$$$$" [ref=e14]
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
  18 | 
  19 |         this.Category_DropDown = page.locator("(//select[@aria-hidden='true'])[1]")
  20 |         this.Price_DropDown_Button = page.locator("(//button[@role='combobox'])[2]")
  21 | 
  22 |         this.AllPrice_Options = page.locator("(//select[@aria-hidden='true'])[2]/child::option")
  23 |         this.Price_DropDown = page.locator("(//select[@aria-hidden='true'])[2]")
  24 |     }
  25 | 
  26 |     async click_profile_Icon(){
  27 |         await expect(this.HomePage_Text).toBeVisible({timeout:10000})
  28 |         await this.click(this.profile_icon)
  29 |     }
  30 | 
  31 |     async select_Business_Option(){
  32 |         await this.Business_Option.waitFor({ state: "visible", timeout: 10000})
  33 |         await this.click(this.Business_Option)
  34 |         await expect(this.Business_dashboard_Title).toBeVisible({timeout:10000})
  35 |         await this.click(this.AddBusiness_Button)
  36 |     }
  37 | 
  38 |     async Add_business_Page(){
  39 |         await expect(this.AddBusiness_Text).toBeVisible({timeout:10000})
  40 |     }
  41 | 
  42 |     async enter_Business_Name(Business_Name){
  43 |         await expect(this.Business_Name_Box).toBeVisible({timeout:10000})
  44 |         await this.fill(this.Business_Name_Box, Business_Name)
  45 |         await expect(this.Business_Name_Box).toHaveValue(Business_Name)
  46 |     }
  47 |     
  48 |     async enter_Discription_Box(Description){
  49 |         await expect(this.Business_Discription_Box).toBeVisible({timeout:10000})
  50 |         await this.fill(this.Business_Discription_Box, Description)
  51 |         await expect(this.Business_Discription_Box).toHaveValue(Description)
  52 |     }
  53 | 
  54 |     async selct_Category_DropDown_Option(Options){
  55 |         await this.single_Select_DropDow(this.Category_DropDown,Options)
  56 |         await expect(this.Category_DropDown.locator('option:checked')).toHaveText(Options)
  57 |     }
  58 | 
  59 |     async Price_DropDown_Option() {
  60 | 
  61 |         const AllPrice_Options  = this.AllPrice_Options 
  62 |         const count = await AllPrice_Options.count()
  63 | 
  64 |         for(let i=0; i<count; i++){
  65 |             const option = AllPrice_Options.nth(i)
  66 |             const text = await option.innerText()
  67 |             console.log(text)
  68 | 
  69 |             if(text.includes("$")){
  70 |                 await this.click(this.Price_DropDown_Button)
  71 |                 await option.click()
  72 |             }
  73 |         }
  74 |         
> 75 |         
     |                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  76 |     }
  77 | 
  78 | 
  79 | 
  80 | 
  81 | 
  82 | 
  83 | 
  84 | }
```