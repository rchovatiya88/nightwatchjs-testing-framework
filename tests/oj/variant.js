var utils = require('../pages/oj/utils');

module.exports = {
  '@tags': ['variant'],
  before: function (browser) {
    utils(browser).openBrowser();
  },
  'Go to the login page': function (browser) {
    utils(browser).loginMainButton();
  },
  'login as admin': function (browser) {
    utils(browser).adminLogin();
    browser.pause(2000);
  },
  'Go to the Add Product Page': function (browser) {
    utils(browser).addProductPage();
    browser.pause(2000);
  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

