class BaseCahce<T>{
    data: T[] = [];
}

class StringCache extends BaseCahce<string>{}

const stringCache = new StringCache()
stringCache.data;

class GenericChild<T, Message> extends BaseCahce<T>{
    message?: Message;

    constructor(message?: Message){
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */

interface BaseGeneric{
    name: string;
}

class Idol<T extends BaseGeneric>{ //BaseGeneric을 extends해서 T 타입은 name이라는 프로퍼티를 상속받아 필요하게된다.
    infomation: T;

    constructor(information: T){
        this.infomation = information;
    }
}

const iu = new Idol({
    name: 'IU',
    age: 24,
})

/**
 * keyof 함께 사용하기
 */

const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

//extends로 K라는 타입에 keyof O라는 형식을 강제했기 때문에 K는 무조건 O의 key값으로 사용이 가능한 타입으로 확정이 된다.
function objectParser<O, K extends keyof O>(obj: O, key: K){
    return obj[key]
}

const val = objectParser(testObj, 'a');

/**
 * Ternary
 * 1===2 ? true : false
 */
class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2{
    type: 'Female Idol' = 'Female Idol'
}

class MaleIdol extends Idol2{
    type: 'Male Idol' = 'Male Idol'
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol()

class BasePayment {
    type?: string;
}

class ViewerPayment extends BasePayment{
    type: 'Viewer' = 'Viewer';
    price: number;
    player: string;
    nickname: string;

    constructor(price:number, player:string, nickname:string){
        super();
        this.price = price;
        this.player = player;
        this.nickname = nickname;
    }
}

class PlayerPayment extends BasePayment{
    type: 'Player' = 'Player';
    price: number;
    nickname: string;

    constructor(price:number, nickname:string){
        super();
        this.price = price;
        this.nickname = nickname;
    }
}

type SpecificPayment<T extends BasePayment> = T extends ViewerPayment ?
ViewerPayment : PlayerPayment;

const payment1 :SpecificPayment<ViewerPayment> = new ViewerPayment(15000, 'nuts', 'nickneck');
const payment2 :SpecificPayment<PlayerPayment> = new PlayerPayment(4000, 'nuts');