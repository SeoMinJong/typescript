/**
 * Exclude Type
 * 유니언 타입에서 특정 타입을 제외하도록 함
 */

type NoString = Exclude<string|boolean|number, string>

type NoFunction = Exclude<string | (() => void) | number , Function>;

// const noString1: NoString = '이름'
const noString2: NoString = true
const noString3: NoString = 123


const noFunction1: NoFunction = '이름'
// const noFunction2: NoFunction = ()=>{
//     return console.log('test function')
// }
const noFunction3: NoFunction = 123