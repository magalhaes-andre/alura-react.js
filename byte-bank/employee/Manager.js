import {Employee} from "./Employee.js"

export class Manager extends Employee{
    constructor(id, name, salary, password){
        super(id, name, salary, password);
        this._bonus = 1.5;
    }
}