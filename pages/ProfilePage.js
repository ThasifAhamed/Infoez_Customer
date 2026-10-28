import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class ProfilePage extends BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page)
        this.profile_icon = page.locator("//span[contains(@class,'flex h-full w-full items-center justify')]")
        this.profile_link = page.locator("//div[@data-testid='menu-profile']")
        this.profile_title = page.locator("//h1[normalize-space()='Your profile']")

        this.emailBox = page.locator("//input[@value='customer@infoez.com']")
        this.roleBox = page.locator("//input[@value='customer']")

        this.nameBox = page.locator("//input[@data-testid='profile-name']")
        this.phoneBox = page.locator("//input[@data-testid='profile-phone']")

        this.save_changes_button = page.locator("//button[normalize-space()='Save changes']")
        this.success_alert = page.locator("//div[contains(text(),'Profile updated')]")
        //Negative xpath created by own 
        this.warningText = page.getByText("Invalid Phone number", { exact: true })

        this.profileIcon = page.locator("//span[@class='hidden sm:inline text-sm font-medium']")
        
        this.Explore_Link = page.locator("//a[normalize-space()='Explore']")
        this.Explore_Search_Box = page.locator("//input[@placeholder='Search…']")
        this.Explore_searchButton = page.locator("//button[normalize-space()='Search']")

        this.Product_Result = page.locator("//div[contains(@class,'grid grid-cols-1')]//a//h3")
        this.Business_Cards = page.locator("a[href*='/business/']")

        this.heart_svg = page.getByRole("button", { name: "Toggle favorite" })

        this.homePage_Title = page.locator("//h1[contains(text(),'The')]")

        this.Card_Added = page.locator("//div[contains(text(),'Added to favorites')]")

        this.favorites = page.locator("//div[@data-testid='menu-favorites']")
        this.your_favorites_title = page.locator("//h1[normalize-space()='Your favorites']")

        this.all_cards_Title = page.locator("//a[contains(@class,'group relative flex flex-col rounded-2xl')]//p")
    }

    async click_Profile_link() {
        await this.profile_icon.waitFor({ state: "visible", timeout: 10000 })
        await this.click(this.profile_icon)
        await this.profile_link.waitFor({ state: "visible", timeout: 10000 })
        await this.click(this.profile_link)

        await expect(this.profile_title).toBeVisible({ timeout: 10000 })
    }

    async check_email_number_NOT_Editable() {
        await expect(this.emailBox).not.toBeEditable({ timeout: 10000 })
        await expect(this.roleBox).not.toBeEditable({ timeout: 10000 })
    }

    async Enter_Name_Number(Name, Phone) {
        await this.nameBox.waitFor({ state: "visible", timeout: 10000 })
        await this.fill(this.nameBox, Name)
        await expect(this.nameBox).toHaveValue(Name)

        await this.phoneBox.waitFor({ state: "visible", timeout: 10000 })
        await this.fill(this.phoneBox, Phone)
        await expect(this.phoneBox).toHaveValue(Phone)
    }

    async click_save_button(Result) {
        await this.save_changes_button.waitFor({ state: "visible", timeout: 10000 })
        await this.click(this.save_changes_button)

        if (Result === "success alert") {
            await expect(this.success_alert).toBeVisible({ timeout: 15000 })
            console.log("Test PASS: Success alert is visible")
        }else if (Result === "fail alert") {
            await expect(this.warningText).toBeHidden({ timeout: 10000 })
            console.log("Test FAIL: Warning text is hidden")
        }
    }

    async verify_updated_profile_name() {
        const enteredName = await this.nameBox.inputValue()
        await expect(this.profileIcon).toHaveText(enteredName, { timeout: 10000 })
    }

    async search_food(Food) {
        await expect(this.homePage_Title).toBeVisible({ timeout: 10000 })
        await this.click(this.Explore_Link)
        await expect(this.Explore_Search_Box).toBeVisible({ timeout: 10000 })
        await this.fill(this.Explore_Search_Box, Food)
        await expect(this.Explore_Search_Box).toHaveValue(Food)
        await this.click(this.Explore_searchButton)

        const firstCakeCard = this.Business_Cards.filter({ hasText: new RegExp(Food, "i") }).first()
        await expect(firstCakeCard).toBeVisible({ timeout: 20000 })

        const favoriteButton = firstCakeCard.getByRole("button", {name: "Toggle favorite"})
        await expect(favoriteButton).toBeVisible({ timeout: 10000 })
        await this.click(favoriteButton)
    }

    async product_Added(){
        await expect(this.Card_Added).toBeVisible({timeout:10000})
    }

    async select_favorites_link(){
        await this.profile_icon.waitFor({ state: "visible", timeout: 10000 })
        await this.click(this.profile_icon)

        await this.favorites.waitFor({ state: "visible", timeout: 10000 })
        await this.click(this.favorites)

        await expect(this.your_favorites_title).toBeVisible({timeout:10000})
    }

    async verify_favorite_card(Food) {
        //Here 2 cards will come so am using filter to seprate only cake cards
        const onlyCakeCards = this.all_cards_Title.filter({hasText: new RegExp(Food, "i")})
        await expect(onlyCakeCards).toBeVisible({timeout:10000})
    }
}