const puppeteer = require('puppeteer');
const { readFileSync, writeFileSync } = require("fs")

async function browser(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://www.google.com/search?q=joeleeofficial`, {waitUntil: 'networkidle0'});
    await page.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/joeleeofficial'))?.click()`)
    await page.waitFor(5000);
    await page.screenshot({path: './screenshot.png', fullPage: true});
    const page2 = await browser.newPage();

    await page2.goto(`https://www.google.com/search?q=leecheeyong`, {waitUntil: 'networkidle0'});
    await page2.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/leecheeyong'))?.click()`)
    await page2.waitFor(5000);
    await page2.screenshot({path: './screenshot1.png', fullPage: true});
      
    const page3 = await browser.newPage();
    await page3.goto(`https://www.youtube.com/watch?v=U9BtF_oMHQg`, {waitUntil: 'networkidle0'});
    await page3.waitFor(5000);
    await page3.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    await page3.waitFor(3000);
    await page3.screenshot({path: './youtube.png', fullPage: true});
    writeFileSync("./output.txt", await page.content());
    await browser.close();
}

browser();
