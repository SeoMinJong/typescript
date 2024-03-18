/**
 * Required Type
 * 제너릭에 들어간 모든 요소를 작성하도록 강제함
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Dog = {
    name: '디디'
}

const requiredDog2: Required<Dog> = {
    name: '디디',
    age: 5,
    country: '한국',
}