import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://whoer.net/");

  await page.screenshot({
    path: "./pups",
  });

  await browser.close();
})();
