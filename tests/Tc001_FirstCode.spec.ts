
//add test runner
import {Browser, chromium, test} from "@playwright/test";

test("Test for Google application launch",async({page})=>{

//To opne any application
await page.goto("https://www.google.com/");

//Get the title of current page: title()
console.log("Application title is: "+await page.title());

})

