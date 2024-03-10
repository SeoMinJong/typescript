/**
 * Loopholes of Any
 */

let number: number;
number = 10;

// (number as any).toUpperCase();

const multiplytwo = (x: number, y:number) => {
    return x * y
}

let arg1: any = 'string';
let arg2: any = true;

// multiplytwo(arg1, arg2) // any로 지정해서 함수에 오류가 생기지 않음

let iu:any = {name: '아이유', age: 30}; // 자동완성에 불편함을 줌

const callbackRunner = (x: number, y: number, callback: any)=>{
    return callback(x)
}

// const callback = (x:number, y:number)=>{
//     return x*y
// }

const callback = (x:number)=>{
    return x
}

console.log(callbackRunner(5,4,callback));

// 이렇게 코드는 연계가 되기때문에 any 타입의 경우 하나의 코드를 변경시켜도 에러를 출력하지 않을 가능성이 높고 실제 컴파일 과정에서도 에러가 아닌 쓰레기값을 줄 가능성이 있다.