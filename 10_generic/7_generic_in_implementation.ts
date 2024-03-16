/**
 * Generic in Implementation
 */

interface Singer<T, V>{
    name: T;
    sing(year: V): void;
}

class Idol implements Singer<string, number>{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    sing(year: number){
        console.log(`[${year}] ${this.name}이(가) 노래를 부릅니다.`)
    }
}

const iu = new Idol('아이유');
iu.sing(2024);

class Idol2<T, V> implements Singer<T, V>{
    name: T;

    constructor(name:T){
        this.name = name;
    }

    sing(year: V){
        console.log(`[${year}] ${this.name}이(가) 노래를 부릅니다.`)
    }
}

const yujin = new Idol2<string, number>('안유진');
yujin.sing(2024);