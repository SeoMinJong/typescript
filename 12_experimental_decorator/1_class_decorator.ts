/**
 * Class Decorator
 * 대상 class를 파라미터로 사용됨
 * 클래스를 선언할 떄 데코레이터가 실행이 되고 인스턴스 생성 시 기본적으로 실행되지 않는다.
 */

@Test
@Frozen
@LogTest('SOLO')
@ChangeClass
class Idol{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function){
    console.log(constructor)
}

function Frozen(constructor: Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const iu = new Idol('아이유',31);
console.log(Object.isFrozen(Object.getPrototypeOf(iu)));


// Decorator Factory

function LogTest(env: string){
    return function(constructor: Function){
        console.log(`[${env}] ${constructor}가 반환됩니다.`)
    }
}

console.log('--------------------------------------')

console.log(iu)

function ChangeClass<T extends {new(...args: any[]) : {}}>(constructor: T){
    return class extends constructor{
        groupName = '솔로'
        
        constructor(...params:any[]){
            super(...params);

            console.log('constructor instantiated!')
        }
    }
}