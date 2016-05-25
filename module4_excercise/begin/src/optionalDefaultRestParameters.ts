(function () {

    //Optional parameters
    //Add city and state display capabilities
    function buildAddressOptional(address1: string, address2?: string, city?: string, state?: string) {
        var addr2 = (address2) ? ' Address2: ' + address2 : '';
        var a = [address1, addr2, city, state];
        var final_addr = [];
        a.forEach((addr) => {
            if (addr.length > 0) final_addr.push(addr);
        });        
        displayAddress(final_addr.join(', '));
    }

    //Default parameters
    //Add city and state display capabilities
    function buildAddressDefault(address1: string, address2 = 'N/A') {
        displayAddress('Address: ' + address1 + ' Address2: ' + address2);
    }

    //Rest parameters
    function buildAddressRest(...restOfAddress: string[]) {
        var address = [];
        restOfAddress.forEach((addr) => {
            if (addr.length > 0) address.push(addr); 
        });
        displayAddress(address.join(', '));
    }

    function displayAddress(msg: string) {
        result.innerHTML = msg;
    }

    var $ = (id) => document.getElementById(id);

    var addressButton: HTMLButtonElement = <HTMLButtonElement>$('addressButton'),
        address: HTMLInputElement = <HTMLInputElement>$('address'),
        address2: HTMLInputElement = <HTMLInputElement>$('address2'),
        
        //retrieve city value
        city: HTMLInputElement = <HTMLInputElement>$('city'),
        //retrieve state value
        state: HTMLInputElement = <HTMLInputElement>$('state'),
        
        result = $('result');

    //Call function with optional parameter
    addressButton.addEventListener('click',(e) => buildAddressOptional(address.value, address2.value,  city.value, state.value));

    //Call function with default parameter
    //addressButton.addEventListener('click',(e) => buildAddressDefault(address.value, address2.value));

    //Call function with Rest parameters
    //addressButton.addEventListener('click',(e) => buildAddressRest(address.value, address2.value, city.value, state.value));

} ());