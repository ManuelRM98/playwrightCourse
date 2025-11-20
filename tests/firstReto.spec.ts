//first reto
// please create a playwright test where you need to:
// 1. open the next website https://automationexercise.com/
// 2. click on "ver mas detalles" from the first product
// 3. add "3" for the items of the product
// 4. click on add the product
// 5. verify the pop-up "Added!" is shown
// 6. click the "continue shopping" button
// 7. verify the pop-up is no longer visible


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' View Product' }).first().click();

  await page.locator('#quantity').fill('3');
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await expect(page.getByRole('heading', { name: 'Added!' })).toBeHidden();
  

});