/**
 * Generic 함수 사용
 */
function whatValue(value: any){
    return value;
}

const value = whatValue('test');

function genericWhatValue<T>(value: T){
    return value;
}

const generic1 = genericWhatValue<string>('string');
const generic2 = genericWhatValue<number>(1);

let generic3 = genericWhatValue('123');
const generic4 = genericWhatValue('123');

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z){
    return {x, y, z}
}

const multipleGenericsResult1 = multipleGenerics<boolean, string, number>(true, '123', 123);
const multipleGenericsResult2 = multipleGenerics<string, boolean, number>('123', false, 123);

function getTuple<X, Y>(value1: X, value2: Y){
    return [value1, value2] as const;
}

const tuple1 = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName:string;

    constructor(brand:string, codeName: string){
        this.brand = brand;
        this.codeName = codeName;
    }
}

function instantiator<T extends {new (...args: any[]) : {}}>(constructor: T, ...args: any[]){
    return new constructor(...args);
}

function instantiator2<T extends {new (...args: any[]) : {name:any, age:any}}>(constructor: T, ...args: any[]){
    return new constructor(...args);
}

const idol1 = instantiator2(Idol,'name', 19);
const car1 = instantiator(Car,'name', '19');
console.log(idol1);
console.log(idol1.age);
console.log(idol1.name);
console.log(car1);
// console.log(idol1.age);
// console.log(car1.codeName);