/**
 * Function type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper)=>{
    return ['I', 'and', 'you'].map(
        callback,
    );
}

console.log(runner((x) => `반환값 : ${x}`));

type MultiplyTwoNumbers = (x: number, y:number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
    return x + y
}

/**
 * 인터페이스로 함수 타입 선언
 */

interface  IMultiplyTwoNumbers{
    (x: number, y:number): number;
}

const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x, y)=>{
    return x + y
}