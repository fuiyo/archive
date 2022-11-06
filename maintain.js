const puppeteer = require('puppeteer');
const { readFileSync, writeFileSync } = require("fs")

async function browser(url) {
    const browser = await puppeteer.launch();
   
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=joeleeofficial+github`, {waitUntil: ['networkidle0']});
    //await page.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/joeleeofficial'))?.click()`)
    await page.click("a[href='https://github.com/joeleeofficial']");
   
    const page2 = await browser.newPage();
    await page2.goto(`https://www.google.com/search?q=leecheeyong`, {waitUntil: ['networkidle0']});
    //await page2.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://github.com/leecheeyong'))?.click()`)
    await page2.click("a[href='https://github.com/leecheeyong']");
      
    const page3 = await browser.newPage();
    await page3.goto(`https://www.youtube.com/watch?v=U9BtF_oMHQg`, {waitUntil: ['networkidle0']});
    await page3.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    
    const page4 = await browser.newPage();
    await page4.goto(`https://www.youtube.com/shorts/U9BtF_oMHQg`, {waitUntil: 'networkidle0'});
    await page4.evaluate(`document.querySelector(".ytp-large-play-button").click()`)
    
    const page5 = await browser.newPage();
    await page5.goto(`https://www.google.com/search?q=joelee+chee+yong+lee`, {waitUntil: ['networkidle0']});
    //await page5.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://www.joelee.works' || a.href === 'https://www.joelee.works/'))?.click()`)
    await page5.click("a[href='https://www.joelee.works/']");
    
    const page6 = await browser.newPage();
    await page6.goto(`https://www.google.com/search?q=jetbrawley`, {waitUntil: ['networkidle0']});
    //await page6.evaluate(`([...document.querySelectorAll("a")].find(a => a.href === 'https://brawley.js.org' || a.href === 'https://brawley.js.org/'))?.click()`)
    await page6.click(`a[href='https://brawley.js.org/']`);
    
    setTimeout(async () => {
    await page6.screenshot({path: './brawley.png', fullPage: true});
    await page5.screenshot({path: './joelee.png', fullPage: true});
    await page4.screenshot({path: './yt-short.png', fullPage: true});
    await page3.screenshot({path: './youtube.png', fullPage: true});
    await page2.screenshot({path: './screenshot1.png', fullPage: true});
    await page.screenshot({path: './screenshot.png', fullPage: true});

    writeFileSync("./output.txt", await page.content());
    await browser.close();
    }, 15000)
}

browser();
