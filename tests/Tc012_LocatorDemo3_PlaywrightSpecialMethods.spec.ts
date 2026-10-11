

import {test,expect} from "@playwright/test"



test("Test for multiple checkboxes first(),last(),nth()",async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form");

    await page.locator("input[type='checkbox']").first().check();
    await page.locator("input[type='checkbox']").last().check();
    await page.locator("input[type='checkbox']").nth(1).check();
    

    await page.waitForTimeout(2000);

})
