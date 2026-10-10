


import {test,expect} from "@playwright/test";


test("Test for mobile viewPort",async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await expect(page).toHaveTitle("Swag Labs");

    console.log("Title is: "+await page.title());
  //Waits for the given timeout in milliseconds.
    await page.waitForTimeout(4000);
    


})