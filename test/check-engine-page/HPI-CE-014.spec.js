const path = require('path');
const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});
  test.setTimeout(600000);

  test('Export Current Result', async ({ page }) => 
{
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'domcontentloaded', timeout:600000 });
  await page.locator('div').filter({ hasText: /^ReportReportColumnsColumnsSaved ViewsSaved ViewsView Report$/ }).getByTestId('inputField').first().click();
  await expect(page.getByText('Report baru', {exact: true, timeout: 3000})).toBeVisible();
  await page.getByText('Report baru', { exact: true }).click();
  await page.getByTestId('showMoreButton').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.locator('#destination-drag-6 i').click();
  await page.locator('#destination-drag-2 i').click();
  await page.getByTestId('popupWrapper').locator('#destination-drag-0 i').click();
  await page.locator('#destination-drag-8 i').click();
  await page.locator('#destination-drag-5 i').click();
  await page.locator('#destination-drag-4 i').click();
  await page.locator('#destination-drag-7 i').click();
  await page.locator('#destination-drag-2 i').click();
  await page.locator('#destination-drag-5 i').click();
  await page.locator('._container_1iolv_8').click();
  await page.getByRole('button', { name: 'View Report' }).click();
  await expect(page.getByRole('heading', { name: 'Report Data', timeout: 8000 })).toBeVisible();
  let downloadPromise = page.waitForEvent('download', { timeout: 600000 });
   await page.getByRole('button', { name: 'Export (Excel / ODS)' }).click();
    let download = await downloadPromise;
    let filename = download.suggestedFilename();
    let filePath = path.resolve(__dirname, '../exports', filename);
    await download.saveAs(filePath);
    let workbook = XLSX.readFile(filePath, { cellDates: true, raw:false});
    let sheetName = workbook.SheetNames[0];
    let sheet = workbook.Sheets[sheetName];
    let data = XLSX.utils.sheet_to_json(sheet, {defval: null});
    let countryExists = data.some(rows => rows.country === 'Philippines');
    await page.waitForTimeout(2000);
    expect(countryExists).toBeTruthy();

});
