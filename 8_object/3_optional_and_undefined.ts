/**
 * Optional and Undefined Property
 */
interface Dog {
    name: string;
    age: number;
    breed?: string;
}

const byulE: Dog = {
    name: 'DD',
    age: 5,
    breed: 'IG',
}

const ori: Dog = {
    name: 'Ori',
    age: 5,
}

interface Cat{
    name: string;
    age: number;
    breed: string | undefined; 
    // ?로 Optional property를 선언하면 입력을 하지 않아도 되고 해당 값은 당연하게도 undefined가 된지만 유니온 타입으로 설정한 undefined는 값이 필요한 경우이기 때문에 변수를 선언할 때 undefined를 직접 선언해줘야한다.
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    breed: undefined,
}