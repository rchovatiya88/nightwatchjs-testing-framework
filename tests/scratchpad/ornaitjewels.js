module.exports = {
  '@tags': ['oj'],
  'Go to ornaitjewels': function (browser) {
    browser
      .url('http://35.164.69.135/index.php?route=account/register')
      .waitForElementVisible('body', 1000);
    browser.pause(2000);
  },
  'Login to the site': function (browser) {
    browser
      // .click('#top-links > ul > li.toggle-wrap > ul > li:nth-child(1) > a');
      .setValue('#input-firstname', 'test')
      .setValue('#input-lastname', 'automation')
      .setValue('#input-email', 'ornaitautomation@gmail.com')
      .setValue('#input-telephone', '23423048230 ')
      .setValue('#input-fax', '234234345342 ')
      .setValue('#input-company', 'ornait')
      .setValue('#input-address-1', '133 Nelson Avenue')
      .setValue('#input-city', 'Jersey City')
      .setValue('#input-postcode', '07307')
      .click('#sbSelector_28684412')
      .setValue('#input-password', 'password1')
      .setValue('#input-confirm', 'password1')
      .click('#content > form > div > div > input');
  },

  'Browser quit': function (browser) {
    browser
    .end();
  }

};
