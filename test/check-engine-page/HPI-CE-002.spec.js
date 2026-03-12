const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Reset Fields and Filters', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().click();
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().fill('latest');
  await page.getByText('Latest Group', {exact: true}).click();
  await page.waitForTimeout(10000);
  await page.locator('div:nth-child(4) > div > ._arrow_c5wks_1 > .kbase').first().click();
  await page.waitForTimeout(3000);
    const completeReport = page.getByText('Complete Report', {exact: true}); 
    await page.waitForTimeout(5000);
    await page.mouse.wheel(0, 300);
    await completeReport.scrollIntoViewIfNeeded();  
    await expect(completeReport).toBeVisible();    
    await page.waitForTimeout(5000);
    await completeReport.click();  
  await page.getByRole('button', { name: 'View Report' }).click();
  await expect(page.getByRole('heading', { name: 'Filters', exact: true })).toBeVisible({ timeout: 10000 });

});