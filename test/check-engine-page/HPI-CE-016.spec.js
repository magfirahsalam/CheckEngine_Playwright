const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Switch Between Column Batches', async ({ page }) => 
{
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().click();
  await expect(page.getByText('Report 1', {timeout: 3000})).toBeVisible();
  await page.getByText('Report 1', { exact: true }).click();
  await page.getByRole('button', { name: 'View Report' }).click();
  await expect(page.getByRole('heading', { name: 'Report Data' })).toBeVisible();
  await page.locator('button:has(i.kbase-omni-arrows-right)').click();
  await expect(page.locator('button:has(i.kbase-omni-arrows-left)', {timeout: 3000}));
  await page.locator('button:has(i.kbase-omni-arrows-left)').click();
  await expect(page.locator('button:has(i.kbase-omni-arrows-right)', {timeout: 8000}));

});