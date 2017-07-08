var utils = require('../pages/oj/utils');

module.exports = {
  '@tags': ['test'],
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
  'Go to the product': function (browser) {
    utils(browser).AdminProduct1();
  },
  'Add image': function (browser) {
    utils(browser).imageTab();
    utils(browser).addImageButton();
  },
  'image Upload': function (browser) {
    utils(browser).uploadImage();
    utils(browser).CreateProductButton();
  },
  after: function (browser) {
    browser.pause(3000);
    browser.end();
  }
};
