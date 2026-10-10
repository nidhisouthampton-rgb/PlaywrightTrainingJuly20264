/*
To control test execution we use tags/attributes

only
skip

*/

import {test} from "@playwright/test";

test("Test Case1: Google launch",async({page})=>{

    //open application
    await page.goto("https://www.google.com");

    console.log("Title is: "+await page.title());
    
})


test("Test Case2:Facebook launch",async({page})=>{

    //open application
    await page.goto("https://www.facebook.com");

    console.log("Title is: "+await page.title());
    
})


test.only("Test Case3:OpenCart launch",async({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?");

    console.log("Title is: "+await page.title());
    
})