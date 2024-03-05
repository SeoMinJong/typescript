/**
 * Type vs Interface
 */

//object
interface IObject{
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function
interface IFunction {
    (x: number, y: number) : number;
}

type TFuntion = (x: number, y: number) => number

/**
 * Type에서만 가능한 것
 */

// 1. primitive 타입 선언
type Name = string;

// 2. union 타입 선언
type UnionType = string | number;

// 3. primitive list 또는 tuple 타입 선언
type TupleType = [number, string];

/**
 * Interface에서만 가능한 것
 */
// 인터페이스는 같은 이름으로 선언 시 머진된다.
interface IRectangle{
    height: number;
}

interface IRectangle{
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// 애초에 중복 선언이 안됨
type TRectangle = {
    height: number;
}

// type TRectangle = {
//     width: number;
// }


/**
 * Interface Merging
 */

class Review {
    // 프로퍼티
    getY = (x:number) => {return x};

    getX(x: number){
        return x
    }
}

interface GetXnY{
    getX: (x:number)=> number;
    getY: (x:number)=> number;
}

interface GetXnY{
    getX: (x:number)=> number;
    // getY: (x:number)=> number;
}

interface GetXnY2{
    getX(x: number):number;
    getY(y: number):number;
}

interface GetXnY2{
    getX(x: number):number;
    getY(y: string):number;
}

const testMethod: GetXnY2 = {
    getX(x){
        return x;
    },

    getY(y){
        return 1;
    }
}