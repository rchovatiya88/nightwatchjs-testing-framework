module.exports = {
  '@tags': ['opencart'],
  'Go to opencartAdmin': function (browser) {
    browser
      .url('dmin')
      .waitForElementVisible('body', 1000)
      .pause(2000);
  },
  'Login': function (browser) {
    browser
      .setValue('#input-username', '')
      .setValue('#input-password', '')
      .click('#content > div > div > div > div > div.panel-body > form > div.text-right > button')
      .pause(2000);
  },
  'Go to Product Page ': function (browser) {
    browser
      .click('#catalog > a')
      .click('#catalog > ul > li:nth-child(2) > a')
      .pause(3000);
  },
  'Click on New Product': function (browser) {
    browser
      .click('#content > div.page-header > div > div > a')
      .pause(3000);
  },
  'Adding Product Information': function (browser) {
    browser
      .setValue('#input-name1', 'This is Product Title for Diamond Ring in 10K Gold')
      .setValue('#language1 > div:nth-child(2) > div > div > div.note-editing-area > div.note-editable.panel-body', 'This is the description for the product and other details such gold, stunning beautiful ring eetc.')
      .setValue('#input-meta-title1', 'This is Meta Tag description Diamond Ring in 10K Gold')
      .click('#form-product > ul > li:nth-child(2) > a')
      .setValue('#input-model', 'SkuNumber1231');
  },
  'Save the product': function (browser) {
    browser
      .click('#content > div.page-header > div > div > button > i');
  },
  'Browser quit': function (browser) {
    browser
      .end();
  }
};
