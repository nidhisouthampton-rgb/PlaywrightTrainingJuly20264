import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


//Note: execute these testcase through base typescript/Js code runner

//IIFE function: immediate invoke function expression
(function ()
{
    console.log("Hello All");
    
})();//call


(function data()
{
    console.log("Test for data....");
    
})();

//playwright script

(async()=>{
   
    let browser:Browser=await chromium.launch({channel:'msedge',headless:false});

    //context
    let browserContext:BrowserContext=await browser.newContext();

    //page
    let page:Page=await browserContext.newPage();

    await page.goto("https://www.amazon.in");

    //

    await page.close();
    await browserContext.close();
    })();