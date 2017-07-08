module.exports = {
  '@tags': ['simpletest'],
  'go to jewelry website': function (browser) {
    browser
        .url('http://ornaitjewels.com/')
        .waitForElementPresent('body', 5000)
        .windowMaximize()
        .pause(5000);
  },
  'Go to through the products': function (browser) {
    browser
        .click('body > div.container.maincontent > div > div > div:nth-child(1) > a > div > div:nth-child(1) > span')
 /* back to homepage */.click('body > header > div:nth-child(2) > div > div > div.col-8.col-md-4.navbar__logo > a > div:nth-child(1)');
  },
  'close the browser': function (browser) {
    browser
        .pause(5000)
        .end();
  }
};
