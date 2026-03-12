const path = require('path');

module.exports = {
  timeout: 600000,
  testDir: './test',

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  use: {
    channel: 'chrome',
    trace: 'on-first-retry',     
    video: 'retain-on-failure',  
    headless: false,
    ignoreHTTPSErrors: true,
    storageState: path.resolve(__dirname, 'test/storageState.json'),
    baseURL: 'https://hpscoutso-itg.corp.hpicloud.net/page/check-engine',
  },
};
