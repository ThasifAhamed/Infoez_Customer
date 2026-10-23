import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HowItWorksPage extends BasePage{

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.HowItWorl_Link = page.locator("//a[.='Near me']/following-sibling::a[text()='How it works']")
        this.HowItWorl_Title = page.locator("//h1[text()='How Infoez works']")
        this.allCards = page.locator("//div[contains(@class,'rounded-2xl border border-border bg-card p-6')]//h3")
        this.homepage_Title = page.locator("//p[contains(text(),'Reviews you can trust. Busines')]")

        this.Start_exploring_Button = page.locator("//a[normalize-space()='Start exploring']")
        this.Explore_Text = page.locator("//div[text()='Explore']")
        this.List_your_busines_Button = page.locator("//a[normalize-space()='List your business']")
        this.businesPage_Text = page.locator("//h1[normalize-space()='Create your account']")
    }

    async click_HowItWork_Link(){
        await this.click(this.HowItWorl_Link)
        await expect(this.HowItWorl_Title).toBeVisible({timeout:10000})
    }

    async check_AllCards_Visible() {
        await expect(this.homepage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.HowItWorl_Link)
        const cards = this.allCards
        await expect(cards.first()).toBeVisible({ timeout: 10000 })

        const count = await cards.count()
        console.log("Total cards:", count)
        expect(count).toBeGreaterThan(0)

        for (let i = 0; i < count; i++) {
            await expect(cards.nth(i)).toBeVisible({ timeout: 10000 })
        }
    }

    async click_buttons(Button) {
        if (Button === "Start exploring") {
            await expect(this.Start_exploring_Button).toBeVisible({timeout: 10000})
            await this.click(this.Start_exploring_Button)
        }else if (Button === "List your business") {
            await expect(this.List_your_busines_Button).toBeVisible({timeout: 10000})
            await this.click(this.List_your_busines_Button)
        }
    }

    async result(Result){
        if(Result === "Start exploring page"){
            await expect(this.Explore_Text).toBeVisible({timeout:10000})
        }else if(Result === "List your business page"){
            await expect(this.businesPage_Text).toBeVisible({timeout:10000})
        }
    }
}