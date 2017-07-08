module.exports = {
  '@tags': ['oj'],
  'go to oj': function (browser) {
    browser
      .url('http://ornaitjewels.com/')
      .waitForElementVisible('body', 1000);
    console.log('Home Page opened sucessfully');
  },
  'Login to the site': function (browser) {
    browser
    .windowMaximize()
      .click('body > header > div.navbar__login.hidden-sm-down > div > div > div:nth-child(2) > ul > li:nth-child(2) > a')
      .setValue('#id_username', 'admin@admin.com')
      .setValue('#id_password', 'admin')
      .click('body > div.container.maincontent > div > div > div.col-md-6.login__form > form > div > div > button');
  },
  'Create Ring Product': function (browser) {
    browser
      .url('http://ornaitjewels.com/dashboard/products/')
      .waitForElementVisible('body', 1000)
      .click('body > div.subheader.top-nav > div > div'); // Plus button
    browser.pause(4000)
      .click('#modal-product-class > div > form > div:nth-child(2) > div > p:nth-child(4) > label') // ring radio button
      .click('#modal-product-class > div > form > div:nth-child(3) > div > button'); // create button
    browser.pause(5000);
  },
  'Add Tile,description, price information': function (browser) {
    browser
        .setValue('#id_name', 'AUTOMATION TEST RING')
        .setValue('#id_description', 'SKU: TEST DESCRIPTION')
        .setValue('#id_price', '100');
  },
  'Add Specific Categories': function (browser) {
    browser
       .click('xpath', '//li//input')
       .click('xpath', '//li[contains(text(),"Rings")]');
    browser.pause(3000);
  },
  'Save the product': function (browser) {
    browser
        .click('#form-product > div.card-action.right-align > button');
  },
  'Check the Product': function (browser) {
    browser
      .url('http://ornaitjewels.com/dashboard/products/');
    browser.pause(5000);
  },
  'add new product2': function (browser) {
    browser
    .click('body > div.subheader.top-nav > div > div'); // Plus button
    browser.pause(4000)
    .click('#modal-product-class > div > form > div:nth-child(2) > div > p:nth-child(4) > label') // ring radio button
    .click('#modal-product-class > div > form > div:nth-child(3) > div > button'); // create button
    browser.pause(5000);
  },
  'Add information product2': function (browser) {
    browser
        .setValue('#id_name', '0.75 Carat Halo Daimond Engagement Bridal Ring Set 14K Solid Rose White Gold')
        .setValue('#id_description', 'SKU: MR1092-DB 0.75 Carat Halo Daimond Engagement Bridal Ring Set 14K Solid Rose White Gold')
        .setValue('#id_price', '759');
  },
  'Add Categories product2': function (browser) {
    browser
       .click('xpath', '//li//input')
       .click('xpath', '//li[contains(text(),"Rings")]');
    browser.pause(3000);
  },
  'Save the product2': function (browser) {
    browser
        .click('#form-product > div.card-action.right-align > button');
  },
  'Check the product2': function (browser) {
    browser
      .url('http://ornaitjewels.com/dashboard/products/');
    browser.pause(5000);
  },
  'add new product3': function (browser) {
    browser
    .click('body > div.subheader.top-nav > div > div'); // Plus button
    browser.pause(4000)
    .click('#modal-product-class > div > form > div:nth-child(2) > div > p:nth-child(4) > label') // ring radio button
    .click('#modal-product-class > div > form > div:nth-child(3) > div > button'); // create button
    browser.pause(5000);
  },
  'Add information product3': function (browser) {
    browser
        .setValue('#id_name', '0.70 Ct Halo Diamond Engagement Ring In 14k Rose White Yellow Gold')
        .setValue('#id_description', 'SKU: MR1093-DB  0.70 Ct Halo Diamond Engagement Ring In 14k Rose White Yellow Gold')
        .setValue('#id_price', '669');
  },
  'Add Categories product3': function (browser) {
    browser
       .click('xpath', '//li//input')
       .click('xpath', '//li[contains(text(),"Rings")]');
    browser.pause(3000);
  },
  'Save the product3': function (browser) {
    browser
        .click('#form-product > div.card-action.right-align > button');
  },
  'Check the product3': function (browser) {
    browser
      .url('http://ornaitjewels.com/dashboard/products/');
    browser.pause(5000);
  },
  'add new product4': function (browser) {
    browser
    .click('body > div.subheader.top-nav > div > div'); // Plus button
    browser.pause(4000)
    .click('#modal-product-class > div > form > div:nth-child(2) > div > p:nth-child(4) > label') // ring radio button
    .click('#modal-product-class > div > form > div:nth-child(3) > div > button'); // create button
    browser.pause(5000);
  },
  'Add information product4': function (browser) {
    browser
        .setValue('#id_name', '1/2 Carat Round Diamond Antique Engagement Ring in 14k Yellow Rose & White Gold')
        .setValue('#id_description', 'SKU: MR1094-DB 1/2 Ct Halo Round Diamond Antique Engagement Ring In14k Yellow Rose & White Gold')
        .setValue('#id_price', '569');
  },
  'Add Categories product4': function (browser) {
    browser
       .click('xpath', '//li//input')
       .click('xpath', '//li[contains(text(),"Rings")]');
    browser.pause(3000);
  },
  'Save the product4': function (browser) {
    browser
        .click('#form-product > div.card-action.right-align > button');
  },
  'Check the product4': function (browser) {
    browser
      .url('http://ornaitjewels.com/dashboard/products/');
    browser.pause(5000);
  },
  'add new product5': function (browser) {
    browser
    .click('body > div.subheader.top-nav > div > div'); // Plus button
    browser.pause(4000)
    .click('#modal-product-class > div > form > div:nth-child(2) > div > p:nth-child(4) > label') // ring radio button
    .click('#modal-product-class > div > form > div:nth-child(3) > div > button'); // create button
    browser.pause(5000);
  },
  'Add information product5': function (browser) {
    browser
        .setValue('#id_name', '0.07 Carat Round Diamond Antique Wedding Band In 14K Solid Gold')
        .setValue('#id_description', 'MR1095-DB 0.07 Carat Round Diamond Antique Wedding Band In 14K Solid Gold')
        .setValue('#id_price', '189');
  },
  'Add Categories product5': function (browser) {
    browser
       .click('xpath', '//li//input')
       .click('xpath', '//li[contains(text(),"Rings")]');
    browser.pause(3000);
  },
  'Save the product5': function (browser) {
    browser
        .click('#form-product > div.card-action.right-align > button');
  },
  'Check the product5': function (browser) {
    browser
      .url('http://ornaitjewels.com/dashboard/products/');
    browser.pause(5000);
  },
  'Browser quit': function (browser) {
    browser
      .pause(5000)
      .end();
  }
};
