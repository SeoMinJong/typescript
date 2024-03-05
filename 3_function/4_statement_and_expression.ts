/**
 * Statment and Expression
 */

function addTwoNumbers(x: number, y: number){
    return x + y
}

const addTwoNumberExp = (x: number, y: number) => {
    return x + y
}


/**
 * Statment
 */

function add(x: number, y:number):number{
    return x + y
}

function subtract(x: number, y:number):number{
    return x - y
}

function multiply(x: number, y:number):number{
    return x * y
}

function divide(x: number, y:number):number{
    return x / y
}

/**
 * Expression
 */

type CalculationType = (x: number, y: number) => number;

const add2 : CalculationType = function(x, y){
    return x + y
}

const subtract2 : CalculationType = function(x, y){
    return x - y
}

const multiply2 : CalculationType = function(x, y){
    return x * y
}

const divide2 : CalculationType = function(x, y){
    return x / y
}