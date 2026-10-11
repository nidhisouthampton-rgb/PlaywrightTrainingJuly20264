

import {test,expect} from "@playwright/test"

test("Test for CssSelector allsyntax",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/");

//signIn link: tagname with id
await page.locator("#SignIn").click();

//assertion: page should navigate to login
await expect(page).toHaveURL(/login/);
console.log("User Navigated to LoginPage!");

//Email: tagname with id
await page.locator("input#email-id").fill("test@gmail.com");

//Password: tagname with attribute
await page.locator("input[type='password']").fill("test123");

//checkbox: tagname with attribute
//await page.locator("input[type='checkbox']").click();

//checkbox/radiobutton: check() uncheck()
await page.locator("input[type='checkbox']").check();

//await page.locator("input[type='checkbox']").uncheck();

//SubmitButton
await page.locator("button.btn-primary").click();

//assert the test written on page
//page.locator("#new-customer").textContent();

let text:string=await page.locator("#new-customer").innerText();
console.log("Text is: "+text);

expect(text).toBe("New Customer");//variable level
await expect(page.locator("#new-customer")).toHaveText("New Customer");//page level


//signinOut: tagname with id,classname and attribute
await page.locator("a.nav-link[href='sign-out.html']").click();

await page.waitForTimeout(2000);

})









