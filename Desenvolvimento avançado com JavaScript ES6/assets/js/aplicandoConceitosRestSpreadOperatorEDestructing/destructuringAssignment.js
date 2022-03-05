var arr = ['Apple', 'Orange', 'Banana', ['Pineapple']];

var apple = arr[0];
var orange = arr[1];
var banana = arr[2];
var pineapple = arr[3][0];

//Destructuring Assignment

var [apple2, orange2, banana2, [pineapple2]] = ['Apple', 'Orange', 'Banana', ['Pineapple']];

console.log(pineapple, pineapple2);

//With objects

var obj = {
    name: 'Bruno',
    props: {
        age: 21,
        favoriteColors: ['Green', 'Gray']
    }
}

var name1 = obj.name;
var age = obj.props.age;

var { name } = obj;
var { name: name2 } = obj;
var { 
    props:{
        age: age1, 
        favoriteColors: [color1, color2]
    }
} = obj; 

console.log(name, name1, name2, age, age1, color1, color2);

// Functions

function sum(arr){
    let [...args] = arr;

    console.log(args.reduce((acc, value) => acc + value, 0));
}

sum([2, 3]);