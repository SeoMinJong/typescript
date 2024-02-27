/*
Type - ts 타입에 고유한 타입을 선언한다.
*/

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

// 이와 같이 값을 지정하는 타입도 가능
type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
    name: string;
    year: number;
};

const yujin: IdolType = {
    name: "yujin",
    year: 2002,
}

/*
Interface
*/

interface IdolInterface{
    name: string;
    year: number;
}

const yujin2: IdolInterface = {
    name: "유진",
    year: 2002,
}

interface IodlIT{
    name: NewStringType;
    year: NewNumberType
}


const yujin3: IodlIT = {
    name: "안유진",
    year: 2002,
}

interface IdolOptional{
    name: string;
    year?: number;
}

const yujin4: IdolOptional = {
    name: '안유진',
    // year: 2002,
}