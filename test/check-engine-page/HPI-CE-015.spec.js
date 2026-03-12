const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Navigate Between Data Pages', async ({ page }) => 
{
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().click();
  await expect(page.getByText('Latest Group', {timeout: 3000})).toBeVisible();
  await page.getByText('Latest Group', { exact: true }).click();
  await page.getByRole('button', { name: 'View Report' }).click();
  await expect(page.getByRole('heading', { name: 'Report Data' })).toBeVisible();
  await page.locator('button:has(i.kbase-omni-chevron-right)').click();
  await page.getByRole('button', { name: '3' }).click();
  await page.locator('button:has(i.kbase-omni-chevron-left)').click();
  await page.locator('button:has(i.kbase-omni-chevron-right)').click();
  await page.locator('button:has(i.kbase-omni-chevron-right)').click();
  await expect(page.getByRole('button', { name: '4', timeout:8000 })).toBeVisible();

});