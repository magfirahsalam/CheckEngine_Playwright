const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);

test('Enable/Disable Entire Field Group', async ({ page }) => {
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div:nth-child(4) > div > ._arrow_c5wks_1 > .kbase').first().click();
  await page.getByText('report 2').click();
  await page.getByTestId('showMoreButton').click();
  await page.locator('#root #destination-drag-0 i').click();
  await page.locator('div').filter({ hasText: /^partner_name$/ }).nth(1).click();
  await page.locator('#destination-drag-0 i').click();
  await page.getByTestId('undefined-removeBtn').locator('i').click();
  await page.locator('#destination-drag-0 i').click();
  await page.locator('#destination-drag-1 i').click();
  await page.locator('#destination-drag-0 i').click();
  await page.getByTestId('popupWrapper').getByTestId('buttonRoot').click();
  await page.locator('div:nth-child(2) > ._root_1ddq9_1 > ._inner_1ddq9_26 > ._icon_1ddq9_21').click();
  await expect(page.getByTestId('showMoreButton')).toBeVisible();
});