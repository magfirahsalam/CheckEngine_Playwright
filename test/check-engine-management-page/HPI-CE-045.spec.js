const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Verify execution list display', async ({ page }) => {
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout: 600000 });
  await page.locator('a[href="/page/check-engine"]').locator('..').hover();
  await expect(page.getByRole('link', { name: 'Check Engine Management', exact: true })).toBeVisible({ timeout: 5000 });
  await page.getByRole('link', { name: 'Check Engine Management', exact: true }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByTestId('table-column-th-name')).toBeVisible({ timeout: 60000 });
});  
