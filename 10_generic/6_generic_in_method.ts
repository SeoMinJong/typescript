/**
 * Method in Generic
 */

class Idol<T>{
    id: T;
    name: string;

    constructor(id:T, name:string){
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(logTime: Time){
        return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고 ID는 ${this.id}입니다.`
    }
}

const iu = new Idol('555', '아이유');

console.log(iu.sayHello<string>('2023'));
console.log(iu.sayHello<number>(2024));

class Message<T>{
    sayHello<Time>(logTime: Time, message: T){
        console.log(`log time: ${typeof logTime} / message: ${typeof message}`)
    }
}

const message = new Message<string>();
message.sayHello<number>(2023, 'nuts');
message.sayHello<string>('2023', 'nuts');

class DuplicatedGenericName<T>{
    sayHello<T>(logTime:T){
        console.log(`logTime: ${typeof logTime}`)
    }
}

const duplicated = new DuplicatedGenericName<string>();

duplicated.sayHello<number>(2024);