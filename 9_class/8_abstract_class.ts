/**
 * Abstract class
 */

abstract class MOdelWithId{
    id: number;

    constructor(id: number){
        this.id = id
    }
}

// const modelWithId = new MOdelWithId(123); // 직접 인스턴스 선언이 불가능함

class Product extends MOdelWithId{

}

const product = new Product(123);
product.id;

abstract class ModelWithAbstractMethod{
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return 'shout now';
    }
}

