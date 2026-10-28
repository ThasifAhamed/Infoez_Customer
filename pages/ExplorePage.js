import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ExplorePage extends BasePage{

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page);
        this.Explore_Link = page.locator("//a[normalize-space()='Explore']")
        this.Explore_Search_Box = page.locator("//input[@placeholder='Search…']")
        this.Explore_searchButton = page.locator("//button[normalize-space()='Search']")
        this.Product_Result = page.locator("//div[contains(@class,'grid grid-cols-1')]//a//h3")
        this.Product_Result_not_found = page.locator("//h3[normalize-space()='No businesses found']")
        this.Explore_location_Search_Box = page.locator("//input[@placeholder='City']")

        this.homePage_Title = page.locator("//span[@class='text-primary']")

        this.homePage_Title = page.locator("//span[@class='text-primary']")
        this.Explore_Category_DD = page.getByTestId('filter-category')
        this.Category_Result_Page = page.locator("//div[contains(@class,'flex items-center gap-2 text-xs')]//div[contains(@class,'bg-secondary')]")
        
        this.sortby_DD = page.getByTestId('filter-sort')
        this.All_Ratings = page.locator("//div[contains(@class,'grid grid-cols-1')]//a//div//span[contains(@class,'font-mono text-sm')]")
        
        this.MinRating_DD = page.getByTestId('filter-min-rating')
        this.All_Star = page.locator("//a[contains(@class,'group relative flex flex-col rounded')]//span[contains(@class,'font-mono text-sm')]")

        this.All_Hotel_Cards = page.locator("//a[contains(@class,'group relative flex')]") //48 cards
        this.Send_Enquiry_Button = page.locator("//button[normalize-space()='Send Enquiry']")

        this.Claim_Button = page.locator("//button[normalize-space()='Claim']")
        this.TextArea_Claim_Reason = page.locator("//textarea[@placeholder='I am the owner / manager…']")
        this.Submit_Claim_Button = page.locator("//button[normalize-space()='Submit claim']")

        this.Claim_Popup_Success_Alert = page.locator("//div[contains(text(), 'Claim')]")
    }

    async click_Explore_Link(URL) {
        await expect(this.Explore_Link).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)
        await expect(this.page).toHaveURL(URL, { timeout: 10000 })
        await expect(this.Explore_Search_Box).toBeVisible({ timeout: 10000 })
    }

    async search_Food(Food) {
        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)

        await expect(this.Explore_Search_Box).toBeVisible({ timeout: 10000 })
        await this.Explore_Search_Box.fill(Food)
        await expect(this.Explore_Search_Box).toHaveValue(Food, {timeout: 10000})
    }

    async click_search_Button() {
        await expect(this.Explore_searchButton).toBeVisible({timeout: 10000})
        await this.click(this.Explore_searchButton)
    }

    async Food_result(Result) {
        if (Result.toLowerCase() === "success") {
            await expect(this.Product_Result.first()).toBeVisible({timeout: 10000})
            console.log("Test Pass: Related products cards are visible in UI")
        }else if (Result.toLowerCase() === "fail") {
            await expect(this.Product_Result).toHaveCount(0, {timeout: 10000})
            console.log("Test Pass: No business results are displayed.")
        }else {
            throw new Error(`Invalid Result value: ${Result}`)
        }
    }

    async search_City(Location) {
        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)

        await expect(this.Explore_location_Search_Box).toBeVisible({ timeout: 10000 })
        await this.Explore_location_Search_Box.fill(Location)
        await expect(this.Explore_location_Search_Box).toHaveValue(Location, {timeout: 10000})
    }

    async Location_result(Result) {
        if (Result.toLowerCase() === "success") {
            await expect(this.Product_Result.first()).toBeVisible({timeout: 10000})
            console.log("Test Pass: Related products are visible in UI")
        }else if (Result.toLowerCase() === "fail") {
            await expect(this.Product_Result).toHaveCount(0, {timeout: 10000})
            console.log("Test Pass: No business results are displayed.")
        }
    }

    async slect_Category_options_DD(Options) {
        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)

        await this.Explore_Category_DD.waitFor({ state: 'visible' })
        await this.click(this.Explore_Category_DD)

        if (await this.homePage_Title.isVisible()) {
            await this.Explore_Link.waitFor({ state: "visible", timeout: 10000})
            await this.click(this.Explore_Link)

            await this.Explore_Category_DD.waitFor({ state: 'visible' })
            await this.click(this.Explore_Category_DD)
        }else {
            console.log('App is not on the home page')
        }
        const option = this.page.getByRole('option', {name: Options,exact: true})
        await option.waitFor({ state: 'visible' })
        await this.click(option)
    }


    async verify_Category_Result(Options, Result) {
        if (Result.toLowerCase() === 'fail') {
            await expect(this.Product_Result_not_found).toBeVisible({timeout: 10000})
            await expect(this.Product_Result).toHaveCount(0, {timeout: 10000})
        
        }else if (Result.toLowerCase() === 'success') {
            await expect(this.Product_Result.first()).toBeVisible({timeout: 10000})
            await this.Product_Result.first().click()
            await expect(this.Category_Result_Page).toHaveText(Options, {timeout: 10000})
            
        }else {
            throw new Error(`Invalid Result value: ${Result}`)
        }
    }

    async slect_Sortby_options_DD(Options) {
        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)

        await this.sortby_DD.waitFor({ state: 'visible' })
        await this.click(this.sortby_DD)

        if (await this.homePage_Title.isVisible()) {
            await this.Explore_Link.waitFor({ state: "visible", timeout: 10000})
            await this.click(this.Explore_Link)

            await this.sortby_DD.waitFor({ state: 'visible' })
            await this.click(this.sortby_DD)
        }else {
            console.log('App is not on the home page')
        }
        const option = this.page.getByRole('option', {name: Options,exact: true})
        await option.waitFor({ state: 'visible' })
        await this.click(option) // this will click the options from bootstrap dropdown
    }

    async Sortby_rating(Result) {
        if (Result === "Top rated result") {
            const firstcard = this.All_Ratings.first()
            await expect(firstcard).toBeVisible({ timeout: 15000 })
            await expect(firstcard).toHaveText(/5/, { timeout: 30000 })
        }else if (Result === "Most popular result") {
            await expect(this.Product_Result.first()).toBeVisible({ timeout: 10000 })
        }
    }

    async slect_MinRaring_options_DD(Options) {

        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)

        await this.MinRating_DD.waitFor({ state: 'visible' })
        await this.click(this.MinRating_DD)

        if (await this.homePage_Title.isVisible()) {
            await this.Explore_Link.waitFor({ state: "visible", timeout: 10000})
            await this.click(this.Explore_Link)

            await this.MinRating_DD.waitFor({ state: 'visible' })
            await this.click(this.MinRating_DD);
        }else {
            console.log('App is not on the home page')
        }

        const option = this.page.getByRole('option', {name: Options,exact: true})
        await option.waitFor({ state: 'visible' })
        await this.click(option)
    }

    async Check_Rating_Card_Visible(Result) {
        const stars = this.All_Star
        await stars.first().waitFor({state: "visible", timeout: 10000})
        const count = await stars.count()
        expect(count).toBeGreaterThan(0)

        for (let i = 0; i < count; i++) {
            const ratingText = await stars.nth(i).innerText()
            const rating = parseFloat(ratingText)
            if (Result === "4.0+ result") {
                expect(rating === 0 || rating >= 4.0).toBeTruthy()
            }else if (Result === "4.5+ result") {
                expect(rating === 0 || rating >= 4.5).toBeTruthy()
            }
        }
    }

    async click_first_card() {
        if (await this.homePage_Title.isVisible()) {
            await this.Explore_Link.waitFor({state: "visible", timeout: 10000})
            await this.click(this.Explore_Link)
        }
        const All_Hotel_Cards = this.All_Hotel_Cards
        await All_Hotel_Cards.first().waitFor({state: "visible", timeout: 10000})
        await this.click(All_Hotel_Cards.first())

        await this.Send_Enquiry_Button.waitFor({ state: "visible", timeout: 10000});
        await this.scroll(this.Send_Enquiry_Button)
        await expect(this.Send_Enquiry_Button).toBeVisible({timeout: 10000})
    }

    async click_Claim_Button(Text) {
        await this.Claim_Button.waitFor({ state: "visible", timeout: 10000 })
        await this.click(this.Claim_Button)

        await this.TextArea_Claim_Reason.waitFor({ state: "visible", timeout: 10000 })
        await this.fill(this.TextArea_Claim_Reason, Text)

        await expect(this.TextArea_Claim_Reason).toHaveValue(Text, {timeout: 10000})

        await this.click(this.Submit_Claim_Button)
    }

    async verify_Claim_Success_Alert() {
        await this.Claim_Popup_Success_Alert.waitFor({ state: "visible", timeout: 10000 })
        await expect(this.Claim_Popup_Success_Alert).toBeVisible({timeout: 10000})
    }

}

