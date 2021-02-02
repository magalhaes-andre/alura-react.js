import {Account} from "./Account.js";

export class SavingsAccount extends Account{
    constructor(agency, balance, client){
        super(agency, balance, client);
        this._tax = 1.1;
    }

    withdraw(value){
        return this._withdraw(value, this._tax);
    }
}