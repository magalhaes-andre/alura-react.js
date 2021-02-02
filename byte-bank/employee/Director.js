import {Employee} from "./Employee.js"

export class Director extends Employee{
    constructor(id, name, salary){
        super(id, name, salary);
        this._bonification = 2.0;
    }
}