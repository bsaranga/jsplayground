import puppeteer from "puppeteer";

(async () => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://medium.com/nerd-for-tech/web-scraping-with-a-proxy-pool-the-cheap-way-4c7d6fc9f859");

    const content = await page.content();
    
    console.log(content);
})();