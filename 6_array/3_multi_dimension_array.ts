/**
 * Multi_Dimension_Array
 */
const num2DArr: number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const str2DArr = [
    ['1','2','3'],
    ['4','5','6']
]

const strAndNumArr: (string | number)[][]=[
    [1,2,3],
    [4,'5',6]
]

let strArrOrNumArr: string[][] | number[][]=[
    [1,2,3],
    [4,5,6]
]

strArrOrNumArr = [
    ['1','2','3'],
    ['4','5','6']
]

for(let arr of strArrOrNumArr){
    for(let item of arr){
        item
    }
}