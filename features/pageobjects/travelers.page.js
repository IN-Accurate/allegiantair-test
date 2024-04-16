class Travelers{

     firstName(i){
        return $(`input[data-hook="travelers-form_adults_${i}_first-name"]`);
    }
     lastName(i){
        return $(`input[data-hook="travelers-form_adults_${i}_last-name"]`);
    }
    
    middleName(i){
        return $(`input[data-hook="travelers-form_adults_${i}_middle-name"]`)
    }
    
    gender(i){
        return $(`label[data-hook="travelers-form_adults_${i}_gender_MALE"]`);
    }
    
     month(i){
        return $(`div[data-hook="travelers-form_adults_${i}_dob-month"]`);
    }
    
    setMonth(i,j){
        return $(`//div[contains(text(),"${j[i]}")]`);
        
    }

     day(i){
        return $(`div[data-hook="travelers-form_adults_${i}_dob-day"]`);
    }

    setDay(i,j){
        
        return $(`//div[contains(text(),"${j[i]}")]`);
    }
     year(i){
        return $(`input[data-hook="travelers-form_adults_${i}_dob-year"]`)
    }

    email(i){
        return $(`input[data-hook="travelers-form_adults_${i}_email"]`);
    }

    phoneNumber(i){
        return $(`input[data-hook="travelers-form_adults_${i}_primary-phone-number"]`);
    }
    
    suffix(i){
        return $(`div[data-hook="travelers-form_adults_${i}_suffix"]`);
    }

    setSuffix(j){
        return $(`//div[contains(text(),"${j}")]`);
    }
    get continueBtn(){
        return $('button[data-hook="travelers-page_continue"]')
    }
    continueToSeatPage=async()=>{
        let firstNames=['abc','pqr'];
        let lastNames=['xyz','jkl'];
        let middleNames=['def','mno'];
        let dob=[['January','March'],[3,2],[1999,1998]];
        let emails=['abcpqr@gmail.com','xyzjkl@gmail.com'];
        let phoneNumbers=['418-543-8090','587-530-2271'];
        let suffixes =['Sr','Jr']

        for(let i=0;i<2;i++){
            await this.firstName(i).setValue(firstNames[i]);
            await this.middleName(i).setValue(middleNames[i]);
            await this.lastName(i).setValue(lastNames[i]);
            await this.suffix(i).click();
            await this.setSuffix(suffixes[i]).click();

            await this.gender(i).click();

            await this.month(i).click();
            await this.setMonth(i,dob[0]).click();
            await this.day(i).click();
            await this.setDay(i,dob[1]).click();
            await this.year(i).setValue(dob[2][i]);
            await this.email(i).setValue(emails[i]);
            await this.phoneNumber(i).setValue(phoneNumbers[i]);
    }
    await this.continueBtn.click();
    await browser.pause(4000);

    }

}

module.exports = new Travelers();