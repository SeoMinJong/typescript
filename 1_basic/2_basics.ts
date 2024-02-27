let helloText: string = 'Hello';
// helloText = true;

/*
기본 타입
*/
const stringVar: string = 'string';
const numberVar: number = 1;
const bigintVar: bigint = BigInt(99999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefiendVar: undefined = undefined;

/* TS 오리지널 타입
any = 아무 타입이나 입력할 수 있는 타입
*/

let anyVar: any

anyVar = 100;
anyVar = 'Var'
anyVar = true

// 다른 타입에 할당이 가능
let testNumber: number = anyVar;
let testString: string = anyVar;
let testboolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = 'string';

// 다른 타입에 할당이 불가능
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testboolean2: boolean = unknownType;

let unknownType2: unknown = unknownType;
let anyType2: any = unknownType2;

// never type - 어떠한 타입도 저장되거나 반환되지 않을 때 사용
let neverType: never;
// neverType = null;
// neverType = 'string';

// 리스트 타입
const listType: string[] = ['1', '2', '3'];
const booleanListType: boolean[] = [true, false];


