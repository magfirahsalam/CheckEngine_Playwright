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
  await page.locator('section').getByTestId('inputField').click();
  await page.locator('section').getByTestId('inputField').fill('digital');
  await expect(page.getByText('partner_name contains "digital"')).toBeVisible();
  await page.waitForTimeouttimeout(5000);
  await page.locator('button:has(i.kbase-omni-arrows-right)').click();
  await page.locator('button:has(i.kbase-omni-arrows-right)').click();
  await expect(page.getByText('digital', {timeout: 5000})).toBeVisible();
  await page.locator('button:has(i.kbase-omni-arrows-left)').click();
  await page.locator('button:has(i.kbase-omni-arrows-left)').click();
  await page.getByTestId('trigger-button-filter-column-current_ce_comm_cdm:sys_id').click();
  await page.getByTestId('popupWrapper').getByTestId('inputField').nth(1).click();
  await page.getByTestId('popupWrapper').getByTestId('inputField').nth(1).fill('110');
  await page.getByRole('button', { name: 'Apply' }).click();
  await expect(page.getByText('110',{ timeout: 8000})).toBeVisible();
  await expect(page.getByText('sys_id contains "110"', {timeout: 8000})).toBeVisible();
  await page.getByTestId('trigger-button-filter-column-current_ce_comm_cdm:sys_id').click();
  await page.getByTestId('popupWrapper').getByRole('button', { name: 'Clear' }).click();
  await expect(page.getByText('sys_id contains "110"', {timeout: 8000})).not.toBeVisible();
});
