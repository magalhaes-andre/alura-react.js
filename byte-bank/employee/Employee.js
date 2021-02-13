export class Employee{
    constructor(id, name, salary, password){
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._password = password;
    }

    authenticate(password){
        return password == this._password;
    }
}