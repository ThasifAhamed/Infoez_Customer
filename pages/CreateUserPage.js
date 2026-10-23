import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CreateUserPage extends BasePage{
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.LoginPage_CreateOne = page.locator("//a[text()='Create one']")
        this.RegisterPage_Titile = page.locator("//h1[.='Create your account']")

        this.RegisterPage_Customer_Radio = page.locator("//div[normalize-space()='Customer']")
        this.NameBox = page.locator("//input[@data-testid='register-name']")

        this.emailBox = page.locator("//input[@type='email']")
        this.Phone_Number_Box = page.locator("//input[@data-testid='register-phone']")
        this.password_Box = page.locator("//input[@type='password']")
        this.click_Create_Account = page.locator("//button[normalize-space()='Create account']")

        this.HomePage_Title_Text = page.locator("//h1[contains(text(),'The')]");
    }

    async click_CreateOne(){
        await this.click(this.LoginPage_CreateOne)
        await expect(this.RegisterPage_Titile ).toBeVisible({timeout:10000})
    }

    async select_Customer_Radio(){
        await this.click(this.RegisterPage_Customer_Radio)
        console.log("Test PASS: User selecter Customer radio")
    }

    async enter_FullName(name) {
        await this.NameBox.waitFor({ state: "visible", timeout: 10000});
        await this.fill(this.NameBox, name);

        if (name && name.trim() !== "") {
            await expect(this.NameBox).toHaveValue(name);
        }else {
            await expect(this.NameBox).toHaveValue("");
        }
    }

    async enter_Email(email) {
        await this.emailBox.waitFor({ state: "visible", timeout: 10000});
        await this.fill(this.emailBox, email);

        if (email !== "") {
            await expect(this.emailBox).toHaveValue(email);
        }else {
            await expect(this.emailBox).toHaveValue("");
        }
    }

    async enter_Number(Number){
        await this.Phone_Number_Box.waitFor({ state: "visible", timeout: 10000});
        await this.fill(this.Phone_Number_Box, Number)

        if(Number !==""){
            await expect(this.Phone_Number_Box).toHaveValue(Number)
        }else{
            await expect(this.Phone_Number_Box).toHaveValue("")
        }
    }

    async enter_Password(password){
        await this.password_Box.waitFor({ state: "visible", timeout: 10000});
        await this.fill(this.password_Box, password)
        await expect(this.password_Box).toHaveValue(password)
    }

    async click_Create_Account_Button(){
        await this.click_Create_Account.waitFor({ state: "visible", timeout: 10000});
        await this.click(this.click_Create_Account)
    }

    async warning_Result(result) {
        if (result === "Name HTML Warning") {
            await this.htmlWarning(this.NameBox)
        }else if (result === "Email HTML Warning") {
            await this.htmlWarning(this.emailBox);
        }else if (result === "Welcome Alert") {
            await expect(this.HomePage_Title_Text).toBeVisible({ timeout: 10000 });
        }
    }
}