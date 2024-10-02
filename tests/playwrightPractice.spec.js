import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
   await page.goto("https://www.youtube.com/");

   await page.locator("//div[contains(@class, 'yt-spec-button-shape-next__button-text-content')]//span[text()='Reject all']").click();

   let searchBox = page.locator("//input[@id='search']");

   await searchBox.click();
 
   await searchBox.fill('Cydeo');
 
  
   await searchBox.press('Enter');
 
   
   let firstResult = page.locator("(//a[@id='video-title'])[1]");
 
   await firstResult.click();
 
   //await page.waitForTimeout(3000);
  

});