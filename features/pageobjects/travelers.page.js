class Travelers{


     firstName(i){
        return $(`input[data-hook="travelers-form_adults_${i}_first-name"]`);
    }
     lastName(i){
        return $(`input[data-hook="travelers-form_adults_${i}_last-name"]`);
    }

    gender(i){
        return $(`label[data-hook="travelers-form_adults_${i}_gender_MALE"]`);
    }
    
     month(i){
        return $(`#adults\\.${i}\\.dob-month"]`)
    }
    
    get day(){

    }

    get year(){

    }

    continueToSeatPage=async()=>{
        let firstNames=['abc','pqr'];
        let lastNames=['xyz','jkl'];

    for(let i=0;i<2;i++){
        await this.firstName(i).setValue(firstNames[i]);
        await this.lastName(i).setValue(lastNames[i]);
        await this.gender(i).click();
    }


    }

}

module.exports = new Travelers();