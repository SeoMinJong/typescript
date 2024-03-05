/**
 * Type Predicate
 */

function isNumber(input: any): input is number{
    return typeof input === 'number';
}

function isNumberReturnBool(input: any): boolean{
    return typeof input === 'number';
}

console.log(isNumber(10))

let number: any = 5;

if(isNumberReturnBool(number)){
    number;
}

// typescript안에서 해당 number라는 변수를 number로 해석한다.
if(isNumber(number)){
    number;
}

interface Dog{
    name: string;
    age: number;
}

interface Cat{
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

// 해당 함수로 dog를 확인할 때 return을 boolean으로 처리했을 경우 if 분기문에는 DogOrCat으로 인터섹션 타입이 그대로 들어가지만
// type predicate로 처리되어 Dog로 판명된 상태라면 첫 분기에 Dog 타입이 확인되고 이후 분기에 Cat으로 판별된다.

function isDog(animal: DogOrCat): animal is Dog {
    return (animal as Dog).age !== undefined;
}

const dog: DogOrCat = Math.random() > 0.5 ? {
    name: '강쥐',
    age: 4
}:{
    name: '굉이',
    breed: 'IG'
}

if(isDog(dog)){
    dog;
}else{
    dog;
}