const path = require('path');
const { test, expect } = require('@playwright/test');
const { time } = require('console');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Apply Multiple Changes at Once', async ({ page }) => {
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div:nth-child(4) > div > ._arrow_c5wks_1 > .kbase').first().click();
  await page.mouse.wheel(0, 150);
  await expect(page.getByText('Complete Report')).toBeVisible({timeout: 3000});
  await page.getByText('Complete Report').click();
  await page.getByRole('button', { name: 'View Report' }).click();
  await page.getByTestId('showMoreButton').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-1 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-1 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.locator('#destination-drag-12 i').click();
  await page.locator('#destination-drag-6 i').click();
  await page.locator('#destination-drag-5 i').click();
  await page.locator('._content_1offr_29._content--with-left-adornment_1offr_34._content--with-right-adornment_1offr_37 > ._control_1offr_44').click();
  await page.locator('._container_info_1iolv_15').click();
  await page.locator('section').getByTestId('inputField').click();
  await page.locator('section').getByTestId('inputField').fill('computer');
  await page.mouse.wheel(500, 0);
  await expect(page.getByText('computer', { exact: true, timeout: 6000}));
  await page.getByTestId('trigger-button-filter-column-current_ce_comm_cdm:country').click();
  await page.getByTestId('popupWrapper').getByTestId('inputField').nth(1).click();
  await page.getByTestId('popupWrapper').getByTestId('inputField').nth(1).fill('swit');
  await page.timeout(3000);
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'View Report' }).click();  
  await expect(page.locator('div').filter({ hasText: /^Saved ViewsSaved ViewsView Report$/ }).getByTestId('inputField', {timeout: 5000})).toBeVisible;
  await expect(page.locator('td:nth-child(3)', { exact: true, timeout: 5000})).first();
});

await page.getByText('Report baru', { exact: true }).click();