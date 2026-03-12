const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Filter Panel Visibility Based on Report', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
    await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().click();
    await page.mouse.wheel(0, 300);
        await expect(
          page.getByText('Complete Report', {exact: true})
          ).toBeVisible({ timeout: 60000 }); 
    await page.getByText('Complete Report').click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'View Report' }).click();
    await page.getByRole('heading', { name: 'Filters'});
    await page.waitForTimeout(5000);
    await page.locator('div:nth-child(4) > div > ._arrow_c5wks_1 > .kbase').first().click();
    await expect(
          page.getByText('Report baru', {exact: true})
          ).toBeVisible({ timeout: 60000 }).toBeVisible();
    await page.getByText('Report baru', {exact: true}).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button',
       { name: 'View Report' }).click();
    await page.waitForTimeout(15000);
    await expect(
          page.getByTestId('table-column-th-apj_elite_reports:tdqi_score_above_85')
          ).toBeVisible({ timeout: 60000 });

  
    });