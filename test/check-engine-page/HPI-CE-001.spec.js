const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Page Load & Basic UI Rendering', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().click();
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().fill('Report');
  await page.waitForTimeout(5000);
  await expect(page.getByText('Report baru', {exact: true })).toBeVisible();
  await page.getByText('Report baru',{ exact: true}).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'View Report' }).click();
  await page.waitForTimeout(15000);
});