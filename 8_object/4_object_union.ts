/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
{
    name:'Ori',
    age: 5,
} :
{
    name:'DD',
    breed: 'IG'
}

dogOrCat.breed = 'IG';
dogOrCat.age = 1;

console.log(dogOrCat)

interface Dog {
    name: string;
    age: number
}

interface Cat{
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
{
    name:'Ori',
    age: 5,
} :
{
    name:'DD',
    breed: 'IG'
}

dogOrCat2.name;
// dogOrCat2.breed;
// dogOrCat2.age;
console.log(dogOrCat2)

// 네로잉을 통한 타입의 프로퍼티를 가져오는 방법
if('age' in dogOrCat2){
    console.log(dogOrCat2.age)
}else{
    console.log(dogOrCat2.breed)
}

