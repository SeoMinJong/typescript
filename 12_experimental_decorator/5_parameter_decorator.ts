/**
 * Parameter Decorator
 */

class Cat {
    name: string;
    constructor(name:string){
        this.name = name
    }

    bark(@LogParam target: string){
        console.log(`${this.name}가 ${target}를 보고 짖는다.`)
    }

    dance(@LogParam abj: string){
        console.log(`${this.name}가 ${abj}를 보고 짖는다.`)
    }
}

const cat = new Cat('DD')
cat.bark('TT');
cat.dance('swing')

function LogParam(target: any, propertyKey:string, paramIndex: number){
console.log(`${paramIndex}번째 파라미터인 ${propertyKey}가 정의되었습니다.`)
}