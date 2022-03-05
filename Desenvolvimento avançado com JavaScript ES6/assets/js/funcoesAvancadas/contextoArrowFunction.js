var sumOld = function (a, b) {
    return a + b;
}
console.log(sumOld(2, 3));

// Arrow functions  =>

var sum = (a, b) => a + b; // return implícito
console.log(sum(1, 2));


var multiplicaPor2 = a => a * 2;
console.log(multiplicaPor2(10));


var createObj = () => ({ test: 123 });
console.log(createObj());

function Car(){
    this.foo = 'bar'
}
console.log(new Car());


/* var arrowCar = () => {
    this.foo = 'bar'
}
console.log(new arrowCar()); */
// Não podemos usar arrow function como função construtora


// log('Teste'); ARROW FUNCTION NÃO FAZ HOISTING
var log = value => console.log(value);
log('Teste');




var Obj = {
    showContext: function showContext(){
        var _that = this;

        this.log('Teste');
        setTimeout(
            function() {
                _that.log('after 1000ms');
            }//.bind(this),
            ,1000
        );
    },
    log : function log(value) {
        console.log(value);
    } 
}

Obj.showContext()

var Obj = {
    showContext: function showContext(){
        this.log('Teste');
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    
    log : function log(value) {
        console.log(value);
    } 
}

Obj.showContext()