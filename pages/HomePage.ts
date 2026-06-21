import { Locator, Page } from "@playwright/test";

export class HomePage {
    private searchBox: Locator;
    constructor (private page: Page){
        this.searchBox = this.page.locator('#twotabsearchtextbox');
    }

    
    async navigate(){
        await this.page.goto("https://www.amazon.in/");
    }

    async searchProduct(productName: string){
        await this.searchBox.fill(productName);
        await this.searchBox.press('Enter')
    }
    async getTitle(){
        return await this.page.title();
    }
   
}