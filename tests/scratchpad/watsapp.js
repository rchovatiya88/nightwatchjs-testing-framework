module.exports = {
  '@tags': ['watsapp'],
  'Go to watsapp': function (browser) {
    browser
      .url('https://web.whatsapp.com/')
      .waitForElementVisible('body', 1000);
    browser.pause(2000);
  },
  // 'Login to the site': function (browser) {
  //   browser;
  //     // .click('#top-links > ul > li.toggle-wrap > ul > li:nth-child(1) > a');
  // },

  'Browser quit': function (browser) {
    browser
    .end();
  }

};
