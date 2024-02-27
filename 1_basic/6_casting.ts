/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */

const codefactory = 'code factory';
const testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());

// casting을 진행하면 
let stringVar = sampleNumber as string;

// string으로 캐스팅을 하면 string으로 인식하지만 실제 javascript 컴파일 과정에서 데이터를 입력한 5가 나와서 number type으로 되게된다.
console.log(typeof (sampleNumber as string)); 

let number = 5;
console.log((number as any).toUpperCase());

// 결론적으로 캐스팅은 코딩과정에서 사용하는 type 지정일 뿐 실제 컴파일에서 적용되지 않기 때문에 주의가 필요하다.