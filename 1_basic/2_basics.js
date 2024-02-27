"use strict";
let helloText = 'Hello';
// helloText = true;
/*
기본 타입
*/
const stringVar = 'string';
const numberVar = 1;
const bigintVar = BigInt(99999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefiendVar = undefined;
/* TS 오리지널 타입
any = 아무 타입이나 입력할 수 있는 타입
*/
let anyVar;
anyVar = 100;
anyVar = 'Var';
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testboolean = anyVar;
// unknown
let unknownType;
unknownType = 100;
unknownType = 'string';
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testboolean2: boolean = unknownType;
let unknownType2 = unknownType;
let anyType2 = unknownType2;
