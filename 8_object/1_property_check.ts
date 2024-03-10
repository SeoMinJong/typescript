/**
 * Property check
 * 
 * 초과 속성 검사
 */

type TName = {
    name: string;
}

type TAge = {
    age: number
}

// 타입의 초과한 속성을 가진 변수에 타입을 부여하는 것은 안됨

const iu = {
    name: 'IU',
    age: 30,
}

const ive = {
    member_number: 5,
    average_age: 20,
}
// 실제 있는 객체를 다른 타입의 변수에 할당할 경우 해당 타입이 가지고 있는 것과 동일한 프로퍼티를 가지고 있을 경우 해당 변수값을 할당받을 수 있고 중복되는 프로퍼티 뿐만 아니라 해당 객체의 값을 모두 할당받게 된다. (빌드에만 적용하는 타입스크립트 특성상 실제로 할당되는 객체 값을 가지는 것이 당연하다.)

const testName: TName = iu;
const testAge: TAge = iu;

console.log(testName);
console.log(testAge);

// const testAge2: TAge = ive;