module.exports = {
  '@tags': ['tetstgit'],
  'go to click click ': function (browser) {
    browser
      .url('https://www.github.com')
      .waitForElementVisible('body', 5000)
      .pause(5000);
  },

  'Browser quit': function (browser) {
    browser
      .pause(5000)
      .end();
  }
};
