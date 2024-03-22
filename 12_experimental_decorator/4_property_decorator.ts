/**
 * Property Decorator
 */

class UserModel{
    @PropertyLooger
    id: string;
    @PropertyLooger
    name: string;

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
    }
}

function PropertyLooger(target: any, propertyKey: string){
    console.log(`[propertyKey] ${propertyKey} 값이 정의됩니다.`)
}
console.log('---test---')
let user:UserModel = new UserModel('001','nuts');
user.id = '0001';