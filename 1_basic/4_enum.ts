// Enum
/**
API 요청 상태
4가지의 형태

DONE - 요청 완료 상태
ERROR - 에러가 생긴 상태
LOADING - 로딩 상태
INITIAL - 초기 상태
 */

function runWork(){
    let state = 'INITIAL';

    try{
        state = 'LOADING'

        state = 'DONE';
    }catch(e){
        state = 'ERROR'
    }finally{
        return state;
    }
}

console.log(runWork() === 'DONE');

// javascript 방식
const downState = 'DOWN'
const errorState = 'ERROR'
const loadingState = 'LOADING'
const initialState = 'INITIAL'

function runWork_js(){
    let state = initialState;

    try{
        state = loadingState;


        state = downState;
    }catch(e){
        state = errorState;
    }finally{
        return state;
    }
}

console.log(runWork_js() === downState);

enum State{
    DONW = 'DONW',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork_enum(){
    let state = State.INITIAL;

    try{
        state = State.LOADING;


        state = State.DONW;
    }catch(e){
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log(runWork_enum() === State.DONW);
console.log(runWork_enum());