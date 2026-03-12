const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Verify execution statistics icons', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine-management', { waitUntil: 'networkidle', timeout:600000 });
    await expect(page.getByTestId('table-column-th-name', {exact: true})).toBeVisible({timeout: 8000});
    // await page.getByTestId('table-paging').locator('i').click();
    // await page.getByText('All').click();
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(7000);
    await page.getByRole('row', { name: /61Execution/ }).getByTestId('radioRoot').click();
    await expect(page.getByRole('row', { name: /61Execution/ }).locator('div._icon--checked_1ijgs_56')).toBeVisible({ timeout: 10000 });
    const warningTextLocator = page.locator('div').filter({ hasText: /^:5$/ }).locator('i');
    await expect(warningTextLocator).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(5000);
});
