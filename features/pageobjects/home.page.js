class HomePage {
  
  get cookieClose(){
    return $('button[class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]');
  }
  
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

  departureDate =async()=>{

    let i=0;
    let currDate = new Date();
    console.log(currDate);
    let currDay=currDate.toISOString().slice(8,10);
    let currDayInt=parseInt(currDay);
    console.log(currDay);
    while(await  $('[data-hook="flight-search-date-picker_calendar-'+i+'_select-day-'+currDayInt+'"]').isEnabled()==false){
      currDayInt++;
     
        if(currDayInt>31){
          currDayInt=currDayInt%31;
          i++;
        }
    }

    console.log(currDayInt)
    return  $('[data-hook="flight-search-date-picker_calendar-'+i+'_select-day-'+currDayInt+'"]');
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
    

    let cookieClose = this.cookieClose;
    await cookieClose.waitForExist();
    await cookieClose.waitForClickable();
    await cookieClose.click();

    let overlayClose = this.popupClose;
    await expect(overlayClose).toBeDisplayed();
    await overlayClose.click();
    
    await this.tripType.click();

    await this.fromCity.click();
    await this.selectFromCity.click();

    await this.toCity.click();
    await this.selectToCity.click();

    await this.openCalendar.waitForClickable();
    await this.openCalendar.click();

    let departureBtn = await this.departureDate();
    await departureBtn.waitForClickable();
    await departureBtn.click();

    await this.openTravelerSelect.click();
    await this.adultsIncrement.click()
    await this.openTravelerSelect.click();

  };
}

module.exports = new HomePage();
