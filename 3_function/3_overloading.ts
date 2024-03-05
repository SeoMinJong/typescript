/**
 * Overloading
 */
/**
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 세개를 받거나
 */
/**
 * 오버로딩의 경우 코드의 복잡성을 올리기 때문에 많이 사용되진 않는다.
 */

function stringOrStrings(members:string): string;
function stringOrStrings(member1: string, member2: string, member3: string): string;
// function stringOrStrings(): string;


function stringOrStrings(memberOrMembers: string, member2?:string, member3?: string){
    if(member2 && member3){
        return `맴버: ${memberOrMembers}, ${member2}, ${member3}`
    }else{
        return `맴버: ${memberOrMembers}`
    }
}

console.log(stringOrStrings('아, 이, 유'))
console.log(stringOrStrings('아','이','유'))
// console.log(stringOrStrings('아', '이'))