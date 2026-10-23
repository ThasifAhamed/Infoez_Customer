import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class NotificationPage extends BasePage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)

        this.profile_icon = page.locator("//span[@class='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8']")
        this.Notification_Option = page.locator("//div[@data-testid='menu-notifications']")

        this.Notification_Page = page.locator("//h1[normalize-space()='Notifications']")
        this.MarkAllRead = page.locator("//button[normalize-space()='Mark all read']")

        this.All_Notification_Cards = page.locator("//div[@class='mt-8 space-y-3']//div[contains(@class,'font-semibold text-sm')]")
    }

    async click_Notification(){
        await this.profile_icon.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.profile_icon)

        await this.Notification_Option.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.Notification_Option)

        await expect(this.Notification_Page).toBeVisible({timeout:10000})
    }

    async click_MarkAllRead_Button() {
        await this.MarkAllRead.waitFor({state: "visible",timeout: 10000})
        await expect(this.MarkAllRead).toBeEnabled()
        await this.MarkAllRead.hover()
        await this.click(this.MarkAllRead)
    }

    async All_Notification_Card(message){
        const rejectedCards = this.All_Notification_Cards.filter({ hasText: new RegExp(message, "i") })
        await expect(rejectedCards).toBeVisible({ timeout: 20000 }) // will check all rejected cards are there
    }
} 