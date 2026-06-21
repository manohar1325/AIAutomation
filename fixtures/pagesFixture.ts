import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/searchResultsPage";
import {test as base} from '@playwright/test'

type myFixtures = {
    homePage: HomePage;
    searchResultsPage: SearchResultPage
};

export const test =base.extend<myFixtures>({
    homePage: async({ page }, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    },
    searchResultsPage: async({ page }, use)=>{
        const searchResultsPage = new SearchResultPage(page);
        await use(searchResultsPage);
    }

});