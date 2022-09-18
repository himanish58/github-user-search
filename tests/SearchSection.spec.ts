import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/');
});

test.describe('First Load', () => {
	test('homepage has "Github User Search" in title', async ({ page }) => {
		await expect(page).toHaveTitle(/Github User Search/);
	});

	test('Search Button Should be disabled by default', async ({ page }) => {
		await page.locator('button').isDisabled;
	});

	test('Search Button is not disabled if there is some text in any of the input box', async ({
		page,
	}) => {
		await page.locator('#skill').fill('Javascript');
		await page.locator('button').isEnabled;
	});

	test('Search Button is not disabled if we clear text from input', async ({
		page,
	}) => {
		await page.locator('#skill').fill('');
		await page.locator('button').isEnabled;
	});
});
