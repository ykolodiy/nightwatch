module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible("body", 1000)
      .pause(1000)
      .end();
  }
};