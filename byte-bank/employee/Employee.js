export class Employee{
    constructor(id, name, salary){
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._password = null;
    }

    setPassword(pass){
        this._password = pass;
    }

    get password(){
        return this._password;
    }
}