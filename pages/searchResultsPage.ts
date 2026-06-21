import { Location, Locator, Page } from "@playwright/test";

export class SearchResultPage{
    private searchResultTitle: Locator;
    constructor(private page: Page){
        this.searchResultTitle = page.locator('span.a-color-state');
    }
    async getTitle(){
        return await this.page.title();
    }

    async getSearchResultsText(){
        return await this.searchResultTitle.textContent();
    }
}