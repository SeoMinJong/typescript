/*
Type inference
타입 추론
*/

let stringType = 'string';

let booleanType = true;

let numberType = 11;

// 선언된 booleanType은 boolean으로 추정되어있기 떄문에 같은 boolean 타입의 값으로만 가능함
// booleanType = 'false';

const constStringType: 'const string' = 'const string';
const constBooleanType = true;

let yujin = {
    name: '안유진',
    age: 2002
}

const yujin2 = {
    name: '안유진',
    age: 2002
}

yujin2.name = '유진'

console.log(yujin2)

const yujin3 = {
    name: '안유진' as const,
    age: 2002 as const,
}

// yujin3.name = '유진'

console.log(yujin2.name)
console.log(yujin3.name)

let numbers = [1,2,3,4,5]
let numbersAndString = [1,2,3,'4','5','6']

numbers.push(6);
// numbers.push('6');

const nunmber = numbers[0];
const nas = numbersAndString[0];
const nas2 = numbersAndString[6]; // index를 초과한 값을 지정하더라도 인지하지 못함

// tuple
const twoNumbers = [1, 3] as const;


const first = twoNumbers[0];
// const first2 = twoNumbers[2]; // index를 초과한 값을 지정하면 에러를 발생함
