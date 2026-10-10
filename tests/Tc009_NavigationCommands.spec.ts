

import {test} from "@playwright/test";

test("Test for Navigation in between app",async({page})=>{

    await page.goto("https://www.google.com");

    await page.waitForTimeout(1000);//1sec =1000ms

    await page.goto("https://www.facebook.com");

    //back
    await page.goBack();//google

     await page.waitForTimeout(1000);//1sec =1000ms

    //forward
    await page.goForward();//facebook

    await page.waitForTimeout(1000);//1sec =1000ms

    //refresh this page
    await page.reload();






})