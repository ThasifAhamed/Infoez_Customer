import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class EnquiriesPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.SendEnquiries_Button = page.locator("//button[normalize-space()='Send Enquiry']")
        this.MessageBox = page.locator("//textarea[contains(@class,'flex min-h-[60px] w-full')]")
        this.send_Enq_Button = page.locator("//button[normalize-space()='Send enquiry']")
        this.success_alert_text = page.locator("//div[contains(text(),'Enquiry sent — the business will reach out shortly')]")
        this.profile_icon = page.locator("//span[@class='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8']")
        this.MyEnq_Option = page.locator("//div[@data-testid='menu-enquiries']")
        this.MyEnq_Page_Title = page.locator("//h1[normalize-space()='Your enquiries']")

        this.AllCardsEnq_Messages = page.locator("//div[@class='mt-8 space-y-4']//p[contains(@class,'mt-2 text-sm')]")
    }

    async Click_enquiries() {
        await expect(this.SendEnquiries_Button).toBeVisible({timeout: 10000})
        await this.click(this.SendEnquiries_Button)
    }

    async enter_message(text){
        await this.MessageBox.waitFor({ state: "visible", timeout: 10000})
        await this.fill(this.MessageBox, text)

        await expect(this.MessageBox).toHaveValue(text)

        await this.send_Enq_Button.waitFor({ state: "visible", timeout: 10000})
        await this.click(this.send_Enq_Button)
    }

    async success_Message(text){
        await this.success_alert_text.waitFor({ state: "visible", timeout: 10000});
        const alertText = await this.success_alert_text.innerText()
        expect(alertText).toContain(text)

        await expect(this.success_alert_text).toBeVisible({timeout:10000})
    }

    async click_Profile_Icon(){
        await this.profile_icon.waitFor({ state: "visible", timeout: 10000});
        await this.click(this.profile_icon)

        await this.MyEnq_Option.waitFor({ state: "visible", timeout: 10000});
        await this.click(this.MyEnq_Option)

        await expect(this.MyEnq_Page_Title).toBeVisible({timeout: 10000})
    }

    async Enquiries_Message_Card(message) {
        const messageCard = this.AllCardsEnq_Messages.filter({hasText: new RegExp(message, "i")})
        await expect(messageCard.first()).toBeVisible({timeout: 10000})
    }
}