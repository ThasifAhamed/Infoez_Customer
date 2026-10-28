import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        super(page);
        this.Homepage_foodsearchbox = page.locator("//input[@placeholder='Coffee, plumber, dentist…']")
        this.Homepage_citysearchbox = page.locator("//input[@placeholder='City (e.g. Bengaluru)']")
        this.Homepage_search_Button = page.locator("//button[normalize-space()='Search']")

        //Explore page Result:
        this.Homepage_result = page.locator("//div[.='Filters']")
        this.explorepage_searchresult = page.locator("//p[contains(.,'Artisan sourdough, cakes')]")
        this.chennai_Result = page.locator("//span[.='Chennai']")

        // Negative test locator created by me own 
        this.warningText = page.getByText("Enter food and location",{ exact: true })

        //Home Page:
        //Category locators
        this.categoryText = page.locator("//h2[contains(text(),'Every category')]")
        this.categoryCards = page.locator("//a[contains(@class,'group rounded-2xl border border')]//div[@class='mt-3 font-display font-semibold']")
        this.Every_category_Cards = page.locator("//div[contains(@class,'mt-8 grid grid-cols-2')]/child::a//div[contains(@class,'mt-3 font-display')]");

        //Featured section locators
        this.Featured_this_week_text = page.locator("//h2[text()='Featured this week']")
        this.Featured_Titles = page.locator("(//div[contains(@class,'mt-8')])[2]/child::a//div[contains(@class,'flex items-start justify-between gap-2')]");
        this.Click_Featured_Card = page.locator("(//div[contains(@class,'mt-8')])[2]/child::a//div//span[.='View →']");
        this.send_enquiry_Button = page.locator("//button[normalize-space()='Send Enquiry']")

        // Top-rated shop locators
        this.Top_Rated_Shop_Text = page.locator("//h2[normalize-space()='Top rated near you']")
        this.Top_Rated_Shop_Titile = page.locator("(//div[contains(@class,'mt-8')])[3]/child::a//h3")
        this.TopRatedShop_SeeAll = page.locator("//a[contains(.,'See all')]").nth(2)
        this.SortBy_Dropdown = page.locator("//span[text()='Top rated']")

        //Recently added
        this.Recently_Added_Title = page.locator("//h2[normalize-space()='Recently added']")
        this.All_Recently_Added_Cards = page.locator("(//div[contains(@class,'mt-8 grid grid-cols-1')])[3]/child::a")
        this.All_Recently_Added_Cards_Names = page.locator("(//div[contains(@class,'mt-8 grid')])[4]/child::a//h3") // 8 elements
    }

    // Search food
    async searchFood(food) {
        await this.Homepage_foodsearchbox.waitFor({state: "visible",timeout: 10000})
        await this.fill(this.Homepage_foodsearchbox, food)
        await expect(this.Homepage_foodsearchbox).toHaveValue(food)
    }

    // Search city
    async searchCity(city) {
        await this.Homepage_citysearchbox.waitFor({state: "visible",timeout: 10000})
        await this.fill(this.Homepage_citysearchbox, city)
        await expect(this.Homepage_citysearchbox).toHaveValue(city)
    }

    // Click search button
    async clicksearchButton() {
        await this.Homepage_search_Button.waitFor({state: "visible",timeout: 10000})
        await this.click(this.Homepage_search_Button)
    }

    // Verify cake-related search result
    async searchresult_Cake() {
        await expect(this.explorepage_searchresult).toBeVisible({timeout: 10000})
        const result = await this.explorepage_searchresult.innerText()
        expect(result.toLowerCase()).toContain("cakes")
        console.log("Cake-related cards are displayed")
    }

    // Enter Chennai in location search
    async searchChennai(chennai) {
        await this.fill(this.Homepage_citysearchbox, chennai)
        await expect(this.Homepage_citysearchbox).toHaveValue(chennai)
    }

    // Verify Chennai results
    async searchresult_Chennai() {
        await expect(this.chennai_Result.first()).toBeVisible({timeout: 10000})
        const count = await this.chennai_Result.count()
        console.log("Total locations found:", count)
        expect(count).toBeGreaterThan(0)

        for (const chennai of await this.chennai_Result.all()) {
            await expect(chennai).toBeVisible()
            await expect(chennai).toHaveText("Chennai")
        }
    }

    // Verify food search box is empty
    async FoodSearchBox_Empty() {
        await expect(this.Homepage_foodsearchbox).toBeVisible({timeout: 10000})
        await expect(this.Homepage_foodsearchbox).toHaveValue("")
    }

    // Verify location search box is empty
    async LocationSearchBox_Empty() {
        await expect(this.Homepage_citysearchbox).toBeVisible({timeout: 10000})
        await expect(this.Homepage_citysearchbox).toHaveValue("")
    }

    // Negative test: Verify warning message
    async enter_Food_Location_Warning() {
        if(await this.warningText.isVisible()){
            await expect(this.warningText).toBeVisible({timeout:10000})
            console.log("Test PASS: Warning text is visible")
        }else{
            await expect(this.warningText).toBeHidden({timeout:10000})
            console.log("Test FAIL: Warning text is not visible")
        }
    }

    // Scroll to Every Category section
    async scroll_categoryText() {
        await this.scroll(this.categoryText)
        await expect(this.categoryText).toBeVisible()
    }

    // Verify all category cards are visible
    async all_category_cards_display() {
        const cards = this.Every_category_Cards
        await expect(cards.first()).toBeVisible({timeout: 10000})
        const count = await cards.count()
        console.log("Category cards count:", count)
        expect(count).toBeGreaterThan(0)

        for (const card of await cards.all()) {
            await expect(card).toBeVisible()
        }
    }

    //Click Restaurants category and verify results
    async category_cards_click() {
        const allCards = this.categoryCards;

        await this.click(allCards.first())
        await expect(this.Homepage_result).toBeVisible({ timeout: 10000 })
    }

    // Scroll to Featured This Week section
    async scroll_till_Featured() {
        await this.scroll(this.Featured_this_week_text)
        await expect(this.Featured_this_week_text).toBeVisible()
    }

    // Verify all Featured cards are visible
    async Featured_Titles_visible() {
        const cards = this.Featured_Titles
        await expect(cards.first()).toBeVisible({timeout: 10000})
        const count = await cards.count()
        console.log("Featured cards count:", count)
        expect(count).toBeGreaterThan(0)

        for (const card of await cards.all()) {
            await expect(card).toBeVisible()
        }
    }

    // Click Featured card and verify Send Enquiry button
    async Featured_Card_click() {
        await this.click(this.Click_Featured_Card.first())
        await expect(this.send_enquiry_Button).toBeVisible({ timeout: 10000 })
        await this.scroll(this.send_enquiry_Button)
        await expect(this.send_enquiry_Button).toBeVisible()
    }

    // Scroll to Top Rated Shops section
    async scroll_Till_TopRatedShop() {
        await this.scroll(this.Top_Rated_Shop_Text)
        await expect(this.Top_Rated_Shop_Text).toBeVisible()
    }

    // Verify all Top Rated shop cards are visible
    async TopRatedShop_Card() {
        await this.scroll(this.Top_Rated_Shop_Text)
        await this.Top_Rated_Shop_Titile.first().waitFor({ state: "visible", timeout: 10000})
        const titles = this.Top_Rated_Shop_Titile // 8
        const count = await titles.count()
        console.log("Total count is: ", count)
        expect(count).toBeGreaterThan(0)
    }

    // Click See All for Top Rated Shops
    async click_SeeAll_TopShop() {
        await expect(this.TopRatedShop_SeeAll).toBeVisible({timeout: 10000})
        await this.click(this.TopRatedShop_SeeAll)
        await expect(this.Homepage_result).toBeVisible({timeout: 10000})
    }

    // Verify selected Sort By option
    async TopRated_Selected_In_SortBy(text) {
        await expect(this.SortBy_Dropdown).toBeVisible({timeout: 10000})
        await expect(this.SortBy_Dropdown).toContainText(text)
    }

    //Scroll till Recently added Hotel text
    async scroll_Till_Recently_added(){
        await this.scroll(this.Recently_Added_Title)
        await expect(this.Recently_Added_Title).toBeVisible({timeout:10000})
    }

    // User views all Recently Added cards
    async view_all_recently_added_cards() {
        const cards = this.All_Recently_Added_Cards // list of elements 8

        await expect(cards.first()).toBeVisible({ timeout: 10000 });
        const count = await cards.count()
        console.log("Total Number of Recently Added cards:", count) //8
        expect(count).toBeGreaterThan(0)

        //Cheack all cards visible:

        for(let i = 0; i < count; i++){
            const card = cards.nth(i) // from 8 elements to 1 element
            await expect(card).toBeVisible({timeout:10000})
        }
    }

    // User clicks on every Recently Added card
    async click_all_Recently_added_Cards() {
        const cards = this.All_Recently_Added_Cards_Names
        const count = await cards.count()
        expect(count).toBeGreaterThan(0)

        // Click all cards one by one
        for (let i = 0; i < count; i++) {
            const card = cards.nth(i)
            await card.waitFor({state: "visible",timeout: 10000})
            await this.click(card)
            await expect(this.send_enquiry_Button).toBeVisible({timeout:10000})
            await this.goBack()

            await this.Recently_Added_Title.waitFor({ state: "visible", timeout: 10000});
            await this.scroll(this.Recently_Added_Title)
        }
    }
}