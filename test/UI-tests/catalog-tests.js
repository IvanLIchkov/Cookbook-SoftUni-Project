const {chromium} = require('playwright-chromium');

var expect = require('chai').expect;

let browser, page;

describe('UI tests', function () {
    this.timeout(10000);
    before(async () => {
        browser = await chromium.launch({handless: false, slowMo: 500});
    })

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close;
    });

    it('should load and render the content of the api', async () => {
        await page.goto('http://localhost:63342/Cookbook-SoftUni-Project/index.html');

        await page.click('nav a:has-text("Catalog")');

        const response = await fetch('http://localhost:3030/data/recipes/');

        await page.waitForSelector('article');

        let recipeTitles = await response.json();
        recipeTitles = recipeTitles.map(recipe => recipe.name);

        const pageArticles = await page.$$eval('article', articles => {
            articles.map(article => article.textContent.trim())
        });

        recipeTitles.forEach(title => {
            expect(pageArticles.some(article => article.includes(title))).equal(true);
        });
    });
})
