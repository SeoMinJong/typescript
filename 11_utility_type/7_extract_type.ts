/**
 * Extract Type
 * 유니언 타입에서 특정 타입을 사용하도록 함
 */

type OnlyString = Extract<string|boolean|number, string>

type OnlyFunction = Extract<string | (() => void) , Function>;

const noString1: OnlyString = '이름'
// const noString2: OnlyString = true
// const noString3: OnlyString = 123


// const noFunction1: OnlyFunction = '이름'
const noFunction2: OnlyFunction = ()=>{
    return console.log('test function')
}
// const noFunction3: OnlyFunction = 123