/**
 * Never Type
 */
// neve type 해당 변수가 값을 가질 수 없는 형태로 되어있을 떄 발생
// 1. 함수에서 에러를 던질 때
function throwError(): never{
    throw Error();
}

// 2. 무한 루프
function infiniteLoop(): never{
    while(true){

    }
}

// 3. 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = true;
// let neverType: never = 'string';