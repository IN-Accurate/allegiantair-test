class HomePage {
  get popupClose() {
    return $('button[data-hook="overlay-merchandise_ice-pop_close"]');
  }

  get tripType(){
    return $('label[data-hook="flight-search-trip-type_ONEWAY"]');
  }

  get fromCity(){
    return $('div[data-hook="flight-search-origin"]')
  }
  
  get selectFromCity(){
    return $('//div[contains(text(),"Akron-Canton, OH (CAK)")]');
  }
  get toCity(){
    return $('div[data-hook="flight-search-destination"]')
  }
  
  get selectToCity(){
    return $('//div[contains(text(),"Daytona Beach / Sanford, FL (SFB)")]');
  }

  get openCalendar(){
    return $('button[data-hook="flight-search-date-picker_expand-start-date"]');
  }

  get departureDate(){
    return $('button[data-hook="flight-search-date-picker_calendar-0_select-day-26"]');
  }

  get openTravelerSelect(){
    return $('button[data-hook="flight-search-travelers-expando-button"]');
  }

  get adultsIncrement(){
    return $('button[data-hook="flight-search-adults_increment"]');
  }

  get searchButton(){
    return $('button[data-hook="flight-search-submit"]');
  }
  
  OpenHomePage = async () => {
    await browser.url("https://www.allegiantair.com/");

    let overlayClose = this.popupClose;
    await expect(overlayClose).toBeDisplayed();
    await overlayClose.click();
    
    await this.tripType.click();

    await this.fromCity.click();
    await this.selectFromCity.click();

    await this.toCity.click();
    await this.selectToCity.click();

    await this.openCalendar.waitForExist();
    await this.openCalendar.waitForClickable();
    await this.openCalendar.click();

    await this.departureDate.waitForExist();
    await this.departureDate.waitForClickable();
    await this.departureDate.click();

    await this.openTravelerSelect.click();
    await this.adultsIncrement.click()
    await this.openTravelerSelect.click();

  };
}

module.exports = new HomePage();
