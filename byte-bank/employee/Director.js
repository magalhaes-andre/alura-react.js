import {Employee} from "./Employee.js"

export class Director extends Employee{
    constructor(id, name, salary, password){
        super(id, name, salary, password);
        this._bonus = 2.0;
    }
}