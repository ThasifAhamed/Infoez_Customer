import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LogoutPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.profile_icon = page.locator("//span[contains(@class,'flex h-full w-full items-center justify')]")
        this.logout = page.locator("//div[.='Log out']")
        this.signin = page.locator("//button[normalize-space()='Sign in']")
    }

    async click_on_ProfileIcon(){
        await this.profile_icon.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.profile_icon)
    }

    async click_Logout(){
        await this.logout.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.logout)
    }

    async check_successfully_logedout(){
        await expect(this.signin).toBeVisible({timeout:10000})
    }





}