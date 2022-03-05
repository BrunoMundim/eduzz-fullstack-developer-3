function multiply(a, b){
    b = b || 1; //Se b = 0, retorna 1 porque 0 = false.

    return a * b;
}
console.log(multiply(5));

function multiply(a, b){
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}
console.log(multiply(5, 0));

// ECMA6
function multiply(a, b = 1){
    return a * b;
}