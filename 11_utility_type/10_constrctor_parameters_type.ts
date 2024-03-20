/**
 * Constructor Parameters Type
 */

class Idol{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
}

type ConsParams = ConstructorParameters<typeof Idol>;
const consParmas:ConsParams = ['nuts', 27];