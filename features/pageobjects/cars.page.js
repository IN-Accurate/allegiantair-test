class Cars{


    get continueToPayment(){
        return $('button[data-hook="cars-page_continue"]');
    }

    continueToPayment=async()=>{

        let continueToPaymentBtn = await this.continueToPayment;
        await continueToPaymentBtn.waitForClickable();
        await continueToPaymentBtn.click();
    }

}

module.exports=new Cars();