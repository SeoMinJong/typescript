/**
 * Problems_With_Array_Javascropt
 */
const number = [1, '2', 3, '4', 5]; // JS는 타입의 중복이 문제가 없음
const stringArray: string[] = ['1', '2', '3'];

// stringArray.push(1);

let stringAndNumberArray: (string|number)[] = ['1', '2', 3, 4];
let stringArrayNumberArray: string[] | number[] = [1,2,3]
stringArrayNumberArray = ['1', '2', '3']

let stringOrNumberArray: string | number[] = [ 1, 2, 3 ]

let boolsArr = [true, false, true]
// boolsArr.push(1);

const onlyString = ['1', '2', '3'];
const onlyNumber = [1, 2, 3];

for (let i=0; i < onlyString.length; i++){
    let item = onlyString[i];
}

for (let i=0; i < onlyString.length; i++){
    let numbers = onlyNumber[i];
}

let number6 = onlyNumber[233]; // tuple이 아닌 이상 인덱스를 신경쓰지 않고 number 타입으로 판단한다.
