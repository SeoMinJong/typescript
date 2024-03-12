/**
 * property initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 27;
    // optional 값 선언법
    pet?: string;
    // type of undefined 선언법
    petAge: number | undefined


    constructor(name: string, pet?: string){
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack{
    stack!: string[]; // !로 초기화가 보장이 된 속성을 표시

    constructor(){
        this.initialize();
    }

    initialize(){
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);