class HomePage {
  get popupClose() {
    return $('button[data-hook="overlay-merchandise_ice-pop_close"]');
  }

  OpenHomePage = async () => {
    await browser.url("https://www.allegiantair.com/");
  };
}

module.exports = new HomePage();
