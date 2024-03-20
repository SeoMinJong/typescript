/**
 * Parameter Type
 * 함수의 파라미터의 타입을 가져와 적용할 수 있다.
 */

function sampleFunction(x:number, y:string, z:boolean){

}

type Params = Parameters<typeof sampleFunction>;
type Params2 = Parameters<(one:number)=>void>;

const params:Params = [1, '1', true]