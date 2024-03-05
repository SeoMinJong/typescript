/**
 * Intersection
 * 
 * And
 */

interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '이름',
    age: 27,
    phone: '010-1234-1234',
    address: '한국'
};

// primitive type을 인터섹션하면 never 타입으로 분류되어 사용할 수 없는 타입값이 된다.
type NumberAndString = number & string;

// let numberAndString: NumberAndString = 1;
// let numberAndString: NumberAndString = '1';
// let numberAndString: NumberAndString = null;
// let numberAndString: NumberAndString = undefined;