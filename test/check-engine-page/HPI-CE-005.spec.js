const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Select Individual Fields', async ({ page }) => {
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div:nth-child(4) > div > ._arrow_c5wks_1 > .kbase').first().click();
  await expect(page.getByText('Report baru')).toBeVisible();
  await page.getByText('Report baru', { exact: true }).click();
  await page.getByTestId('removeBtn').locator('i').click();
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').nth(1).click();
  await page.getByTestId('popupWrapper').getByTestId('buttonRoot').click();
  await page.locator('div:nth-child(6) > ._root_1ddq9_1 > ._inner_1ddq9_26 > ._icon_1ddq9_21').click();
  await page.getByTestId('popupWrapper').getByTestId('buttonRoot').click();
  await page.getByRole('button', { name: 'View Report' }).click();
});