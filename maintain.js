const puppeteer = require('puppeteer');
const { readFileSync, writeFileSync } = require("fs")

async function browser(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)

    await page.screenshot({path: './screenshot.png'});
    writeFileSync("./output.txt", await page.content());
    await browser.close();
}


browser("https://joelee.works");
