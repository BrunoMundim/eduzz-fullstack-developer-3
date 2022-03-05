function sumOld(){
    var value = 0;

    for (var i=0; i < arguments.length; i++){
        value += arguments[i];
    }

    return value;
}

console.log(sumOld(5, 2, 1, 3, 4));

//rest operator ...

function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 2, 1, 3, 4));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const spreadOperator = (...args) => {
    return multiply(...args); 
    //Quebra listas e passa como argumentos, pode ser usado pra strings, arrays, literal objects e objetos iteráveis
}

console.log(spreadOperator(5, 2, 1, 3, 4));

function logArgs(...args){
    console.log(args);
}

const dio = 'Digital Inovation One';
const arr = [1, 2, 3, 4];

logArgs(...dio);
logArgs(...arr);

const arr2 = [...arr, 5, 6, 7];
console.log(arr2);
