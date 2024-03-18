/**
 * Partial Type
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

console.log(updateIdol(iu,{
    age: 32,
    name: 'IU',
    // name2:'IU'
}))