class Bundles{

    get tierTwoSelector(){
        return $('button[data-hook="select-tier-2"]');
    }

    continueToTravelers=async()=>{

        let tierTwoButton = this.tierTwoSelector;
        await tierTwoButton.waitForExist();
        await tierTwoButton.waitForClickable();
        await tierTwoButton.click();


    }


}

module.exports=new Bundles();