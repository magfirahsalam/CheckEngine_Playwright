const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Save New Configuration', async ({ page }) => {
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div:nth-child(4) > div > ._arrow_c5wks_1 > .kbase').first().click();
  await page.mouse.wheel(0, 150);
  await expect(page.getByText('Complete Report')).toBeVisible({timeout: 3000});
  await page.getByText('Complete Report').click();
  await page.getByRole('button', { name: 'View Report' }).click();
  await page.locator('section').getByTestId('inputField').click();
  await page.locator('section').getByTestId('inputField').fill('as');
  await page.mouse.wheel(450, 0);
  await expect(page.getByTestId('table-column-th-current_ce_comm_cdm:partner_english_name')).toBeVisible({timeout: 3000});
  await page.getByTestId('trigger-button-filter-column-current_ce_comm_cdm:partner_english_name').click();
  await page.getByTestId('popupWrapper').getByTestId('inputField').nth(1).click();
  await page.getByTestId('popupWrapper').getByTestId('inputField').nth(1).fill('micro');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('div').filter({ hasText: /^Saved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').click();
  await page.locator('div').filter({ hasText: /^Saved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').fill('thisisautomateforconfiguration');
  await page.getByText('Create item').click();
  await expect(page.locator('div').filter({ hasText: /^Saved ViewsSaved ViewsView Report$/ }).getByTestId('inputField')).toBeVisible;

});