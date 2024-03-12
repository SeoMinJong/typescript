/**
 * readonly property
 */

class Idol{
    readonly name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const iu = new Idol('iu', 30);
iu.name;
// iu.name = '아이유'