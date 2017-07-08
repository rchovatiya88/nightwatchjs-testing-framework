module.exports = function (browser) {
  this.openBrowser = function () {
    browser
      .windowMaximize()
      .url('http://ornaitjewels.com/')
      .waitForElementVisible('body', 1000);
    return browser;
  };
  this.loginMainButton = function () {
    browser
    .click('.float-right>li:nth-child(2)>a:nth-child(1)')
    .waitForElementVisible('body', 1000);
  };
  this.adminLogin = function () {
    browser
   .setValue('#id_username', 'admin@admin.com')
   .setValue('#id_password', 'admin')
   .click('body > div.container.maincontent > div > div > div.col-md-6.login__form > form > div > div > button');
  };
  this.DashboardButton = function () {
    browser
    .click('.float-right>li:nth-child(1)>a');
  };
  this.addProductPage = function () {
    browser
    .url('http://ornaitjewels.com/dashboard/products/');
  };
  this.addProductButton = function () {
    browser
    .click('.btn-fab.btn-floating.btn-large.waves-effect.waves-light.teal.modal-trigger');
  };
  this.addProductButton = function () {
    browser
    .click('.btn-fab.btn-floating.btn-large.waves-effect.waves-light.teal.modal-trigger');
  };
  this.SelectEarringButton = function () {
    browser
    .click('.input.input-field.col.s12>p:nth-child(2)>label');
  };
  this.SelectPendantButton = function () {
    browser
    .click('.input.input-field.col.s12>p:nth-child(3)>label');
  };
  this.SelectRingButton = function () {
    browser
    .click('.input.input-field.col.s12>p:nth-child(4)>label');
  };
  this.CreateNewButton = function () {
    browser
    .click('.btn');
  };
  this.addTitleDescriptionPrice = function () {
    browser
    .setValue('#id_name', 'AUTOMATION TEST RING')
    .setValue('#id_description', 'SKU: TEST DESCRIPTION')
    .setValue('#id_price', '100');
  };
  this.productRingCategory = function () {
    browser
    .click('xpath', '//li//input')
    .click('xpath', '//li[contains(text(),"Rings")]');
  };
  this.CreateProductButton = function () {
    browser
    .click('xpath', 'html/body/main/div/div/div/div[1]/form/div[2]/button');
    browser.pause(3000);
  };
  this.AdminProductPage = function () {
    browser
    .url('http://ornaitjewels.com/dashboard/products/');
  };
  this.testProduct1 = function () {
    browser
    .setValue('#id_name', 'AUTOMATION TEST RING1')
    .setValue('#id_description', 'SKU: TEST DESCRIPTION1')
    .setValue('#id_price', '1010');
  };
  this.imageTab = function () {
    browser
    .click('li.tab:nth-child(4) > a:nth-child(1)');
  };
  this.AdminProduct1 = function () {
    browser
    .url('http://ornaitjewels.com/dashboard/products/95/update/');
  };
  this.addImageButton = function () {
    browser
    .click('#images-btn');
  };
  this.uploadImage = function () {
    browser
    .setValue('#id_image_0', '/Users/ronakchovatiya/Downloads/MR1084/MR1084-RB-DB-2.jpg');
  };
  // #id_image_0
  return this;
};
