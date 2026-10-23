import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PricingPage extends BasePage{

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.Pricing_Link = page.locator("//a[.='Near me']/following-sibling::a[text()='Pricing']")
        this.Pricing_Title = page.locator("//h1[normalize-space()='Choose your plan']")

        this.Pricing_choose_plans = page.locator("//button[text()='Choose plan']") // 4 elements
        this.Pricing_Warning_login_Alert = page.locator("//div[text()='Please sign in to subscribe']")

        this.Pricing_success_alert = page.locator("//div[text()='Subscription updated']")
        this.Pricing_Choose_Plan_Text = page.locator("//button[text()='Choose plan']") //3 
        this.homePage_Title = page.locator("//span[@class='text-primary']")
    }

    async click_Pricing_Link(){
        await this.click(this.Pricing_Link)
        await expect(this.Pricing_Title).toBeVisible({timeout:10000})
        //await expect(this.page).toHaveURL("https://d2mojgetgp5xie.cloudfront.net/pricing")
        await expect(this.page).toHaveURL("https://d2mojgetgp5xie.cloudfront.net/pricing",{ timeout: 15000 })
    }

    async click_choose_plans() {
        const plans = this.Pricing_choose_plans
        await expect(plans.first()).toBeVisible({ timeout: 10000 })
        const count = await plans.count()
        expect(count).toBeGreaterThan(0)

        const planCards = await plans.all()

        for (const plan of planCards) {
            await this.click(plan)
            await this.verify_subscribe_Warning_alert()
        }
    }

    async verify_subscribe_Warning_alert(){
        await expect(this.Pricing_Warning_login_Alert.first()).toBeVisible({timeout:10000})
    }

    async click_choose_plans_After() {
        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Pricing_Link)

        const plans = this.Pricing_Choose_Plan_Text // 4 plans
        await expect(plans.first()).toBeVisible({ timeout: 15000 })
        const count = await plans.count()
        expect(count).toBeGreaterThan(0)

        for (let i = 0; i < count; i++) {
            const plan = plans.nth(i) // list of elements to single element 
            if (await plan.isVisible()) {
                await this.click(plan)
                await expect(this.Pricing_success_alert.first()).toBeVisible({ timeout: 10000 })
            }else {
                console.log("Choose plan button is not visible")
            }
        }
    }
    
}