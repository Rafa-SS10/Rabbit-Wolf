import { test, expect } from '@playwright/test';

test.describe('List management 2', ()=>{
  //Executes before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByPlaceholder('Enter a name').fill('Banana');

    await page.getByRole('button', { name: 'Add' }).click();
  })

  test('delete item 2', async ({page})=>{
    //Click Delete Button
    await page.getByRole('button', { name: 'Delete' }).click();
    //Checks if Banana is not visible (hidden)
    await expect(page.getByText('Banana')).toBeVisible();
  })

  test('Complete item 2', async ({page})=>{
    //Click Done Button
    await page.getByRole('button', { name: 'Done' }).click();
    //Checks if Banana has a line-through
    await expect(page.getByText('Banana')).toHaveCSS('text-decoration', /line-through/);

  })
})