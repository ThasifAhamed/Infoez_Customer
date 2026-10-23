import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SubscriptionPage extends BasePage{

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.homepageTitile = page.locator("//h1[contains(text(),'The')]")
        this.profile_icon = page.locator("//span[contains(@class,'flex h-full w-full items-center justify')]")
        this.Subscription = page.locator("//div[normalize-space()='Subscription']")
        this.planPage = page.locator("//h1[normalize-space()='Choose your plan']")

        this.All_PlanCards = page.locator("//div[contains(@class,'mt-12 grid md:grid')]/child::div")//4
        this.ChoosePlans = page.locator("//button[.='Choose plan']")
        this.successAlerts = page.locator("//div[contains(text(),'Subscription updated')]") //4
    }

    async click_profile_Subscription(){
        await expect(this.homepageTitile).toBeVisible({timeout:10000})

        await this.profile_icon.waitFor({ state: "visible", timeout: 10000})
        this.click(this.profile_icon)

        await this.Subscription.waitFor({ state: "visible", timeout: 10000})
        this.click(this.Subscription)

        await expect(this.planPage).toBeVisible({timeout:10000})
    }

    async check_allcards_Visible() {
        const PlanCards = this.All_PlanCards
        await expect(PlanCards.first()).toBeVisible({ timeout: 15000 })

        const count = await PlanCards.count()
        console.log("Total plan cards:", count) // 4

        expect(count).toBeGreaterThan(0)

        for (let i = 0; i < count; i++) {
            const plancard = PlanCards.nth(i)
            await expect(plancard).toBeVisible({timeout:10000})
        }
    }

    async click_All_ChoosePlans() {
        const choosePlans = this.ChoosePlans
        const count = await choosePlans.count()
        console.log("Total Choose plan buttons:", count)

        expect(count).toBeGreaterThan(0)

        for (let i = 0; i < count; i++) {
            const choosePlan = choosePlans.nth(i)
            await expect(choosePlan).toBeVisible({ timeout: 15000 })
            await choosePlan.click()
        }
    }

    async sucessMessage_Visible(){
        const SuccessAlerts = this.successAlerts // bring from constructor 4 ekements in it
        const count = SuccessAlerts.count()

        for(let i=0; i<count; i++){
            const successAlert = SuccessAlerts.nth(i) // from 4 elements to 1 element
            await expect(successAlert).toBeVisible({timeout:10000})
        }

    }



}