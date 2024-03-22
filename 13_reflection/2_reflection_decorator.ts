/**
 * Reflection Decorator
 */
import 'reflect-metadata';

const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T>{
    index: number;
    restrictedValues: T[];
}

// 1. 제한적 파라미터 값을 사용하기 위한 파라미터 저장
function RestrictParamValue<T>(restrictedValues:T[]){
    return (target: any, propertyKey:string, index:number)=>{
        const preMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

        const info:RestrictionInfo<T>={
            index,
            restrictedValues,
        };

        Reflect.defineMetadata(restrictParamValueKey, [
            ...preMeta,
            info,
        ], target, propertyKey);
        
        console.log(Reflect.getMetadata(restrictParamValueKey, target, propertyKey));
    }
}

// 저장된 파라미터 값을 불러와서 입력된 값과 비교 후 에러&함수실행 처리
function ValidateMethod(target: any, propertyKey: string, descriptor:PropertyDescriptor){
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    const original = descriptor.value;

    descriptor.value = function(...args: any){
        console.log('args :',args);
        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.index])
        );

        if(invalids.length > 0){
            throw Error(`${invalids.map(x => args[x.index]).join(', ')}은(는) 잘못된 값입니다. `)
        }

        return original.apply(this, args);
    }
}

class Idol{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    @ValidateMethod
    sing(@RestrictParamValue(['발라드', '댄스', 'OST']) style: string, @RestrictParamValue([1,2,3,0]) ranking:number){
        return `${this.name}가 ${style} 노래를 부릅니다.`
    }

}

const iu: Idol = new Idol('아이유',31);
console.log(iu.sing('발라드', 2));
console.log(iu.sing('댄스', 1));
console.log(iu.sing('OST', 4));