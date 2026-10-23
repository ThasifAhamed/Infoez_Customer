import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.ParentPage_Signin_button = page.locator("//button[normalize-space()='Sign in']")
        this.LoginPage_Email_Box = page.locator("//input[@id='email']")
        this.LoginPage_Password_Box = page.locator("//input[@id='password']")
        this.LoginPage_Signin_button = page.locator("//button[@type='submit']")
        this.HomePage_welcomeAlert = page.locator("//div[contains(text(),'Welcome back!')]")
        this.LoginPage_invalidCredentialsAlert = page.locator("//div[contains(text(),'Invalid credentials')]")
    }

    async browserLaunch(URL) {
        await this.openApp(URL)
        await expect(this.page).toHaveURL(URL)
        await this.click(this.ParentPage_Signin_button)
    }

    async fill_Email(email) {
        await expect(this.LoginPage_Email_Box).toBeVisible()
        await this.fill(this.LoginPage_Email_Box, email)
        await expect(this.LoginPage_Email_Box).not.toBeEmpty()
    }

    async fill_Password(password) {
        await expect(this.LoginPage_Password_Box).toBeVisible()
        await expect(this.LoginPage_Password_Box).toBeEmpty()
        await this.fill(this.LoginPage_Password_Box, password)
    }

    async click_Signin() {
        await expect(this.LoginPage_Signin_button).toBeEnabled()
        await this.click(this.LoginPage_Signin_button) 
    }

    async homepageTitle(title) {
        await expect(this.page).toHaveTitle(title)
    }

    async verifyWelcomeAlert(text) {
        await this.HomePage_welcomeAlert.waitFor({ state: 'visible' })
        await expect(this.HomePage_welcomeAlert).toBeVisible()
        await expect(this.HomePage_welcomeAlert).toContainText(text)
        await expect(this.HomePage_welcomeAlert).not.toBeEmpty()
    }

    async verifyInvalidAlert(expectedAlert) {
        await this.LoginPage_invalidCredentialsAlert.waitFor({ state: 'visible' })
        await expect(this.LoginPage_invalidCredentialsAlert).toBeVisible()
        await expect(this.LoginPage_invalidCredentialsAlert).toContainText(expectedAlert)
    }

    //HTML 5 Allert POP UP 
    async verifyEmptyFields() {
        const validationMessage = await this.LoginPage_Email_Box.evaluate(
            (element) => element.validationMessage)
        console.log("Validation Message:", validationMessage)
        expect(validationMessage).toBe("Please fill out this field.")
    }

}