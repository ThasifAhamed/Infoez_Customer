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
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//select[@aria-hidden=\'true\'])[2]')
    - locator resolved to <select tabindex="-1" aria-hidden="true">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    40 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
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
  1  | import {expect} from '@playwright/test'
  2  | 
  3  | export class BasePage{
  4  |     /** @param {import('@playwright/test').Page} page */ 
  5  |     constructor(page){
  6  |         this.page = page
  7  |     }
  8  | 
  9  |     //URL:
  10 |     async openApp(url){
  11 |         await this.page.goto(url);
  12 |     }
  13 | 
  14 |     //Fill:
  15 |     async fill(element, text){
  16 |         await element.fill(text);
  17 |     }
  18 | 
  19 |     //Click:
  20 | 
  21 |     async click(element) {
  22 |         await element.waitFor({ state: 'visible', timeout: 15000 });
  23 |         await element.click({ timeout: 15000 });
  24 |     }
  25 |     
  26 | 
  27 |     //Go Back page
  28 |     async goBack(){
  29 |         await this.page.goBack()
  30 |     }
  31 | 
  32 |     //Scroll:
  33 |     async scroll(element){
  34 |         await element.scrollIntoViewIfNeeded()
  35 |         await element.waitFor({ state: "visible" });
  36 |         await expect(element).toBeVisible()
  37 |     }
  38 | 
  39 |     //Scroll till top of the page 
  40 |     async scrollTillTop(){
  41 |         await this.page.evaluate(()=>window.scrollTo(0,0))
  42 |     }
  43 | 
  44 |     /** @param {import('@playwright/test').Locator} element */ 
  45 |     //HTML warning Text:
  46 |     async htmlWarning(elements) {
  47 |         const validationMessage = await elements.evaluate(el => el.validationMessage);
  48 |         console.log("Validation Message:", validationMessage);
  49 |         expect(validationMessage).not.toBe("");
  50 |         await elements.press("Escape");
  51 |     }
  52 | 
  53 |     //Confirm Dismiss Allert:
  54 | 
  55 |     async confirmAlert(text) {
  56 |         this.page.once("dialog", async dialog => {
  57 |             expect(dialog.type()).toBe("confirm");
  58 |             expect(dialog.message()).toContain(text);
  59 |             await dialog.accept();
  60 |         })
  61 |        
  62 |     }
  63 |     
  64 |     async Color(element){
  65 |         const color = await element.evaluate(element => {
  66 |             return getComputedStyle(element).backgroundColor;})
  67 |         console.log("background color:", color)
  68 |     }
  69 | 
  70 |     /** @param {import('@playwright/test').Locator} element */ 
  71 |     async single_Select_DropDow(element, text){
> 72 |         await element.selectOption(text)
     |                       ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  73 |     }
  74 | 
  75 | }
```