import {Account} from "./Account.js"

export class SalaryAccount extends Account{
    constructor(agency, balance, agency){
        super(agency, balance, client)
        this._tax = 1.001;
    }

    withdraw(value){
        return this._withdraw(value, this._tax);
    }
}