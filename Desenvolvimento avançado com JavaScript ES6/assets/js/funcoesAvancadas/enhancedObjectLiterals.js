var prop2 = 'DIO';
var prop3 = 'Programação';

function method1(){
    console.log('method called');
}

var propName = 'prop'

var Obj = {
    prop1: 'Digital Inovation One',
    prop2: prop2,
    prop3,
    method1,
    sum(a, b) {
        console.log(a + b);
    },
    [propName + '4']: 'prop value'
}

console.log(Obj);

Obj.method1();
Obj.sum(2, 3);