/**
 * Class as Type and Value
 */

class Dog {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    bark(){
        return `${this.name}가 짖습니다.`
    }
}

let dd = new Dog('DD');
console.log(dd.bark());

// dd = '오리'

dd = {
    name: '오리',
    bark(){
        return '가짜로 짖음';
    }
}