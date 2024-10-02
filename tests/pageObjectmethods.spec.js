import { expect, test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
  // goto https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");

  let actualTitle = await page.title();

  expect(actualTitle).toBe("Practice");
  
});

test("Getting the current URL of the page", async ({ page }) => {
    // goto https://practice.cydeo.com/`
    await page.goto("https://practice.cydeo.com/");

    let currentURL = page.url();

    console.log(currentURL);

    
  });

  test("Set the window size", async ({ page }) => {
    // goto https://practice.cydeo.com/`

    await page.setViewportSize({width: 1900, height: 1080});

    await page.goto("https://practice.cydeo.com/");

    

   
  });


  