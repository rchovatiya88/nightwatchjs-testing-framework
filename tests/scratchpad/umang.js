module.exports = {
  '@tags': ['umang'],
  'Go to first video': function (browser) {
    browser
      .url('https://www.yahoo.com');
    browser.pause(5000);
  },
  'go to other video': function (browser) {
    browser
      .url('https://www.kissanime.to');
    browser.pause(1000);
  },
  'go to other video': function (browser) {
    browser
      .url('https://www.espn.com');
    browser.pause(5000);
  },
  'go to other video': function (browser) {
    browser
      .url('https://www.nba.com');
    browser.pause(5000);
  },
  'Browser quit': function (browser) {
    browser
    .end();
  }
};
