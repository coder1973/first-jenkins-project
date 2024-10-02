import { test } from '@playwright/test';

test('Youtube Searc', async ({ page }) => {
   await page.goto("https://www.youtube.com/");
  // Your test steps go here

   
  let searchBox = page.locator("//input[@id='search']");

  await searchBox.click();

  await searchBox.fill('Cydeo');

 
  await searchBox.press('Enter');

  
  let firstResult = page.locator("(//a[@id='video-title'])[1]");

  await firstResult.click();

  //await page.waitForTimeout(3000);


});