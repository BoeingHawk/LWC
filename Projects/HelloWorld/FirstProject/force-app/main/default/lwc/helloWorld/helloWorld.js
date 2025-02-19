import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    greeting = "Hello World!";
    changeText(){
        this.greeting = "Hello, Salesforce!";
    }
}