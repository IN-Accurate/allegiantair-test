const { Given, When, Then } = require("@wdio/cucumber-framework");
const Home = require("../pageobjects/home.page.js");

Given(/^I am on the homepage$/, async () => {
  await Home.OpenHomePage();
});

When(
  /^I enter departure and arrival cities, dates, and other flight details$/,
  async () => {
    let searchButton=Home.searchButton;
    await searchButton.waitForExist();
    await searchButton.waitForClickable();
    await searchButton.click();

    await browser.pause(2000);
  }
);

Then(/^I reach the flights page$/, () => {
  return true;
});

Then(/^I can select a flight$/, () => {
  return true;
});

Then(/^I can select a bundle$/, () => {
  return true;
});

Then(/^I can provide personal details of travelers$/, () => {
  return true;
});

Then(/^I can select seats$/, () => {
  return true;
});

Then(/^I can select any bags and extras needed$/, () => {
  return true;
});

Then(/^I can optionally select a hotel$/, () => {
  return true;
});

Then(/^I can optionally select a rental car$/, () => {
  return true;
});

Then(/^I can proceed to the payment section$/, () => {
  return true;
});
