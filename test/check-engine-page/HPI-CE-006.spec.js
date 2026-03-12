const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Tag Display for Many Selected Fields', async ({ page }) => {
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('._dropdown_wy6n6_1 > ._targetWrapper_1dty4_5 > ._root_1offr_1 > ._adornment_1offr_86').click();
  await page.getByText('Latest Group').click();
  await page.getByTestId('removeBtn').locator('i').click();
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').nth(1).click();
  await page.getByTestId('popupWrapper').getByTestId('buttonRoot').click();
  await page.locator('div:nth-child(2) > ._root_1ddq9_1 > ._inner_1ddq9_26 > ._icon_1ddq9_21').click();
  await page.locator('._icon_1ddq9_21').first().click();
  await expect(page.getByTestId('showMoreButton')).toBeVisible({timeout: 5000});
});