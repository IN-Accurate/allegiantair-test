class Hotels{

        get roomsAndRatesBtn(){
            return $('a.HotelCard__HotelCardButton-isxhr6-2 bSCHyz');
    }

    get confirmRoom(){
        return $('button[data-hook="room-pod_hotel-book-button"]');
    }

    get continueToCarsBtn(){
        return $('button[data-hook="hotel-details-page_continue"]');
    }
    continueToCars=async()=>{

        let roomsAndRatesBtn = await this.roomsAndRatesBtn;
        await roomsAndRatesBtn.waitForClickable();
        await roomsAndRatesBtn.click();

        
        let confirmRoomBtn = await this.confirmRoom;
        await confirmRoomBtn.waitForClickable();
        await confirmRoomBtn.click();

        
        let continueToCarsBtn = await this.continueToCarsBtn;
        await continueToCarsBtn.waitForClickable();
        await continueToCarsBtn.click();


    }



}

module.exports = new Hotels();