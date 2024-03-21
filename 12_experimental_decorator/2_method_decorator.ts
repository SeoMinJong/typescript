/**
 * Method Decorator
 */

class Idol{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('DEV')
    dancing(){
        return `${this.name}가 춤을 춥니다.`
    }
}

// target - static method에 데코레이팅 할 경우 생성자 함수
//        - instatnce method에 데코레이팅 할 경우 인스턴스의 propertype
// propertyKey - 메서드의 이름
// descript - property descriptor
function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('LogCall');
    console.log('--- target ---');
    console.log(target)
    console.log('--- propertyKey ---');
    console.log(propertyKey)
    console.log('--- descriptor ---');
    console.log(descriptor)
}

const rose = new Idol('로제');
console.log('--- dancing ---');
console.log(rose.dancing());

function Configurable(Configurable: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.configurable = Configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

function MethodCallLogger(env: string){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;

        descriptor.value = function(...args:any[]){
            console.log(`[${env}] running function : ${propertyKey}`);
            const result = originalMethod.apply(this, ...args);
            
            return result;
        }
    }
}


console.log(rose.dancing());