Navigate to the Playwright_example folder;

Run "npm start" (if it doesnt work because of react-scripts, run "npm install react-scripts" and then try again);

Install the playwright vscode extension from microsoft;

Run "npx playwright test"

Run "npx playwright test --ui" to check if everything is running correctly this should open playwright on a different window;

Go to the playwright window the tests should run themselves.

###File Structure###

Besides the normal React files playwright adds:

test-results : The summary of the last round of tests, along with the information you decided to save to save according to the configs;

playwright.config.ts : the configuration file for playwright, besides the default configs, in the example the following lines were added:
    
    reporter: [
    ['list'],
    ['json', {  outputFile: './test-results/test-results.json' }],
    ['html']
  ],

    This changes makes it that the results of the tests are print as a list to console, written in a json file anda as an html.


    use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: {
      mode: 'retain-on-failure',
      size: { width: 640, height: 480 }
    }
  },

  This makes it so that when running tests, they are recorded in case of failure

tests : The folder where you store your test files, these test files are run sequentially, although the tests inside each one are ran parallel by default ( you can change that setting in the configurations "fullyParallel: true")

###New project###

When you first want to apply playwright to your project you should run "npm init playwright@latest" on your project source

Four options will appear:

-Do you want to use TypeScript or JavaScript?

-Where to put your end-to-end tests?

-Add a GitHub Actions workflow?

-Install Playwright browsers (can be done manually via 'npx playwright install')?

Choose whichever suits your project best (recommended you install playwright browsers)

Inside the tests folder (by default is where you should write your tests)

        test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });

"test('has title', async ({ page }) => {" - This line defines a test named "has title". The async ({ page }) part indicates that the test function is asynchronous and it will use the page object provided by Playwright

"await page.goto('https://playwright.dev/');" - This line tells the browser to navigate to the specified URL (https://playwright.dev/). The await keyword ensures that the script waits for the navigation to complete before moving on to the next step

"await expect(page).toHaveTitle(/Playwright/);" - This line uses Playwright's expect function to check if the page's title contains the substring "Playwright". The /Playwright/ is a regular expression that matches any title containing the word "Playwright".


###Basic actions###
In order to perform actions with ui elements Playwright detects them using Locators (https://playwright.dev/docs/locators) an easier way to know which locators belongs to each element is by mousing over them on after running  "npx playwright test --ui".

Depending on the element it has various actions at its disposal (Navigation, interaction)

###Assertions###
Using the expect(value) funtion playwright allows you to check if the matcher reflects the expectation


###Grouping tests###
Using test.describe you can group tests, and using some test hooks (https://playwright.dev/docs/api/class-test) its possible to apply changes to these tests

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});

Tests are normally ran parallel to each other, think of it as if you were opening a new browser, you will need to input the url, fill in forms everytime, with test.beforeEach, before every test inside test.describe, test.beforeEach function will be run.