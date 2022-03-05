// Symbols

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

// uniqueId === uniqueId2 = false

const obj = {
    [uniqueId]: 'Hello'
}

Object.keys(obj); //[]
Object.getOwnPropertySymbols(obj); //[Symbol('Hello')]

console.log(obj);

// Well known symbols

Symbol.iterator; // Um iterador é um passo a passo para você consumir uma lista de dados.
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3];

const it = arr[Symbol.iterator]();

/* 
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

while (true) {
    let { value, done } = it.next()

    console.log(value);

    if(done){
        break;
    }
}

for (let value of arr){
    console.log(value);
}

//

const objIterator = {
    values: [5, 6, 7],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it2 = objIterator[Symbol.iterator]();

for (let value of objIterator){
    console.log(value);
}

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
