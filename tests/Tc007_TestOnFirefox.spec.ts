

import {test,expect, firefox, Browser, Page} from "@playwright/test";

//use(): Specifies options or fixtures to use in a single test file 
test.use({browserName:'firefox'});
test("Test for Firefox browser",async({page})=>{

await page.goto("https://www.google.com");
//assert title
await expect(page).toHaveTitle("Google");
console.log("Title: "+await page.title());

})




test("Launch Firefox manually",async()=>{

let browser:Browser=await firefox.launch({headless:false});

let page:Page=await(await browser.newContext()).newPage();

await page.goto("https://www.facebook.com");

await page.waitForTimeout(2000);

})