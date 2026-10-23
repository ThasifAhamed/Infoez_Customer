import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MyReviewsPage extends BasePage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.homePage_Text = page.locator("//h1[contains(text(),'The')]")
        this.Explore_Link = page.locator("//a[normalize-space()='Explore']")
        this.LocationBox = page.locator("//input[@placeholder='City']")

        this.searchButton = page.locator("//button[normalize-space()='Search']")
        this.all_Cards_Locations = page.locator("//a[contains(@class,'group relative flex flex-col rounded-2xl')]//span[@class='flex items-center gap-1']")

        this.Write_Review = page.locator("//button[normalize-space()='Write a review']")
        this.review_Box = page.locator("//textarea[@placeholder='Share your experience…']")
        this.Post_Review_Button = page.locator("//button[normalize-space()='Post review']")

        this.reviewPosted_Success_Alert = page.locator("//div[contains(text(),'Review posted')]")
        this.review_Card = page.locator("//div[contains(@class,'rounded-2xl border')]")

        this.profile_icon = page.locator("//span[@class='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8']")
        this.MyReviewsOption = page.locator("//div[@data-testid='menu-reviews']")

        this.MyReviewTexts = page.locator("//div[@class='mt-8 space-y-4']/child::div//p")
        this.deleteButtons = page.locator("button[data-testid*='delete-review']")

        this.reviewRemoved_Text = page.locator("//div[contains(text(),'Review removed')]")
    }

    async Click_Explore_And_Enter_Location(city){
        await this.homePage_Text.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.Explore_Link)

        await this.LocationBox.waitFor({ state: "visible", timeout: 10000})
        await this.fill(this.LocationBox,city)
    }

    async Click_Search_And_See_Cards(Chennai){
        await this.searchButton.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.searchButton)

        const chennaiCards = this.all_Cards_Locations.filter ({ hasText: new RegExp(Chennai, "i") }).first()
        await expect(chennaiCards).toBeVisible({ timeout: 20000 })

        await this.click(chennaiCards)
    }

    async scroll_WrightReview(ReviewText){
        await this.Write_Review.waitFor({ state: "visible", timeout: 10000});
        await this.scroll(this.Write_Review)
        await this.click(this.Write_Review)

        await this.review_Box.waitFor({ state: "visible", timeout: 10000});
        await this.fill(this.review_Box,ReviewText)

        await expect(this.review_Box).toHaveValue(ReviewText)

        await this.Post_Review_Button.waitFor({ state: "visible", timeout: 10000});
        await this.click(this.Post_Review_Button)
    }

    async reviewPosted_Alert(){
        await expect(this.reviewPosted_Success_Alert).toBeVisible({timeout:10000})
        await expect(this.review_Card).toBeVisible({timeout:10000})
    }

    async click_profile_icon(MyReviewText) {
        await this.profile_icon.waitFor({state: "visible",timeout: 10000})
        await this.click(this.profile_icon)
        await this.MyReviewsOption.waitFor({state: "visible",timeout: 10000})
        await this.click(this.MyReviewsOption)

        const myReview = this.MyReviewTexts.filter({ hasText: new RegExp(MyReviewText, "i") }).first()
        await expect(myReview).toBeVisible({ timeout: 20000 })
    }

    async click_Delete_Icon(text, alertText) {
        const count = await this.MyReviewTexts.count() // 10 elements
        for (let i = 0; i < count; i++) {
            const reviewText = (await this.MyReviewTexts.nth(i).innerText()).trim() // 10 to 1 element
            if (reviewText === text.trim()) {
                const deleteButton = this.deleteButtons.nth(i) // 10 to 1 element
                await expect(deleteButton).toBeVisible()
                await this.confirmAlert(alertText)
                await this.click(deleteButton)
            }
        }
    }

    async verifyReviewRemoved(reviewText) {
        await expect(this.reviewRemoved_Text).toBeVisible({timeout:10000})
        const myReview = this.MyReviewTexts.filter({hasText: reviewText})
        await expect(myReview).toHaveCount(0, { timeout: 10000 })
    }
}