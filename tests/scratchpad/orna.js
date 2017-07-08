var host = 'http://www.google.com';

module.exports = {
  '@tags': ['orna'],
  // 'some test': function (browser) {
  //   browser
  //           .url(host);
  //   browser.waitForElementVisible('body', 1000);
  //   browser.pause(3000)
  //           .execute(function (newWindow) {
  //             window.open('http://www.twitter.com', null, 'height=1024,width=768');
  //           }, [host])
  //           .assert.urlContains('google')
  //           .window_handles(function (result) {
  //             var temp = result.value[1];
  //             this.switchWindow(temp);
  //             browser.pause(5000);
  //           })
  //           .assert.urlContains('twitter');
  //           // .end();
  // },
  'Go to Google': function (browser) {
    browser
      .url('https://www.google.com/')
      .pause(5000)
      .click('#gbqfbb')
      .pause(3000)
      .click('#tsf > div.tsf-p > div.jsb > center > div');
    browser.pause(5000);
  },
  'Go to Amazon': function (browser) {
    browser
      .url('https://www.amazon.com/')
      .waitForElementVisible('body', 1000)
      .setValue('#twotabsearchtextbox', 'Christmas Tree')
      .click('#nav-search > form > div.nav-right > div > input')
      .pause(5000);
    browser.execute('scrollTo(0,3000)');
  },
  'Go to youtube': function (browser) {
    browser
      .url('https://www.youtube.com/')
      // .waitForElementVisible('body', 1000)
      // .pause(2000)
      .setValue('#masthead-search-term', '50 cent hustlers ambition')
      .click('#search-btn');
      // 50 cent hustlers ambition
    browser.pause(2000)
      .url('https://www.youtube.com/watch?v=K3AiAem9JLQ');
    browser.pause(20000);
  },
  // 'Go to CNN': function (browser) {
  //   browser
  //     .url('https://www.CNN.com/')
  // // .url('https://www.youtube.com/watch?v=K3AiAem9JLQ');
  //   browser.pause(2000);
  // },
  'Browser quit': function (browser) {
    browser
    .end();
  }

};
