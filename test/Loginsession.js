const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  await page.goto('https://hpscoutso-itg.corp.hpicloud.net/page/check-engine', { waitUntil: 'networkidle', timeout:600000 });
  await page.getByTestId('buttonRoot').click();
  await page.waitForURL('**login3.stg.cd.id.hp.com**', { timeout: 120000 });
  await page.getByRole('textbox', { name: 'username' }).fill('magfirah.salam@hp.com');
  await page.getByRole('button', { name: 'Use password' }).click();
  await page.getByRole('textbox', { name: 'Enter your Email address' }).fill('magfirah.salam@hp.com');
  await page.getByText('Log On').click();
  await page.getByRole('textbox', { name: 'Enter your Password' }).fill('@Blessed2026');
  await page.getByText('Log On').click();
 await page.waitForFunction(() => {
  const otpInput = document.querySelector('#otp');
  return otpInput && otpInput.value.length >= 6;
  },
  { 
    timeout: 600000 });
  await page.getByRole('button', { name: 'Sign On' }).click();
await page.waitForSelector('text=Report page', { timeout: 600000 });
  await context.storageState({
    path: path.resolve(__dirname, 'storageState.json')
  });
console.log('Login session saved');
await browser.close();
})();
