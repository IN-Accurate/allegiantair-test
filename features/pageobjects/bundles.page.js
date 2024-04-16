class Bundles{

    get tierTwoSelector(){
        return $('button[data-hook="select-tier-2"]');
    }

    get continueBtn(){
        return $('button[data-hook="bundles-page_continue"]');
    }

    continueToTravelers=async()=>{

        let tierTwoButton = this.tierTwoSelector;
        await tierTwoButton.waitForExist();
        await tierTwoButton.waitForClickable();
        await tierTwoButton.click();

        
        let continueBtn = this.continueBtn;
        await continueBtn.waitForExist();
        await continueBtn.waitForClickable();
        await continueBtn.click();



    }


}

module.exports=new Bundles();