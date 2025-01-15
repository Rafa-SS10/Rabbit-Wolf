import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  //got to page you want
  await page.goto('http://localhost:3000');

  //Expect to have the correct URL
  await expect(page).toHaveURL('http://localhost:3000');
});

test('create item', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  //Write in the input box
  await page.getByPlaceholder('Enter a name').fill('Banana');
  //Expect to have the correct input value
  await expect(page.getByPlaceholder('Enter a name')).toHaveValue('Banana')
  
  //Click Add Button
  await page.getByRole('button', { name: 'Add' }).click();
  //Check if Banana is visible
  await expect(page.getByText('Banana')).toBeVisible();
});

test.describe('List management', ()=>{
  //Executes before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByPlaceholder('Enter a name').fill('Banana');

    await page.getByRole('button', { name: 'Add' }).click();
  })

  test('delete item', async ({page})=>{
    //Click Delete Button
    await page.getByRole('button', { name: 'Delete' }).click();
    //Checks if Banana is not visible (hidden)
    await expect(page.getByText('Banana')).toBeHidden();
  })

  test('Complete item', async ({page})=>{
    //Click Done Button
    await page.getByRole('button', { name: 'Done' }).click();
    //Checks if Banana has a line-through
    await expect(page.getByText('Banana')).toHaveCSS('text-decoration', /line-through/);

  })
})