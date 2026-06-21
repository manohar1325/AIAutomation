import { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { products } from "../test-data/product";
import { SearchResultPage } from "../pages/searchResultsPage";
import { test } from "../fixtures/pagesFixture";


// let homePage: HomePage;
// test.beforeEach(async ({ page })=>{
//     console.log("Executed before each")
//     homePage = new HomePage(page);
//     await homePage.navigate();
// })


test('Search Laptop on Amazon', async ({homePage, page})=>{
  
    await homePage.navigate();
    const searchPageTitle = new SearchResultPage(page);
    await homePage.searchProduct(products.laptop);
    await page.waitForTimeout(3000);
    const title = await searchPageTitle.getTitle();
    console.log("URL => ", page.url());
    console.log("TITLE => ", await page.title());
    expect(title).toContain("Amazon");

    const resultText = await searchPageTitle.getSearchResultsText();
    console.log(resultText);
});

test('Search I phone on Amazon', async ({homePage, searchResultsPage, page })=>{
    await homePage.navigate();
    const searchPageTitle = new SearchResultPage(page);
    await homePage.searchProduct(products.iphone);
    await page.waitForTimeout(3000);
    const title = await searchPageTitle.getTitle();
    console.log("URL => ", page.url());
    console.log("TITLE => ", await page.title());
    expect(title).toContain("Amazon");

    const resultText = await searchPageTitle.getSearchResultsText();
    console.log(resultText);
});

test.afterEach(async({})=>{
    console.log("Test Completed!!")
})