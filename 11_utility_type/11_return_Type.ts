/**
 * Return Type
 */

function sampleFunction(){
    return 'string'
}

type ReturnTypeSample = ReturnType<typeof sampleFunction>;

const returnType:ReturnTypeSample = '아무스트링'

function sampleFunction1(){
    return 123
}

type ReturnTypeSample1 = ReturnType<typeof sampleFunction1>;

const returnType1:ReturnTypeSample1 = 143423134;