var utils = require('../pages/oj/utils');

module.exports = {
  '@tags': ['addBaseProducts'],
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
  'Add product1': function (browser) {
    utils(browser).addProductButton(); // Big + button
    browser.pause(2000);
    utils(browser).SelectRingButton(); // Pop up Ring Category
    browser.pause(2000);
    utils(browser).CreateNewButton(); // Pop up Create New button
    browser.pause(2000);
    utils(browser).Product1(); // Add title, description and price
    browser.pause(2000);
    utils(browser).productRingCategory();
    utils(browser).CreateProductButton();
    utils(browser).AdminProductPage();
  },
  after: function (browser) {
    browser.end();
  }
};
/** BROKEN DOWN PROCESS
   * 'Select the Ring category': function (browser) {
    utils(browser).addProductButton();
    browser.pause(2000);
    utils(browser).SelectRingButton(); // Ring Category
    browser.pause(2000);
    utils(browser).CreateNewButton();
    browser.pause(2000);
  },
  'Add Title Description and Price': function (browser) {
    utils(browser).addTitleDescriptionPrice();
  },
  'Select Product Ring Category': function (browser) {
    utils(browser).productRingCategory();
  },
  'Create the Product': function (browser) {
    utils(browser).CreateProductButton();
  },
  'Go to admin product page': function (browser) {
    utils(browser).AdminProductPage();
  },
   */