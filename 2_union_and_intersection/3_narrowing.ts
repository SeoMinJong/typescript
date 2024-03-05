/**
 * Narrowing
 * 
 * Union 타입에서 더 구체적인 타입으로 논리적으로 유추할 수 있게 해주는 것
 */

// let numberOrString: number | string = 'Code Factory'

// numberOrString;

// const decimel = 12.3278;
// console.log(decimel.toFixed(2));

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discrimated union Narrowing
 * 8) exhaustiveness checking
 */

// 1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString: number | string = 'Code Factory'

numberOrString.toString();

// 2) typeof narrowing
// 타입을 보고 내로잉
numberOrString = Math.random() > 0.5 ? 1123 : '아이유';

if(typeof numberOrString === 'string'){
    numberOrString;
}else{
    numberOrString
}

// 3) Truthiness Narrowing
// 구분자를 통해 내로잉
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유','이나경'];

if(nullOrString){
    nullOrString;
}else{
    nullOrString
}

// 4) Equality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : '아니경';
let numberOrBool2: string | boolean = Math.random() > 0.5 ? '아이유' : true;

if(numberOrString2 === numberOrBool2){
    numberOrString2;
    numberOrBool2;
}else{    
    numberOrString2;
    numberOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1134 : Math.random() > 0.5 ? '아이유' : null;

if(typeof numberOrStringOrNull === 'number'){
    numberOrStringOrNull;
}else{
    numberOrStringOrNull;
}

// 5) in operator narrowing
interface Human{
    name:string;
    age:number;
}

interface Dog{
    name: string;
    type: string;
}

let human: Human = {
    name: '아니경',
    age: 24,
}

let dog: Dog = {
    name: 'my dog',
    type: 'bull dog',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log('name' in human);
console.log('age' in human);
console.log('age2' in human);

if('type' in humanOrDog){
    humanOrDog;
}else{
    humanOrDog;
}

// 6) instanceof narrowing
let dateOfString: Date | string = Math.random() > 0.5 ? new Date() : '에잉';

if(dateOfString instanceof Date){
    dateOfString;
}else{
    dateOfString;
}

// 7) Discriminated Union Narrowing
// 여러 객체의 공통된 부분을 유니언으로 묶어 타입을 정의함
interface Animal{
    type: 'dog' | 'human';
    height?: number;
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 178,   
    }:{
        type: 'dog',
        breed: 'bull'
    }

if(animal.type === 'human'){
    animal.height;
}else{
    animal.type;
    animal.breed;
}

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

interface Fish2 {
    type: 'fish';
    length: number;
}
type HumanOrDog2 = Human2 | Dog2 | Fish2; // Fish add

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
    {   
        type:'human',
        height: 175,
    }:Math.random() > 0.5 ?{
        type:'dog',
        breed:'bull',
    }:{
        type: 'fish',
        length: 60,
    }

if(humanOrDog2.type === 'human'){
    humanOrDog2;
}else{
    humanOrDog2;
}

// 8) Exhuastiveness Checking
switch(humanOrDog2.type){
    case 'human':
        humanOrDog2;
        break;
        
    case 'dog':
        humanOrDog2;
        break;

    default:
        humanOrDog2;

        // const _check:never = humanOrDog2;
}