# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Playwright

Playwright is an open-source automation framework developed by Microsoft for testing web applications. It allows developers to automate browser interactions across different browsers, including Chromium (Chrome, Edge), Firefox, and WebKit (Safari). Playwright is particularly useful for end-to-end testing, ensuring that web applications function correctly from the user's point of view.

This example and explanation assumes you are using Visual Studio Code and have the playwright extension (Microsoft) installed.

If you want to look at all the documentation yourself you can go to [Playwright](https://playwright.dev/docs/intro).
## Starting the example

Navigate to the Playwright_example folder;

Run `npm install playwright` to install the playwright package;

Run `npm start` (if it doesnt work because of react-scripts, run `npm install react-scripts` and then try again);

Run `npx playwright test`

Run `npx playwright test --ui` to check if everything is running correctly this should open playwright on a different window;

Go to the playwright window the tests should run themselves.

## File Structure

Besides the normal React files playwright adds:

`test-results` : The summary of the last round of tests, along with the information you decided to save to save according to the configs;

`playwright.config.ts` : the configuration file for playwright, besides the default configs, in the example the following lines were added:
    
    reporter: [
    ['list'],
    ['json', {  outputFile: './test-results/test-results.json' }],
    ['html']
    ],

This changes makes it so that the results of the tests are printed as a list to console, written in a json file anda as an html.


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

`tests` : The folder where you store your test files, these test files are run sequentially, although the tests inside each one are ran parallel by default ( you can change that setting in the configurations "fullyParallel: true")

## New project

When you first want to apply playwright to your project you should run `npm init playwright@latest` on your project source

Four options will appear:

 1. Do you want to use TypeScript or JavaScript?

 2. Where to put your end-to-end tests?

 3. Add a GitHub Actions workflow?

 4. Install Playwright browsers (can be done manually via `npx playwright install`)?

Choose whichever suits your project best (recommended you install playwright browsers)

Inside the tests folder (by default is where you should write your tests)

    test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });

`test('has title', async ({ page }) => {` - This line defines a test named "has title". The async ({ page }) part indicates that the test function is asynchronous and it will use the page object provided by Playwright

`await page.goto('https://playwright.dev/');` - This line tells the browser to navigate to the specified URL (https://playwright.dev/). The await keyword ensures that the script waits for the navigation to complete before moving on to the next step

`await expect(page).toHaveTitle(/Playwright/);` - This line uses Playwright's expect function to check if the page's title contains the substring "Playwright". The /Playwright/ is a regular expression that matches any title containing the word "Playwright".


## Basic actions
In order to perform actions with ui elements Playwright detects them using [Locators] (https://playwright.dev/docs/locators) an easier way to know which locators belongs to each element is by mousing over them on after running  `npx playwright test --ui`.

Depending on the element it has various actions at its disposal (Navigation, interaction).

## Assertions
Using the `expect(value)` function playwright allows you to check if the matcher reflects the expectation, this is the function that tests the element under scrutiny, in case the mathcher does not match the expectation the test fails.


## Grouping tests
Using `test.describe` you can group tests, and using some test [hooks](https://playwright.dev/docs/api/class-test) its possible to apply changes to these tests

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

Tests are normally run parallel to each other, think of it as if you were opening a new browser, you will need to input the url, fill in forms everytime, with test.beforeEach, before every test inside test.describe, test.beforeEach function will be run.

## Playwright UI

Playwright posseses a very useful UI, when running the command `npx playwright test --ui` you will open a window for the UI, there you will find a couple of useful tools.

1. The __Action__, __Before__ and __After__ tabs allow you to see the state of your app __Before__ and __After__ the __Action__;
###
2. Right next to the before mentioned tabs there is a button with three concentric circles, if that is selected you can then click UI elements of your app and get their locator, this locator will appear on the console at the bottom of the playwright test UI (ex: `getByRole('heading', { name: 'Shopping List' }) ` appears after clicking the Shopping List header);
###
3. Besides the Locator information, the bottom side of the UI contains information related to:
    - Test source code;
    - Call information;
    - Error information;

## Playwright Extension
The playwright extension accelerates the development of the tests by facilitating their writing.
Go to the testing tab of vscode, if you installed the extension there should be a playwright tab at the bottom. 

##### Pick locator
If you simply want to search for a locator click "Pick locator", enter the url for the app on the browser that will open and like in the playwright UI click the elements you want and their locator will be saved to your clipboard.
##### Record new
This option will create a new test file and a open a experimental browser where your action are recorded and translated to the created file, on the top of the page there are options in case you want to perform certain action or write assertions.
##### Record at cursor
Does the same as Record new but starts writing from where your cursor was on a test file.


