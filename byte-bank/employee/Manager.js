import {Employee} from "./Employee.js"

export class Manager extends Employee{
    constructor(id, name, salary){
        super(id, name, salary);
        this._bonification = 1.5;
    }
}