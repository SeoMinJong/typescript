/**
 * Inheritance
 */

class Parent{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    dance(){
        console.log(`dancing ${this.name}`)
    }
}

class Child extends Parent{
    age: number;

    constructor(name:string, age: number){
        super(name);

        this.age = age
    }

    sing(){
        console.log(`child: singing ${this.name}`)
    }
}

const parent = new Parent('parent');
const child = new Child('child', 8);

let person: Parent;

person = parent;
person = child;

let person2: Child

// person2 = parent;
person2 = child;

/**
 * optional 프로퍼티를 유의하자
 */

class Parent2{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Child2 extends Parent{
    age?: number;

    constructor(name:string, age: number){
        super(name);

        this.age = age
    }
}

const parent2 = new Parent('parent');
const child2 = new Child('child', 8);

let person3: Child2;

person3 = child2
person3 = parent2