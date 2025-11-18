import {test, expect} from '@playwright/test';

test('Comprehensive locator strategies', async ({page}) => {
    console.log('=== Playwright Locator Strategies ===')
    console.log("🎯 Starting Comprehensive Locator Strategy Test");
    await page.goto('https://mini-bank.testamplify.com');

        //1. ByRole (Accessibility-friendly)
    const loginButton = page.getByRole('button', {name: 'login'});
    await expect(loginButton).toBeEnabled();
    console.log('✅ Role locators working');


        //2. ByText
    console.log('\n--- By Text Content ---');
    const heading = page.getByText('Manage Your Finances Seamlessly');
    await expect(heading).toBeVisible();
    console.log('✅ Text locators working');


        //3. ByPlaceholder
    console.log('\n--- By Placeholder ---');
    loginButton.click();
    const usernameByPlaceholder = page.getByPlaceholder('you@example.com');
    const passwordByPlaceholder = page.getByPlaceholder('Enter your password');


    await expect(usernameByPlaceholder).toBeVisible();
    await expect(passwordByPlaceholder).toBeVisible();
    console.log('✅ Placeholder locators working');

        //Fill in data (username and password)
    await usernameByPlaceholder.fill('testuser2@yopmail.com');
    await passwordByPlaceholder.fill('Pass2005#');

        //4. By XPath
    console.log('\n--- By XPath (Advanced) ---');
    const loginButtonByXPath = page.locator('xpath=//button[@type="submit"]');
    await loginButtonByXPath.click();
    const titleByXPath = page.locator('xpath=//h2[text()= "Overview"]')
    await expect(titleByXPath).toBeVisible();
    console.log('✅ XPath locators working');

        //5. By CSS Selector
    console.log('\n--- By CSS Selector ---');
    const titleByCSS = page.locator('div.flex.justify-between.items-center small.text-gray-400');
    await expect(titleByXPath).toBeVisible();
    console.log('✅ CSS Selectors locators working');
        // Click Logout button
    const logoutButtonByCSS = page.locator('button:has(svg.iconify)');
    await logoutButtonByCSS.click();
    console.log('✅ CSS Selectors locators working');

        


}); 