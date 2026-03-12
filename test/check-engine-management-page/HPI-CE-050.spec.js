const path = require('path');
const { test, expect } = require('@playwright/test');

console.log('StorageState path:', path.resolve(__dirname, '../storageState.json'));

test.use({
  storageState: path.resolve(__dirname, '../storageState.json')});

  test.setTimeout(600000);
  
test('Verify scheduled executions', async ({ page }) => {
    await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine-management', { waitUntil: 'networkidle', timeout:600000 });
    await expect(page.getByTestId('table-column-th-name', {exact: true})).toBeVisible({timeout: 8000});
    await expect(page.getByRole('cell', { name: 'Scheduled Job' }));

});
