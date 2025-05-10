//import the below items from the lwc library - LightningElement is necessary in order to create a component.

import {LightningElement, track} from 'lwc';
import getCityNameByZip from '@salesforce/apex/ZipcodeStackService.getCityNameByZip';

//export the main thing (class), so that Salesforce can use this.
export default class ZipCodeFlow extends LightningElement { 

    zipCode = '';
    cityName = '';
    countryCode = 'US';



//method to handle the user input of the zipcode
handleZipChange(event){
    this.zipCode = event.target.value;
    console.log('zipCode: '+ this.zipCode);

}
//this is being used because-  zipCode is a property of the class, in order to use it inside the methods, we need to use this keyword    

//method to handle the onclick on the button after user input is provided    
handleClick(){
    console.log('handle click called');
if(this.zipCode !=''){
    console.log('line 24 success');
    getCityNameByZip({zipCode: this.zipCode,countryCode: this.countryCode})
    .then(result => {
        console.log('result:::::'+ result);
        this.cityName = result;
    })
    .catch(error => {
        console.error('Error fetching the city name',error);
    });
}
}


}
