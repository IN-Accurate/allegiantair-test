class Flights{


    get continueBtn(){
        return $('button[data-hook="flights-page_continue"');
    }


    continueToBundles=async()=>{

        let continueBtn = this.continueBtn;

        await continueBtn.waitForExist();
        await continueBtn.waitForClickable();
        await continueBtn.click();

    }


}

module.exports = new Flights();