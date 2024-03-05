/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = 'string';
stringOrBooleanType = true;

// stringOrBooleanType = undefined;


type StrBoolNullType = string | boolean | null;

type StateTypes = 'DOWN' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DOWN';
state = 'LOADING';
// state = 'INITIAL';

/**
 * list union
 */

type StringListOrBooleanList = string[] | boolean[];

let strListOrBoolList: StringListOrBooleanList = [
    '이름1',
    '이름2',
    '이름3',
]

strListOrBoolList = [
    true,
    true,
    true,
]

// strListOrBoolList = [
//     true,
//     '이름3',
//     true,
//     true,
// ]

// 리스트 내부의 값을 유니언할 때 사용되는 방식
type StrOrNumberList = (string | number) [];

let strNumList = [
    1,2,3,
    'name',
    'name2',
]

strNumList = [
    1,2,3,
]


/**
 * Interface로 사용하는 union
 */

interface Animal{
    name: string;
    age: number;
}

interface Human{
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let aniOrHu: AnimalOrHuman = {
    name: '이름',
    age: 27,
    address: '한국',
}

console.log(aniOrHu);
console.log(aniOrHu.address);

aniOrHu = {
    name: '오리',
    age: 4
}

console.log(aniOrHu);

console.log(aniOrHu.name);
console.log(aniOrHu.age);
// console.log(aniOrHu.address);

// 직접 유니언을 넣어서 타입을 지정해도 가능하다.
let aniOrHu2: {
    name: string;
    age: number;
}|{
    name: string;
    age: number;
    address: string;
} ={
    name: '이름',
    age: 27,
    address: '한국',
};

console.log(aniOrHu2.name);
console.log(aniOrHu2.age);
console.log(aniOrHu2.address);

aniOrHu2 = {
    name: '오리',
    age: 4,
}

console.log(aniOrHu2.name);
console.log(aniOrHu2.age);
// console.log(aniOrHu2.address);

// 관계성이 없는 유니온 설정
type Person ={
    name: string;
    age: number;
}

type Cat ={
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
    name: '이름',
    age: 27,
    breed: '테리어',
    country: '영국',
}