/**
 * Partial Type
 * 오브젝트의 값을 변경할 때 내부 프로퍼티에 해당하는 값만을 변경
 */

interface Idol{
    name:string;
    age:number;
    groupName:string;
}

const iu: Idol = {
    name: '아이유',
    age: 31,
    groupName: '솔로'
}

function updateIdol(original:Idol, updates:Partial<Idol>): Idol{
    return{
        ...original,
        ...updates
    }
}

console.log('원본 결과물');
console.log(iu)

const newIu = updateIdol(iu,{
    name: 'IU',
    age: 32
})

console.log('업데이트 결과물');
console.log(newIu)
