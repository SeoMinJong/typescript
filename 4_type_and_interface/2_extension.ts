/**
 * Extension
 */

// interface와 type은 서로 상속이 가능하고 붙여주는게 가능함

interface IName{
    name: string
}

interface IIdol extends IName{
    age: number
}

const idol: IIdol = {
    name: 'IU',
    age: 30
}

type TName = {
    name: string
}

type TIdol = TName & {
    age: number
}

const idol2: TIdol = {
    name: 'IU',
    age: 30
}

interface IIdol2 extends TName{
    age: number
}

const idol3: IIdol2 = {
    name: 'IU',
    age: 30
}

type TIdol2 = IName & {
    age: number
}

const idol4: TIdol2 = {
    name: 'IU',
    age: 30
}

/**
 * extending multiple
 */

type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed

const dog: Dog = {
    name: '멍이',
    age: 5,
    breed: 'bull'
}

interface CatAge{
    age: number;
}
interface CatBreed{
    breed: string;
}

interface Cat extends CatAge, CatBreed{
    name:string;
}

const cat: Cat = {
    name: '괭이',
    age: 4,
    breed: 'IG'
}


/**
 * Overrding
 */

// type 에서는 상속하는 타입의 맞지 않아도 선언은 하게 해주지만 never 타입이 나오게 된다.

type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string;
    width: number
}

// const rectangle: TRectangle = {
//     height:,
//     width: 200,
// }

type TWidth = {
    width: number | string;
}

type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100,
    width: 200,
}

// Interface에서 상속할 때 타입이 관계성이 맞지 않으면 선언 시 에러가 발생한다.

interface IHeight{
    height: number;
}

// interface IRectangle extends IHeight{
//     height: string;
//     width: number;
// }

interface IWidth{
    width: number | string;
}

interface IRectangle2 extends IWidth{
    height: string;
    width: number;
}

// Type과 Interface 모두 선언 시에 유니언 선언을 통해 선언하고 상속 시 같은 파라미터를 좁혀서 해당 파라미터를 사용할 수 있게 하는 것은 가능하다.