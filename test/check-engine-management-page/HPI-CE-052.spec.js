const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Verify manual execution logs', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine-management', { waitUntil: 'networkidle', timeout:600000 });
    await expect(page.getByTestId('table-column-th-name', {exact: true})).toBeVisible({timeout: 8000});
    // await page.getByTestId('table-paging').locator('i').click();
    // await page.getByText('All').click();
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(7000);
    await page.getByRole('row', { name: /61Execution/ }).getByTestId('radioRoot').click();
    await expect(page.getByRole('row', { name: /61Execution/ }).locator('div._icon--checked_1ijgs_56')).toBeVisible({ timeout: 10000 });
    await page.getByRole('cell', { name: '61Execution' }).click();
    await page.waitForTimeout(5000);
    await expect(page.getByText('Execution details')).toBeVisible();
    await page.locator('tbody tr', { hasText: 'apollo' }).locator('button[data-testid="buttonRoot"]').filter({ has: page.locator('i.kbase-caret-right') }).click();
    await expect(page.getByTestId('table-column-th-')).toBeVisible();
    await page.waitForTimeout(5000);
});
