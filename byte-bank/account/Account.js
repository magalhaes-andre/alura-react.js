import {Client} from "../Client.js";

export class Account{    
    
    constructor(agency, balance, client){
        if(this.constructor === Account){
            throw new Error("Account.js is an abstract class, please don't instantiate it.");
        }

        this._agency = agency;
        this._balance = balance;
        this._client = client;
    }

    set client(client){
        if(client instanceof Client){
            this._client = client;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }
    
    deposit(value){
        let tax = 1;
        return this._deposit(value, tax);
    }

    withdraw(value){
        throw new Error("Account.withdraw() is abstract, please implement this in the child.");
    }

    _deposit(value, tax){
        if(value > 0){
            this._balance += value;
            return value;
        }
    }

    _withdraw(value, tax){
        if(this._balance >= value){
            this._balance -= value * tax;
            return value;
        }
    }

    transfer(value, account){
        const withdraw = this.withdraw(value);
        account.deposit(withdraw);
    }

    consult(){
        return this._balance;
    }
}