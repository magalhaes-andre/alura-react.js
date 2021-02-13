import {Director} from "./employee/Director.js";
import {AuthSystem} from "./AuthSystem.js";
import { Client } from "./Client.js";

const director = new Director(123, "Carlos", 6000, "safePass");
const client = new Client("Cliente", 123);

const isClientLogged = AuthSystem.login(client, "somePass")// should return false since client does not have authenticate function
const isDirectorLogged = AuthSystem.login(director, "safePass");

console.log(director);
console.log(isClientLogged);
console.log(isDirectorLogged);