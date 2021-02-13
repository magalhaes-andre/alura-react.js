export class AuthSystem{
    static login(entity, password){
        if(this.isAuthenticable(entity)){
            return entity.authenticate(password);
        }
        
        return false;   
    }

    static isAuthenticable(entity){
        return "authenticate" in entity &&
        entity.authenticate instanceof Function
    } 
}