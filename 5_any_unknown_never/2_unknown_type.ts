let anyValue: any;

anyValue=10;
anyValue='string';
anyValue=true;
anyValue=null;

let unknownValue: unknown;

unknownValue=10;
unknownValue='string';
unknownValue=true;
unknownValue=null;

// any 타입의 경우 해당 변수에 값을 넣는 것뿐만 아니라 해당 변수를 다른 변수에 할당하는 경우에도 에러를 발생시키지 않는다.

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;


// unknown 타입의 경우 해당 변수에 값을 넣을 경우 모든 값을 허용하지만 해당 변수를 할당할 경우 any, unknown 타입만 허용한다.

let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;


anyValue.toUpperCase();
anyValue.name;

// unknownValue.toUpperCase();

// any type : 어떤한 값이든 될 수 있다. <=> unknown type : 어떤 값인지 알 수 없다.

function isString(target: unknown) : target is string{
    return typeof target === 'string';
}


/**
 * Union type
 */
type uOrString = unknown | string;
type uOrNumber = unknown | number;
type uOrBoolean = unknown | boolean;
type uOrAny = unknown | any;


/**
 * Intersection type
 */

type uAndString = unknown & string;
type uAndNumber = unknown & number;
type uAndBoolean = unknown & boolean;
type uAndAny = unknown & any;
type anyAndU = any & unknown;

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2
// number1 - number2
// number1 * number2
// number1 / number2

number1 === number2
number1 == number2
number1 !== number2
number1 != number2

// unknwon type은 해당 값을 결과로 사용하기위해 사용하면 좋고 타입을 알 수 없기 때문에 별도의 내부 함수의 적용은 불가하지만 비교 연산은 가능해 이런 값을 지정하는데 유용해보임