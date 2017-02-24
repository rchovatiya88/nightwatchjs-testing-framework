module.exports = {
  '@tags': ['clicks'],
  'go to click click ': function (browser) {
    browser
      .url('https://clickclickclick.click')
      .waitForElementVisible('body', 5000)
      .click('body > main > div > div:nth-child(1) > a')
      .pause(5000);
    browser.setWindowPosition(1000, 10)
      .click('body > main > div > div:nth-child(1) > a')
        .pause(2000);
    browser.setWindowPosition(10, 1000)
      .pause(2000)
      .click('body > main > div > div:nth-child(1) > a');
    browser.setWindowPosition(2000, 100)
      .click('body > main > div > div:nth-child(1) > a');
    browser.windowSize()
      .click('body > main > div > div:nth-child(1) > a')
      .click('body > main > div > div:nth-child(1) > a')
      .pause(5000);
  },

  'Browser quit': function (browser) {
    browser
      .pause(5000)
      .end();
  }
};
