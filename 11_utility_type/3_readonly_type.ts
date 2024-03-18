/**
 * Readonly Type
 * 오브젝트의 값 변경을 못하도록 함
 */

interface Cat{
    name: string;
    age: number;
}

const ny : Cat = {
    name:'디디',
    age: 7
}

ny.name = 'DD'

const ny_r: Readonly<Cat> ={
    name:'티티',
    age:4,
}

console.log(ny_r.name);
// ny_r.name = 'TT'

Object.freeze(ny); // Javascript단에서 변경 불가를 걸어놓기 때문에 코드상에서 에러가 없어도 컴파일 단계에서 에러가 발생한다.
Object.freeze(ny_r);


ny.name = '디디';
console.log(ny.name);