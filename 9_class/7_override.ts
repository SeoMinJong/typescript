/**
 * Override
 */

class Parent{
    shout(name: string){
        return `Hi, ${name}`
    }
}

class WrongChild extends Parent{
    /**
     * 1) 부모 메서드와 반환같이 같아야한다.
     * 2) 부모 메서드와 파라미터와 같아야한다.
     * 3) 부모 메서드에서 optional인 파라밑들이 자식에서 필수로 지정하면 안된다.
     */
    // shout(){

    // }
}

class Child extends Parent{
    shout(name: string, me?: string): string {
        if(!me){
            return super.shout(name)
        }else{
            return super.shout(name) + `my name ${me}`
        }
    }
}

const IU: Child = new Child();

console.log(IU.shout('Yeon'));
console.log(IU.shout('Yeon', 'IU'));

/**
 * 속성 Override
 */

class PropertyParent{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

// class PropertyChild{
//     name: number;

//     constructor(name: number){
//         this.name = name;
//     }
// }

class PropertyParent2{
    name: string | number;

    constructor(name: string | number){
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2{
    name: string;

    constructor(name: string){
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('mark');
child2.name;