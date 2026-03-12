const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Verify delete execution functionality', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine-management', { waitUntil: 'networkidle', timeout:600000 });
    await expect(page.getByTestId('table-column-th-name', {exact: true})).toBeVisible({timeout: 8000});
    let newexecutionname = `automatedexecution_${rowCount + 1()}`;
    await page.getByRole('button', { name: 'New Execution' }).click();
    await page.getByRole('textbox', { name: 'Enter execution name' }).fill(newexecutionname);
    await page.getByRole('button', { name: 'Create Execution'}).click();
    await expect(page.locator('tbody tr').first()).toContainText(newexecutionname, { timeout: 60000 });
    await page.waitForTimeout(5000);
    const targetRow = page.locator('tbody tr').filter({ hasText: newexecutionname });
    await targetRow.getByTestId('buttonRoot').click();
    await page.waitForTimeout(5000);
    await page.getByTestId('confirm-dialog-button-Delete').click();
    await expect(targetRow).toHaveCount(0, {});
    await page.waitForTimeout(5000);

});
