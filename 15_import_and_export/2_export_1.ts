/**
 * Export
 */

export class IdolModel{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }
}

export const rose = new IdolModel('로제',26);

export const number = 15;

export interface ICat{
    name: string;
    breed: string;
}

export default {
    name: 'nuts',
    age: 27,
}