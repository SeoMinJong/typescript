/**
 * Tuple
 */
let members : string[] = ['1', '2', '3'];

let numberAndStringTuple: [number, string] = [10, 'string']; // 값의 갯수와 타입을 강제 (빌드)
numberAndStringTuple.push(1);
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [10, 'string'];
// unmodifiableTuple.push(2); readonly를 사용해 tuple을 더 정확하게 표현할 수 있다.

/**
 * Tuple 유추
 */
let actress = ['name1', 'name2', 'name3'];
let actressTuple = ['name1', 'name2', 'name3'] as const; // const casting

let strArr: string[] = [
    ...actressTuple,
    ...actressTuple
]

/**
 * Named Tuple
 * 파라미터에 이름을 지정해서 튜플안의 값들의 의미를 명확하게 해줌
 */

const namedTuple: [name: string, age: number] = ['name', 30];

/**
 * Assigning Tuple to Tuple
 * tuple은 같은 타입끼리만 할당이 가능하다.
 */

const tuple1: [string, string] = ['1', '2']
const tuple2: [number, number] = [1, 2]

// let tuple3: [boolean, boolean] = tuple1
const tuple4: [number, number] = tuple2

/**
 * Tuple과 Array의 관계
 */

let strTuple: [string, string]=['1', '2'];
let strArr2: string[] = strTuple; //할당 가능

// let strTuple2: [string, string] = strArr2 
// 세부적인 Tuple 타입은 더 포괄적인 Array 타입으로 할당이 가능하지만 반대로 포괄적인 타입을 Tuple에 할당할 수는 없다.

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [
    ['1', 1],
    ['2', 2],
    ['3', 3],
]
