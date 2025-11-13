// playwright.dev/docs/test-assertions = documentation of assertions


import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {

  await page.goto('http://uitestingplayground.com/textinput');

  //make sure input is visible
  //select input and fill up the input with some text
  //click in the button
  //verify the button text is updated

  //when it is an id, we use # inside the ()
  await expect(page.locator('#newButtonName')).toBeVisible;
  //above means, I'm expecting the input to be visible
  

  await page.locator('#newButtonName').fill('jude');
  //above means that I'm filling "jude" in the input

  await page.locator('#updatingButton').click();

  await expect(page.locator('#updatingButton')).toContainText('jude');
    //remember if you want to verify the automation is actually doing the 
    //correct step by step
    //open the playwright.config.ts file
    //in use, after html, add the slowmo action (details in notebook)
    //launchOptions: {
    //     slowMo: 1000
    //  },
    //after that, run as always with --headed
    //npx playwright test assert --headed
});