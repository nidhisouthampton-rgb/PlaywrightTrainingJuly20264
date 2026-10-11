

import {test,expect, Locator} from "@playwright/test";


test.only("Test for Interaction with Google search box",async({page})=>{

//open application
await page.goto("https://www.google.com/");


//Strategy2: IdentifyElement + perform action (Recommended)
await page.locator("textarea[name='q']").fill("Selenium");

/*
//Strategy 1: IdentifyElement + storeElement + validation + Action

let searchBoxAddress:Locator=page.locator("textarea[name='q']");

//validation(Autowaiting)
console.log("Is SerchBox is visible?: "+await searchBoxAddress.isVisible());
console.log("Is searchBox is enabled?: "+await searchBoxAddress.isEnabled());
console.log("Is searchBox is editable?: "+await searchBoxAddress.isEditable());

//Action
await searchBoxAddress.fill("Playwright");

//debugging command-pause
await page.waitForTimeout(2000);//2sec

*/






})

test("Test for AutoWaiting",async({page})=>{

    await page.goto("https://www.google.com");

    let serachEle=page.locator("textarea[name='PRIYANKA']");//30sec to serach on the page

    //perform action
    await serachEle.fill("Selenium");//Error: locator.fill: Test timeout of 30000ms exceeded.
})