/**
 * Defining Function
 */

// function printName(name){
//     console.log(name)
// }

function printName(name: string){
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
    return `${person1}&${person2}`
}

console.log(returnTwoCouples('I', 'YOU'));
// console.log(returnTwoCouples('0', 1));

/**
 * Optional Parameter
 */

function multiplyOrReturn(x: number, y?: number){
    if(y){
        return x*y
    }else{
        x;
    }
}


function multiplyOrReturn2(x: number, y:number = 20){
    return x*y
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10,30));


/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: (string|number)[]){
    return args.map((x)=> `${x.toString()} like it`)
}

console.log(getInfiniteParameters(1,2,'하선','스매'));

/**
 * return type
 */

function addTwoNumbers(x: number, y: number){
    return x + y
}

addTwoNumbers(10, 20);


function randomNumber(){
    return Math.random() > 0.5 ?
    10 : '랜덤'
}

randomNumber();

// 반환 타입 명시
function subtractTwoNumber(x:number, y:number):number{
    // return 'string은 반환안됨'
    return x - y
}

subtractTwoNumber(20,10);


const subtractTwoNumbersArrow = (x:number, y:number):number => {
    return x - y
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */

function doNotReturn(): void{
    console.log('반환없음')

    return
}

doNotReturn();


function throwError(): never{
    while(true){

    }
}

function thorwError2(): never{
    throw Error();
}