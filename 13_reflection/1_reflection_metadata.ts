/**
 * Reflection Metadata
 */

import 'reflect-metadata';

const iu = {
    name: 'IU',
    age: 32,
    nationality: 'KOREA'
}

console.log(iu);

/**
 * Parameter
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티 //optional
 * 
 * metadata - 데이터의 대한 데이터
 */
Reflect.defineMetadata('test-meta',123,iu);

console.log(iu);
console.log(Reflect.getMetadata('test-meta',iu));

Reflect.defineMetadata('test-meta',456,iu);
console.log(Reflect.getMetadata('test-meta',iu));

Reflect.defineMetadata('test-meta1',789,iu);
console.log(Reflect.getMetadata('test-meta1',iu));

Reflect.defineMetadata('information',{'pet':'DD'},iu);
console.log(Reflect.getMetadata('information',iu));

/**
 * 프로퍼티에 저장하기
 */

Reflect.defineMetadata('object-meta', 999, iu, 'name');
console.log(Reflect.getMetadata('object-meta',iu, 'name'));

// Reflect.deleteMetadata('object-meta', iu, 'name');
console.log(Reflect.getMetadata('object-meta',iu, 'name'));

console.log(Reflect.hasMetadata('object-meta',iu,'name'));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, 'name'));

Reflect.defineMetadata('prototype-data','프로토타입 메타',Object.getPrototypeOf(iu));

console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));
