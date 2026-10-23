import {expect} from '@playwright/test'

export class BasePage{
    /** @param {import('@playwright/test').Page} page */ 
    constructor(page){
        this.page = page
    }

    //URL:
    async openApp(url){
        await this.page.goto(url);
    }

    //Fill:
    async fill(element, text){
        await element.fill(text);
    }

    //Click:

    async click(element) {
        await element.waitFor({ state: 'visible', timeout: 15000 });
        await element.click({ timeout: 15000 });
    }
    

    //Go Back page
    async goBack(){
        await this.page.goBack()
    }

    //Scroll:
    async scroll(element){
        await element.scrollIntoViewIfNeeded()
        await element.waitFor({ state: "visible" });
        await expect(element).toBeVisible()
    }

    //Scroll till top of the page 
    async scrollTillTop(){
        await this.page.evaluate(()=>window.scrollTo(0,0))
    }

    /** @param {import('@playwright/test').Locator} element */ 
    //HTML warning Text:
    async htmlWarning(elements) {
        const validationMessage = await elements.evaluate(el => el.validationMessage);
        console.log("Validation Message:", validationMessage);
        expect(validationMessage).not.toBe("");
        await elements.press("Escape");
    }

    //Confirm Dismiss Allert:

    async confirmAlert(text) {
        this.page.once("dialog", async dialog => {
            expect(dialog.type()).toBe("confirm");
            expect(dialog.message()).toContain(text);
            await dialog.accept();
        })
       
    }
    
    async Color(element){
        const color = await element.evaluate(element => {
            return getComputedStyle(element).backgroundColor;})
        console.log("background color:", color)
    }

    /** @param {import('@playwright/test').Locator} element */ 
    async singleDD(element, text){
        await element.selectOption(text)
    }

}